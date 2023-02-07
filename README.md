
## ZhuZhuHeaven
A project that models the look and feel of an ecommerce website for ZhuZhu pets (a particularly annoying toy from the early 2000s)
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Example Use](#example-use)
* [Live Site](#live-site)

## General Info
The aim of this project was to use various security technologies (like JWT, cookie-session and bcrypt) and UI components (bootstrap cards and MUI) in a mock ecommerce environment. A TDD approach was taken for the login feature using Jest for the backend and Jest/React Test Library for the front end. More extensive tests were written as the project progressed. <br>

## Technologies
Backend Technology: express, cors, mongoose, bcrypt, jsonwebtoken and cookie-session <br>
Frontend Technology: react, react-dom, react-router-dom, cors, bootstrap, axios, mui <br>
Development envirnoment: dotenv, jest, supertest, react test library, nodemon, eslint <br>
## Setup
The website will allow users to signup, signin, browse, search for pets and signout <br>
To Create: <br> Fork and download, create a MongoDB and populate an items table with the contents of docs/db.txt. <br> 
Then create .env with CLIENT_URL, DATABASE_URL, JWT_SECRET and COOKIE_SECRET and client/.env with REACT_APP_SERVER_URL.<br>
## Example Use
Open the home page. <br>
![Zhuzhu](/docs/logo.png?raw=true "Home Page") <br>
Select a category or type the name of a Zhu Zhu pet in the search bar and click search icon. <br>
Select the signup button to create an account (added to th db). Signin button to verify database details for a user. Signout to end a session.
## Live Site
This project has been deployed on render using CI/CD. See it here:
https://zhuzhuheaven.onrender.com/ <br>
**Please note: main page is currently slow to resolve in free tier (approx 20secs); backend and db hosted in Singapore, front end global.
