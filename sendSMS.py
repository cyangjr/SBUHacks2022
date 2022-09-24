# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client
from flask import Flask

app = Flask(__name__)


@app.route("/api/send_message")
def send_Message():
    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    message = client.messages.create(
        body='Hi there',
        from_='+18596483770',
        to='+19177699558'
    )

    return message.sid

# Find your Account SID and Auth Token in Account Info
# Instructions for setting env variables
# MAC & LINUX
#   echo "export TWILIO_ACCOUNT_SID='<ACCOUNT SID>'" > twilio.env
#   echo "export TWILIO_AUTH_TOKEN='<AUTH TOKEN'" >> twilio.env
#   source ./twilio.env
# WINDOWS
#   set TWILIO_ACCOUNT_SID=ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
#   set TWILIO_AUTH_TOKEN=your_auth_token
