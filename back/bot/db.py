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



    