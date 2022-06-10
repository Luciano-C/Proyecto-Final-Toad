"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, Users
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
import datetime
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False
jwt = JWTManager()                                                                                  #INDICAR APLICACION!!!!!

# Para autenticación con JWT
from flask_jwt_extended import JWTManager
# Instancia jwt
jwt = JWTManager(app)


# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# Registrar usuario
@app.route("/registro", methods=['POST'])
def registra_usuario():
    data = request.get_json()
    newUser = Users()
    newUser.nombre = data['nombre']
    newUser.apellidos = data['apellidos']
    newUser.email = data['email']
    newUser.password = data['password']
    newUser.direccion = data['direccion']
    db.session.add(newUser)
    db.session.commit()

    return jsonify({"mensaje": "Usuario registrado correctamente"})

# Login Usuario
@app.route("/login", methods=['POST'])
def logear():
    data = request.get_json()
    oneUser = Users.query.filter_by(email=data['email'], password= data['password']).first()
    if(oneUser):
        expire = datetime.timedelta(minutes=1)
        acceso = create_access_token(identity=oneUser.email, expires_delta=expire)
        response = {"Token":acceso, "expiracion":expire.total_seconds(), "email":oneUser.email}

        return jsonify(response)
    else:
        return "mail o contraseña no son válidos"

# Acceso a perfil usuario
@app.route("/perfil", methods=['GET'])
@jwt_required()
def acceso_perfil():
    token = get_jwt_identity()
    return jsonify({
    "mensaje": "Bienvenido",
    "usuario":token
        })


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
