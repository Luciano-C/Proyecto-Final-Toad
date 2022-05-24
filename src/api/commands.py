
import click
import random
from api.models import db, Users, Mascota, Usuario_Mascota

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creating test users")
        nombres = ["Jorge", "María", "Bob", "Ana"]
        apellidos = ["Martinez Lopez", "Rodriguez Gomez", "Rojas Ahumada"]

        for x in range(1, int(count) + 1):
            user = Users()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.nombre = random.choice(nombres)
            user.apellidos = random.choice(apellidos)
            user.telefono = "981234568"
            user.direccion = "Callequenoexiste 123"
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

        ### Insert the code to populate others tables if needed

    @app.cli.command("insertar-mascotas-prueba")
    @click.argument("count")
    def insert_pets_data(count):
        print("Creating pets")
        nombres = ["Chocolate", "Orejas", "Coco", "Bentley", "Ollie"]
        edades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        sexos = ["Macho", "Hembra"]
        tamaños = ["Chico", "Mediano", "Grande"]
        niveles_act = ["Bajo", "Mediano", "Alto"]
        urls_foto = [
            "https://static.nationalgeographic.es/files/styles/image_3200/public/01-stray-dogs-nationalgeographic_1927666.webp?w=1600&h=900", 
            "https://nupec.com/wp-content/uploads/2020/07/Captura-de-pantalla-2020-07-24-a-las-17.33.44.png", 
            "https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg.webp", 
            "https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600,c_limit/202931.jpg",
            "https://www.semana.com/resizer/mZMAc-3bQx6FyEUgCZFUzBOmHYc=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/HQHVR5EYHJE2JI5SMUGY5NDLTM.jpg"
        ]

        #perro_1 = {"nombre": "Rex", "edad": 5, "especie": "Perro", "sexo": "Macho", "tamaño": "Mediano", "nivel_actividad": "Alto", "otros_cuidados": "Ninguno", "url_foto": "https://res.cloudinary.com/dnwy0nzzr/image/upload/v1652914840/qxe66pkjkgrfu6z7f6t2.jpg"}
    
        for x in range(1, int(count) + 1):
            mascota = Mascota()
            mascota.nombre = random.choice(nombres)
            mascota.edad = random.choice(edades)
            mascota.especie = "Perro"
            mascota.sexo = random.choice(sexos)
            mascota.tamaño = random.choice(tamaños)
            mascota.nivel_actividad = random.choice(niveles_act)
            mascota.otros_cuidados = "Ninguno"
            mascota.url_foto = random.choice(urls_foto)
        
            db.session.add(mascota)
            db.session.commit()
            print(f"Perro {mascota.nombre} creado")
        print("Todos los perros creados")

