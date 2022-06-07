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

@api.route("/get-usuario/email=<email>", methods=["GET"])
def get_user_by_email(email):
    usuario = Users.query.filter_by(email=email).first()
    if usuario:
        return jsonify(usuario.serialize()), 200
    else:
        return jsonify({"mensaje": "El usuario no existe en la base de datos"}), 200

@api.route("/get-password/email=<email>", methods=["GET"])
def get_password_by_email(email):
    usuario = Users.query.filter_by(email=email).first()
    if usuario:
        return jsonify(usuario.password), 200
    else:
        return jsonify({"mensaje": "El usuario no existe en la base de datos"}), 200


@api.route("/editar-usuario", methods=["PUT"])
def editar_usuario():
    data = request.get_json()
    # Ejemplo Body: {"email": "mariob@aol.com", "password": 1234, "nombre": "mario", "apellidos": "bros", "direccion": "alguna tuberia", "telefono": "123456678"}
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
    # Ejemplo Body: {"email": "mariob@aol.com", "password": 1234, "nombre": "mario", "apellidos": "bros", "direccion": "alguna tuberia", "telefono": "123456678"}
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


@api.route("/usuario-mascota", methods=["GET"])
def get_usuarios_mascotas():
    todos_usuarios_mascotas = Usuario_Mascota.query.all()
    todos_usuarios_mascotas = list(map(lambda x: x.serialize(), todos_usuarios_mascotas))
    return jsonify(todos_usuarios_mascotas), 200


@api.route("/formularios", methods=["GET"])
def get_formularios():
    todos_formularios = Formulario_Adopcion.query.all()
    todos_formularios = list(map(lambda x: x.serialize(), todos_formularios))
    return jsonify(todos_formularios), 200


@api.route("/crear-formulario/id-usuario=<id_usuario>/id-mascota=<id_mascota>", methods=["POST"])
def crear_formulario(id_usuario, id_mascota):
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
    
    nuevo_candidato_mascota_formulario = Candidato_Mascota_Formulario()
    nuevo_candidato_mascota_formulario.id_usuario = id_usuario
    nuevo_candidato_mascota_formulario.id_mascota = id_mascota
    nuevo_candidato_mascota_formulario.id_formulario = nuevo_formulario.serialize()["id"]

    db.session.add(nuevo_candidato_mascota_formulario)
    db.session.commit()

    return jsonify(nuevo_formulario.serialize())    



# Rutas para buscar respuesta de formulario
@api.route("/get-usuario/id=<id_usuario>", methods=["GET"])
def get_user_by_id(id_usuario):
    usuario = Users.query.filter_by(id=id_usuario).first()
    if usuario:
        return jsonify(usuario.serialize()), 200
    else:
        return jsonify({"mensaje": "El usuario no existe en la base de datos"}), 200


@api.route("/get-mascota/id=<id_mascota>", methods=["GET"])
def get_mascota_by_id(id_mascota):
    mascota = Mascota.query.filter_by(id=id_mascota).first()
    if mascota:
        return jsonify(mascota.serialize()), 200
    else:
        return jsonify({"mensaje": "La mascota no existe en la base de datos"}), 200

@api.route("/get-formulario/id=<id_formulario>", methods=["GET"])
def get_formulario_by_id(id_formulario):
    formulario = Formulario_Adopcion.query.filter_by(id=id_formulario).first()
    
    if formulario:
        return jsonify(formulario.serialize()), 200
    else:
        return jsonify({"mensaje": "El formulario no existe en la base de datos"}), 200

# Obtiene los id mascotas del usuario objetivo
@api.route("/get-usuario-mascota/id-usuario=<id_usuario>", methods=["GET"])
def get_usuario_mascota_by_id_usuario(id_usuario):
    usuario_mascotas = Usuario_Mascota.query.filter_by(id_usuario=id_usuario).all()
    return jsonify(list(map(lambda x: x.serialize(), usuario_mascotas)))


## NO ES SEGURO SI ES NECESARIA
@api.route("/get-usuario-mascota-formulario/id-mascota=<id_mascota>", methods=["GET"])
def get_usuario_mascota_formulario_by_id_mascota(id_mascota):
    usuario_mascotas_formulario = Candidato_Mascota_Formulario.query.filter_by(id_mascota=id_mascota).all()
    return jsonify(list(map(lambda x: x.serialize(), usuario_mascotas_formulario)))

