"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Mascota, Usuario_Mascota
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/usuarios", methods=["GET"])
def get_usuarios():
    todos_usuarios = User.query.all()
    todos_usuarios = list(map(lambda x: x.serialize(), todos_usuarios))
    return jsonify(todos_usuarios), 200

@api.route("/mascotas", methods=["GET"])
def get_mascotas():
    todas_mascotas = Mascota.query.all()
    todas_mascotas = list(map(lambda x: x.serialize(), todas_mascotas))
    return jsonify(todas_mascotas), 200


@api.route("/crear-mascota", methods=["POST"])
def crear_mascota():
    data = request.get_json()
    nueva_mascota = Mascota()
    #perro_1 = {"nombre": "Rex", "edad": 5, "especie": "perro", "sexo": "Macho", "tamaño": "Mediano", "nivel_actividad": "Alto", "otros_cuidados": "Ninguno", "url_foto": "https://res.cloudinary.com/dnwy0nzzr/image/upload/v1652914840/qxe66pkjkgrfu6z7f6t2.jpg"}
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

    return f"Mascota añadida"

@api.route("/añadir-usuario-mascota/id_usuario=<int:id_usuario>/id_mascota=<int:id_mascota>", methods=["POST"])
def añadir_usuario_mascota(id_usuario, id_mascota):
    #data = request.get_json()
    nuevo_usuario_mascota = Usuario_Mascota()
    nuevo_usuario_mascota.id_usuario = id_usuario
    nuevo_usuario_mascota.id_mascota = id_mascota

    db.session.add(nuevo_usuario_mascota)
    db.session.commit()

    return "Dueño añadido"
