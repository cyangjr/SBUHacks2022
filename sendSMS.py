# Download the helper library from https://www.twilio.com/docs/python/install
import os
import requests
from twilio.rest import Client
from flask import Flask, request
from dotenv import load_dotenv

app = Flask(__name__)

# Instructions for setting Account SID and Auth Token variables
# MAC & LINUX
#   echo "export TWILIO_ACCOUNT_SID='<ACCOUNT SID>'" > twilio.env
#   echo "export TWILIO_AUTH_TOKEN='<AUTH TOKEN'" >> twilio.env
#   source ./twilio.env
# WINDOWS
#   set TWILIO_ACCOUNT_SID=ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
#   set TWILIO_AUTH_TOKEN=your_auth_token


# use FormData object in fetch request to pass data for sending message
endpoint = "http://localhost:5000/api/send_message"
load_dotenv(dotenv_path="twilio.env")

@app.route("/api/send_message", methods=["POST"]) 
def send_Message():
    '''
    Responds to the post request sent by JS
    
    '''
    if request.method == "POST":
        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)

        
        name = request.form["name"]
        medication = request.form["medication"]
        phone_number = request.form["phone_number"]
        res = f"Hello {name}! Remember to take your {medication}."

        message = client.messages.create(
            body=res,
            # form data is like dictionary
            from_='+18596483770',
            to='+1' + phone_number
        )
    return ""
    

# process: load env variables, export FLASK_APP=file.py, flask run, curl http://localhost:5000/api/send_message