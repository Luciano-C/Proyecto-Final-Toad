"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Mascota, Usuario_Mascota, Formulario_Adopcion, Candidato_Mascota_Formulario
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

@api.route("/get-usuario-email", methods=["GET"])
def get_user_by_email():
    # Ejemplo Body: {"email": "test_user1@test.com"}
    data = request.get_json()
    usuario = Users.query.filter_by(email=data["email"]).first()
    if usuario:
        return jsonify(usuario.serialize()), 200
    else:
        return jsonify({"mensaje": "El usuario no existe en la base de datos"}), 200


@api.route("/editar-usuario", methods=["PUT"])
def editar_usuario():
    data = request.get_json()
    usuario_a_editar = Users.query.filter_by(id=data["id"]).first()
    if usuario_a_editar:
        usuario_a_editar.email = data["email"]
        usuario_a_editar.password = data["password"]
        usuario_a_editar.nombre = data["nombre"]
        usuario_a_editar.apellidos = data["apellidos"]
        usuario_a_editar.telefono = data["telefono"]
        usuario_a_editar.direccion = data["direccion"] 

        db.session.commit()
        return jsonify(usuario_a_editar.serialize()), 200
    else:
        return jsonify({"mensaje": "El usuario no existe en la base de datos"}), 200
        

@api.route("/crear-usuario", methods=["POST"])
def crear_usuario():
    data = request.get_json()
    # Ejemplo Body: {"email": "mariob@aol.com", "password": 1234, "nombre": "mario", "apellidos": "bros", "telefono": "123456678", "direccion": "alguna tuberia" }
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
    #Ejemplo Body = {"nombre": "Juanito", "edad": 2, "especie": "perro", "sexo": "Macho", "tamaño": "Mediano", "nivel_actividad": "Alto", "otros_cuidados": "Ninguno", "url_foto": "https://res.cloudinary.com/dnwy0nzzr/image/upload/v1652914840/qxe66pkjkgrfu6z7f6t2.jpg"}
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
    #Ejemplo Body = {"id_usuario": 1, "id_mascota": 10}
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

@api.route("/formularios", methods=["GET"])
def get_formularios():
    todos_formularios = Formulario_Adopcion.query.all()
    todos_formularios = list(map(lambda x: x.serialize(), todos_formularios))
    return jsonify(todos_formularios), 200

@api.route("/crear-formulario", methods=["POST"])
def crear_formulario():
    data = request.get_json()
    # Ejemplo Body: {"pregunta_1": "respuesta", "pregunta_2": "respuesta", "pregunta_3": "respuesta", "pregunta_4": "respuesta", "pregunta_5": "respuesta", "pregunta_6": "respuesta", "pregunta_7": "respuesta"}
   
    nuevo_formulario = Formulario_Adopcion()
    nuevo_formulario.pregunta_1 = data["pregunta_1"]
    nuevo_formulario.pregunta_2 = data["pregunta_2"]
    nuevo_formulario.pregunta_3 = data["pregunta_3"]
    nuevo_formulario.pregunta_4 = data["pregunta_4"]
    nuevo_formulario.pregunta_5 = data["pregunta_5"]
    nuevo_formulario.pregunta_6 = data["pregunta_6"]
    nuevo_formulario.pregunta_7 = data["pregunta_7"]
 
    db.session.add(nuevo_formulario)
    db.session.commit()

    return jsonify(nuevo_formulario.serialize())

@api.route("/crear-candidato-mascota-formulario")
def crear_candidato_mascota_formulario():
    data = request.get_json()
    # Ejemplo body: {"id_usuario": 1, "id_mascota": 10, "id_formulario": 1}
    id_u = data["id_usuario"]
    id_m = data["id_mascota"]
    id_f = data["id_formulario"]
    check_candidato_mascota_formulario = Candidato_Mascota_Formulario.query.filter_by(id_usuario=id_u, id_mascota = id_m, id_formulario = id_f).first()
    if check_candidato_mascota_formulario:
        return jsonify({"mensaje": "Este candidato ya está postulando a adoptar esta mascota"})
    
    else:

        nuevo_candidato_mascota_formulario = Candidato_Mascota_Formulario()
        nuevo_candidato_mascota_formulario.id_usuario = id_u
        nuevo_candidato_mascota_formulario.id_mascota = id_m
        nuevo_candidato_mascota_formulario.id_formulario = id_f

        db.session.add(nuevo_candidato_mascota_formulario)
        db.session.commit()

        return jsonify(nuevo_candidato_mascota_formulario.serialize())
