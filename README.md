# User Login and Signup

This is a simple signup and login web site where users can sign up for an account and login as well. Once logged in, users are greeted with their username on the homepage. I created this because I wanted to play around with user login and signup functionality. 

![image](https://user-images.githubusercontent.com/64509710/217971134-6dbbdbe1-ce75-4a97-ba99-7746c5677fc6.png)

## Tech Stack
This project was created with HTML, CSS, SASS and JavaScript for the Front-End and node.js, express.js and JavaScript for the Back-End. JWT was used to authenticate users and information exchange. Axios was useed on the Front-End to handle HTTP requests.

**Front End**
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,sass,js"/>
  </a>
</p>

**Back End**
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,nodejs,express"/>
  </a>
</p>

### `Run and Install Locally`

Clone the project in desired folder from the terminal

    git clone https://github.com/jacky-ui/login-signup.git

Once cloned, you will need to insstall all the dependencies on the server side. This can be done by running the below commands in your terminal. Make sure you are in the project folder/directory

    npm i
    
Finally, to run login-signup you would have to open your IDE, open the project folder if it isn't already open, then:

    npx index.js

### `Environment Variables`

To run this project, you will need to add the following environment variables to your .env file

PORT: The port on your local machine on which you want to run the server. If you're not sure which port to use, a good default is 8080.

URL: A URL path for HTTP requests. If you are running on your local machine, this should be set to http://localhost:<insert port>

JWT_KEY: A series of random chracters that is used to encrypt the JWT token. This is used to authenticate users when a request is made.
