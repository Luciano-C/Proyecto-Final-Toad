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

@api.route("/mascotas", methods=["GET"])
def get_mascotas():
    todas_mascotas = Mascota.query.all()
    todas_mascotas = list(map(lambda x: x.serialize(), todas_mascotas))
    return jsonify(todas_mascotas), 200