@api.route("/get-usuario-mascota-formulario/", methods=["GET"])
def get_usuario_mascota_formulario():
    todos_usuarios_mascota_formulario = Candidato_Mascota_Formulario.query.all()
    todos_usuarios_mascota_formulario = list(map(lambda x: x.serialize(), todos_usuarios_mascota_formulario))
    return jsonify(todos_usuarios_mascota_formulario), 200


@api.route("/get-mascotas-by-user/id-user=<id_user>",methods=["GET"])
def get_mascota_by_user_id(id_user):
    usuario_mascota = Usuario_Mascota.query.filter_by(id_usuario=id_user).all()
    ids_mascotas = [x.id_mascota for x in usuario_mascota]
    todas_las_mascotas = Mascota.query.all()
    mascotas_usuario = [x for x in todas_las_mascotas if x.id in ids_mascotas]
    return jsonify([x.serialize() for x in mascotas_usuario])


@api.route("/get-postulaciones-by-user/id-user=<id_user>", methods=["GET"])
def get_postulaciones_by_user_id(id_user):
    candidatos_mascotas_formularios = Candidato_Mascota_Formulario.query.filter_by(id_usuario=id_user).all()
    dueños_mascotas = Usuario_Mascota.query.all()

    id_mascotas = [x.id_mascota for x in candidatos_mascotas_formularios]
    id_formularios = [x.id_formulario for x in candidatos_mascotas_formularios]
    id_dueños = [x.id_usuario for x in dueños_mascotas if x.id_mascota in id_mascotas]
    
    
    mascotas = []
    for id in id_mascotas:
        mascota_a_añadir = Mascota.query.filter_by(id=id).first()
        mascotas.append(mascota_a_añadir.serialize())
    
    dueños = []
    for id in id_dueños:
        dueño_a_añadir = Users.query.filter_by(id=id).first()
        dueños.append(dueño_a_añadir.serialize())
    
    lista_a_mapear = []

    for i in range(len(mascotas)):
        lista_a_mapear.append({"mascota": mascotas[i], "dueño": dueños[i], "idFormulario": id_formularios[i]})
   
    return jsonify(lista_a_mapear)

@api.route("/check-if-owner/id-user=<id_user>/id-pet=<id_pet>", methods=["GET"])
def check_if_user_owns_pet(id_user, id_pet):
    check = Usuario_Mascota.query.filter_by(id_usuario=id_user, id_mascota=id_pet).all()
    if len(check) == 0:
        return jsonify({"mensaje": False})
    else:
        return jsonify({"mensaje": True})


@api.route("delete-pet/id-pet=<id_pet>", methods=["DELETE"])
def delete_pet(id_pet):
    # Se debe borrar formularios de adopción asociados, y relación de dueño.
    todos_candidato_mascota_formulario = Candidato_Mascota_Formulario.query.filter_by(id_mascota=id_pet).all()
    for elemento in todos_candidato_mascota_formulario:
        if elemento:
            db.session.delete(elemento)
            db.session.commit()


    usuario_mascota = Usuario_Mascota.query.filter_by(id_mascota=id_pet).first()
    if usuario_mascota:
        db.session.delete(usuario_mascota)
        db.session.commit()

    mascota_a_borrar = Mascota.query.filter_by(id=id_pet).first()
    if mascota_a_borrar:
        db.session.delete(mascota_a_borrar)
        db.session.commit()
    
    return jsonify({"mensaje": "Mascota borrada."})


@api.route("/editar-mascota/id-pet=<id_pet>", methods=["PUT"])
def editar_mascota(id_pet):
    #Ejemplo Body = {"nombre": "Juanito", "edad": 2, "especie": "perro", "sexo": "Macho", "tamaño": "Mediano", "nivel_actividad": "Alto", "otros_cuidados": "Ninguno", "url_foto": "https://res.cloudinary.com/dnwy0nzzr/image/upload/v1652914840/qxe66pkjkgrfu6z7f6t2.jpg"}
    data = request.get_json()
    mascota_a_editar = Mascota.query.filter_by(id=id_pet).first()
    mascota_a_editar.nombre = data["nombre"]
    mascota_a_editar.edad = data["edad"]
    mascota_a_editar.especie = data["especie"]
    mascota_a_editar.sexo = data["sexo"]
    mascota_a_editar.tamaño = data["tamaño"]
    mascota_a_editar.nivel_actividad = data["nivel_actividad"]
    mascota_a_editar.otros_cuidados = data["otros_cuidados"]
    mascota_a_editar.url_foto = data["url_foto"]

    
    db.session.commit()

    return jsonify(mascota_a_editar.serialize())