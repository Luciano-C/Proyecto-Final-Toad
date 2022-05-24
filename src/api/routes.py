"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Mascota, Usuario_Mascota
from api.utils import generate_sitemap, APIException
import datetime
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)
jwt = Blueprint('jwt', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/usuarios", methods=["GET"])
def get_usuarios():
    todos_usuarios = Users.query.all()
    todos_usuarios = list(map(lambda x: x.serialize(), todos_usuarios))
    return jsonify(todos_usuarios), 200



@api.route("/crear-usuario", methods=["POST"])
def crear_usuario():
    data = request.get_json()
    # {"email": "mariob@aol.com", "password": 1234, "nombre": "mario", "apellidos": "bros", "telefono": "123456678", "direccion": "alguna tuberia" }
    check_ususario = Users.query.filter_by(email=data["email"]).first()
    if check_ususario:
        return jsonify({"mensaje": "Usuario ya existe en base de datos"})
    else:
        nuevo_usuario = Users()
        nuevo_usuario.email = data["email"]
        nuevo_usuario.password = data["password"]
        nuevo_usuario.nombre = data["nombre"]
        nuevo_usuario.apellidos = data["apellidos"]
        nuevo_usuario.telefono = data["telefono"]
        nuevo_usuario.direccion = data["direccion"]

        db.session.add(nuevo_usuario)
        db.session.commit()

        return jsonify(nuevo_usuario.serialize())



@api.route("/mascotas", methods=["GET"])
def get_mascotas():
    todas_mascotas = Mascota.query.all()
    todas_mascotas = list(map(lambda x: x.serialize(), todas_mascotas))
    return jsonify(todas_mascotas), 200


@api.route("/crear-mascota", methods=["POST"])
def crear_mascota():
    #perro_1 = {"nombre": "Juanito", "edad": 2, "especie": "perro", "sexo": "Macho", "tamaño": "Mediano", "nivel_actividad": "Alto", "otros_cuidados": "Ninguno", "url_foto": "https://res.cloudinary.com/dnwy0nzzr/image/upload/v1652914840/qxe66pkjkgrfu6z7f6t2.jpg"}
    data = request.get_json()
    nueva_mascota = Mascota()
    nueva_mascota.nombre = data["nombre"]
    nueva_mascota.edad = data["edad"]
    nueva_mascota.especie = data["especie"]
    nueva_mascota.sexo = data["sexo"]
    nueva_mascota.tamaño = data["tamaño"]
    nueva_mascota.nivel_actividad = data["nivel_actividad"]
    nueva_mascota.otros_cuidados = data["otros_cuidados"]
    nueva_mascota.url_foto = data["url_foto"]

    db.session.add(nueva_mascota)
    db.session.commit()

    return jsonify(nueva_mascota.serialize())

@api.route("/crear-usuario-mascota/", methods=["POST"])
def añadir_usuario_mascota():
    #usuario_mascota = {"id_usuario" = 1, "id_mascota" = 10}
    data = request.get_json()
    id_u = data["id_usuario"]
    id_m = data["id_mascota"]
    check_usuario_mascota = Usuario_Mascota.query.filter_by(id_usuario=id_u, id_mascota = id_m).first()
    if check_usuario_mascota:
        return jsonify({"mensaje": "Esta mascota ya está registrada a este dueño"})
    
    else:

        nuevo_usuario_mascota = Usuario_Mascota()
        nuevo_usuario_mascota.id_usuario = id_u
        nuevo_usuario_mascota.id_mascota = id_m

        db.session.add(nuevo_usuario_mascota)
        db.session.commit()

        return jsonify(nuevo_usuario_mascota.serialize())
