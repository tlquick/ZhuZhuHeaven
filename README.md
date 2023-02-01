# ZhuZhuHeaven
Mock ecommerce website, circa 2023 **under development - expected finish mid February 2023<br>
Create a simple ecommerce website with JWT to sell ZhuZhu pets (a particularly annoying toy from the early 2000s) <br>
![Zhuzhu](/docs/logo.png?raw=true "Home Page") <br>
Project uses: <br>
Backend Technology: express, cors, mongoose, bcrypt, jsonwebtoken, cookie-session, and either[paypal or stripe] - not sure yet<br>
	Dev: dotenv, jest, supertest, nodemon, eslint <br>
Approach: TDD for login, BDD for Cart<br>
Frontend technology: react, react-dom, react-router-dom, cors, bootstrap, axios, mui <br>
The website will allow users to signup, signin, browse, add to cart and purchase a limited number of items and signout <br>
To Create: <br> Fork and download, create a MongoDB and populate an items table with the contents of docs/db.txt. <br> Then create .env with CLIENT_URL, DATABASE_URL, JWT_SECRET and COOKIE_SECRET and client/.env with REACT_APP_SERVER_URL.<br>
<h2> Live Deployment </h2>
This project has been deployed on render using CI/CD. See it here:
https://zhuzhuheaven.onrender.com/
**Please note: main page is currently slow to resolve in free tier (approx 20secs); backend and db hosted in Singapore, front end global.
