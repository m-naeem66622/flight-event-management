# Flight Event Management

This is a server-side rendered application built with Express.js and MySQL2 for managing flight events.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
* You have a Windows/Linux/Mac machine.
* You have installed [MySQL server](https://dev.mysql.com/downloads/installer/).

## Setup

1. Open Command Prompt
2. Navigate to the project directory.
3. Set up your MySQL database. Update the database configuration (username, password, dbname, etc.) in `src/db/config.js` as needed.
4. Run `npm install` to install the project dependencies.
6. Create an account on [Ethereal Email](https://ethereal.email/) to get nodemailer configuration.
7. Update `src/helpers/nodemailer.helper.js` with the received configuration.
8. Run `npm start` to start the server.
9. Navigate to `http://localhost:3000` in your web browser to view the application.

## Usage

To use the application:

1. Navigate to the application in your web browser.
2. Enter your email (required).
3. Select the departure date (required).
4. If you're planning a round trip, check the "Roundtrip" box. This will make the return date field appear (optional).
5. Click "Reserve Ticket" to create a flight event.

You will receive a confirmation email once the flight event is successfully created.
