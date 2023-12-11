# Event Portal - A Node.js-based Assignment
Imagine that your city's local community center has asked you to 
develop a server-side event management system to help them organize 
various events such as workshops, seminars, and social gatherings. The 
community center needs an easy-to-use application to create, manage, 
and update events, notify attendees, upload and manage event images, 
and maintain an event calendar.

Create a server-side event management system using Node.js and 
MySQL. The application should provide users the ability to create, read, 
update, and delete events, upload files such as event images, and send 
email notifications to attendees.

This project will require you to do the following:
- Installing Node.js and setting up a development environment
- Building server-side applications and APIs with Node.js
- Creating and using Node.js modules
- Handling HTTP requests
- Using the Node.js File System and URL module
- Creating and handling events with event emitters and event 
listeners
- Implementing file uploading functionality
- Sending and receiving emails
- Connecting Node.js applications to MySQL databases
- Performing CRUD operations with Node.js and MySQL

### Requirements:
1. Install Node.js and set up a development environment. Initialize 
your project with `npm init`.
2. Build a server-side application with Node.js and Express. Create 
routes and APIs for event management, including creating, 
reading, updating, and deleting events.
3. Create a MySQL database with a table for storing event data (e.g., 
event name, date, time, location, and description). Connect your 
Node.js application to the MySQL database using a suitable 
library, such as **mysql2** or **sequelize**.
4. Implement CRUD operations with Node.js and MySQL, allowing 
users to interact with the event data.
5. Add the ability to upload files (e.g., event images) to your 
application. Utilize the Node.js File System module to save and 
retrieve files from your server.
6. Implement email functionality to send email notifications to 
attendees. Use an email library like nodemailer to configure email 
servers and clients, handle email templates, and manage errors 
and exceptions.
7. Employ the event-driven architecture of Node.js by creating and 
handling events using event emitters and event listeners in 
various parts of your application (e.g., file upload progress, email 
delivery status).
8. Implement appropriate security measures to ensure your 
application is scalable and secure.

### Submission: 
Submit your source code, including your server-side 
JavaScript files, HTML/CSS files for the user interface, and SQL files for 
database setup, along with a comprehensive readme file explaining your 
application's architecture, features, and instructions for installation and 
usage. Include screenshots or a video walkthrough to showcase your 
application's functionality.

# Final Project
### Project Overview
The goal of this project is to create a simple airline ticket reservation page using HTML, CSS, 
JavaScript, and Node.js. The project will consist of three main parts:
1. Design a simple HTML page with a form to allow users to input their email address and flight 
date and reserve a ticket.
2. Use JavaScript to add functionality to the form to allow users to select a round-trip flight and 
enter a return date.
3. Write an Express app to serve the HTML, CSS, and JavaScript files created in parts 1 and 2 and 
create an endpoint to handle the submission of the reservation ticket.

### Part 1: Designing the HTML Page
In this part of the project, you will create a simple HTML page with a form to allow users to 
input their email address and flight date and reserve a ticket, and style it using CSS. The page 
should consist of the following elements:
1. A header image related to airlines
2. A header title “Airline Ticket Reservation”
3. A form with the following inputs:
    - Email address input (type: email)
    - Flight date input (type: date)
    - Reserve ticket button (type: submit)
4. The header and the form should be centered on the page and the form should have a border 
around it.

The CSS should be in a separate file from the HTML and JavaScript.

### Part 2: Adding Functionality with JavaScript
In this part of the project, you will use JavaScript to add functionality to the form to allow 
users to select a round-trip flight and enter a return date if needed. Additional to the current 
form fields, the form should consist of the following elements:
- A checkbox labeled “Round-Trip”
- An input for return flight date (type: date)

When the user checks the Round-Trip checkbox, the return flight date input should appear.<br/>
When the user unchecks the checkbox, the return flight date input should disappear.
### Part 3: Creating the Express App
In this part of the project, you will create an Express app to serve the HTML, CSS, and 
JavaScript files created in parts 1 and 2 and create an endpoint to handle the submission of 
the reservation ticket. The app should consist of the following elements:
1. An endpoint that serves the HTML, CSS, and JavaScript files created in parts 1 and 2 on the 
root endpoint path.
2. An endpoint that handles the submission of the reservation ticket.
3. The form submission endpoint should validate that the flight date and the return flight date 
(if provided) are in the future, and if it’s not it should respond with a simple HTML page that 
informs the user that the ticket reservation isn’t successful due to invalid dates.
4. If the form data is valid:
a. The endpoint should send a confirmation email to the email address provided by the 
user. The email should contain a brief message thanking the user for their 
reservation. Hint: Refer to week 8 for sending emails.
b. The endpoint should respond with a simple thank you HTML page
5. Modify the HTML form to submit the user input to the form submission endpoint you 
created.

### Additional Requirements
1. The HTML, CSS, and JavaScript should be separated into their respective files.
2. The form should have some basic client-side validation to ensure that the email address is 
valid.
### Deliverables
Upon completion of the project, you should provide the following deliverables:
- A compressed file containing the Express app folder for Part 3, which serves the HTML, CSS, 
and JavaScript files from Parts 1 and 2. The Express app folder should include all the 
necessary HTML, CSS, and JavaScript files created in Parts 1 and 2.
- A README file describing the project and how to run the Express app locally, including any 
dependencies that need to be installed.