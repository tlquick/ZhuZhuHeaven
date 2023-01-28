# ZhuZhuHeaven
Mock ecommerce website, circa 2023 <br>
Create a simple ecommerce website with JWT to sell ZhuZhu pets (a particularly annoying toy from the early 2000s) <br>
![Zhuzhu](/docs/logo.png?raw=true "Home Page") <br>
Project uses: <br>
Backend Technology: express, cors, mongoose, bcrypt, jsonwebtoken, cookie-session, and either[paypal or stripe] - not sure yet<br>
	Dev: dotenv, jest, supertest, nodemon, eslint <br>
Approach: TDD <br>
Frontend technology: react, react-dom, react-router-dom, cors, bootstrap, axios, mui <br>
The website will allow users to signup, signin, browse, add to cart and purchase a limited number of items and signout <br>
To Create: <br> Fork and download, create a MongoDB and populate an items table with the contents of docs/db.txt. <br> Then create .env with CLIENT_URL, DATABASE_URL, JWT_SECRET and COOKIE_SECRET and client/.env with REACT_APP_SERVER_URL.<br>
*** Please note: I have run out of build minutes on render, so no CI/CD - will deploy at the end of January 2023 when new build minutes are available
