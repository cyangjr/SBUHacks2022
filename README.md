# SBU Hacks 101
### Creators: Wilson Wuchen, Adrianna Peng, Chang Yang, Julian Hisarza

---

This hack contains a frontend webapp built on Next.js and a backend build on Flask (python). It utilizies the Twilio API. The purpose of this project is to provide an easy-to-use interface that people can use to set up reminders to take their various medications. It is highly customizable, and users can create reminders with the medication’s name, description, dosage, and frequency for intake. Once a reminder is created, users will receive regular text messages in the set intervals they specified.


## Tech Stack

---

React (JS), Flask (Python), Twilio

Made using Node.js v16.17.1, and Python v3.8.5

## Hosting

---

To get started: clone this repository and run `npm i` in the terminal to install the required node modules. Run `npm run dev` to start the developmental server.

In another terminal, run `venv/Scripts/activate` to activate the virtual environment. Then, run `flask run` to start the flask server.

Now in your favorite web browser, go to ```http://localhost:3000``` to access the webapp and create your first reminder! Make sure to change the phone number in the `src/components/home/Reminder.jsx`. (You need to go to Twilio and verify this phone number in order to get text messages set to it!)