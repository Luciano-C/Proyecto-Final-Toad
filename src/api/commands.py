
import click
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
        for x in range(1, int(count) + 1):
            user = Users()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            #user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

        ### Insert the code to populate others tables if needed

    @app.cli.command("insertar-mascotas-prueba")
    def insert_pets_data():
        print("Creating pets")
        perro_1 = {"nombre": "Rex", "edad": 5, "especie": "Perro", "sexo": "Macho", "tamaño": "Mediano", "nivel_actividad": "Alto", "otros_cuidados": "Ninguno", "url_foto": "https://res.cloudinary.com/dnwy0nzzr/image/upload/v1652914840/qxe66pkjkgrfu6z7f6t2.jpg"}
        perro_2 = {"nombre": "Frank", "edad": 8, "especie": "Perro alien", "sexo": "Macho", "tamaño": "Chico", "nivel_actividad": "Bajo", "otros_cuidados": "Ninguno", "url_foto": "https://mx.web.img3.acsta.net/r_654_368/newsv7/19/06/15/15/49/2289976.jpg"}
        lista_perros = [perro_1, perro_2]
        print(perro_1["nombre"])
        for perro in lista_perros:
            mascota = Mascota()
            mascota.nombre = perro["nombre"]
            mascota.edad = perro["edad"]
            mascota.especie = perro["especie"]
            mascota.sexo = perro["sexo"]
            mascota.tamaño = perro["tamaño"]
            mascota.nivel_actividad = perro["nivel_actividad"]
            mascota.otros_cuidados = perro["otros_cuidados"]
            mascota.url_foto = perro["url_foto"]
        
            db.session.add(mascota)
            db.session.commit()
            print(f"Perro {mascota.nombre} creado")
        print("Todos los perros creados")

