from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(120), nullable=True)
    apellidos = db.Column(db.String(120), nullable=True)
    telefono = db.Column(db.String(20), nullable=True)
    direccion = db.Column(db.String(120), nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "telefono": self.telefono,
            "direccion": self.direccion
            # do not serialize the password, its a security breach
        }

class Mascota(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    especie = db.Column(db.String(120), nullable=False)
    sexo = db.Column(db.String(6), nullable=False)
    tamaño = db.Column(db.String(7), nullable=False)
    nivel_actividad = db.Column(db.String(7), nullable=False)
    otros_cuidados = db.Column(db.String(200), nullable=True)
    url_foto = db.Column(db.String(200), nullable=True)

    def __repr__(self):
        return f'<Mascota {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "edad": self.edad,
            "especie": self.especie, 
            "sexo": self.sexo,
            "tamaño": self.tamaño,
            "nivel_actividad": self.nivel_actividad,
            "otros_cuidados": self.otros_cuidados,
            "url_foto": self.url_foto
        }

class Usuario_Mascota(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("users.id"))
    id_mascota = db.Column(db.Integer, db.ForeignKey("mascota.id"))
    rel_usuario = db.relationship("Users")
    rel_mascota = db.relationship("Mascota")
    
    def serialize(self):
        return {
            "id": self.id,
            "id_usuario": self.id_usuario,
            "id_mascota": self.id_mascota    
        }



class Formulario_Adopcion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pregunta_1 = db.Column(db.String(500), nullable=True)
    pregunta_2 = db.Column(db.String(500), nullable=True)
    pregunta_3 = db.Column(db.String(500), nullable=True)
    pregunta_4 = db.Column(db.String(500), nullable=True)
    pregunta_5 = db.Column(db.String(500), nullable=True)
    pregunta_6 = db.Column(db.String(500), nullable=True)
    pregunta_7 = db.Column(db.String(500), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "pregunta_1": self.pregunta_1,
            "pregunta_2": self.pregunta_2,
            "pregunta_3": self.pregunta_3,
            "pregunta_4": self.pregunta_4,
            "pregunta_5": self.pregunta_5,
            "pregunta_6": self.pregunta_6,
            "pregunta_7": self.pregunta_7,    
        }

class Candidato_Mascota_Formulario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("users.id"))
    id_mascota = db.Column(db.Integer, db.ForeignKey("mascota.id"))
    id_formulario = db.Column(db.Integer, db.ForeignKey("formulario__adopcion.id"))
    rel_usuario = db.relationship("Users")
    rel_mascota = db.relationship("Mascota")
    rel_formulario = db.relationship("Formulario_Adopcion")

    def serialize(self):
        return {
            "id": self.id,
            "id_usuario": self.id_usuario,
            "id_mascota": self.id_mascota,
            "id_formulario": self.id_formulario    
        }
    