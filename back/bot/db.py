from os import environ

import mongoengine 

from mongoengine import Document
from mongoengine import StringField, IntField
from mongoengine.errors import NotUniqueError



db_uri = environ['DB_URI']

mongoengine.connect(host=db_uri, db='Portfolio')



class AdminsList(Document):
    tg_id = IntField(unique=True)

class RequestsList(Document):
    tg_id = IntField(unique=True)
    name = StringField()
    username = StringField()

class Receivers(Document):
    tg_id = IntField(unique=True)
    name = StringField()
    username = StringField()



class DB:
    def __init__(self, admin: list):
        self.admin = admin
        
        try:
            AdminsList(tg_id=admin).save()
        except NotUniqueError:
            pass

    @staticmethod
    def get_admin():
        return AdminsList.objects.first().tg_id

    @staticmethod
    def insert_request(tg_id: int, name: str, username: str): 
        record = RequestsList(tg_id=tg_id, name=name, username=username)
        record.save() 
            
    @staticmethod
    def insert_receivers(tg_id: int, name: str, username: str):
        record = Receivers(tg_id=tg_id, name=name, username=username)
        record.save() 
    
    @staticmethod
    def delete_request(tg_id: int):
        record = RequestsList.objects(tg_id=tg_id).delete()


    