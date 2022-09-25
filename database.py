from re import I
from peewee import *

database = SqliteDatabase('reminders.db')

class Reminders(Model): 
    name = CharField()
    medication = CharField()
    description = CharField()
    
