const app = require("../app.js");
const request = require("supertest");
const db = require("../models");
const User = db.user;
const mongoose = require("mongoose");

describe("POST /user/signup", () => {
  it("returns status 200", (done) => {
    request(app)
      .post("/user/signup")
      .send({
        username: "Test",
        email: "testing@gmail.com",
        password: "test123",
        roles: ["user"],
      })
      .expect(200, done);
  });
  it("returns status 400", (done) => {
    request(app)
      .post("/user/signup")
      .send({
        username: "Test",
        email: "testing@gmail.com",
        password: "test123",
        roles: ["user"],
      })
      .expect(400, done);
  });
});
describe("POST /user/signin", () => {
  it("returns status 404", (done) => {
    request(app)
      .post("/user/signin")
      .send({
        username: "bad",
        password: "123bad",
      })
      .expect(404, done);
  });
  it("returns status 401", (done) => {
    request(app)
      .post("/user/signin")
      .send({
        username: "Test",
        password: "123bad",
      })
      .expect(401, done);
  });
  it("returns status 200", (done) => {
    request(app)
      .post("/user/signin")
      .send({
        username: "Test",
        password: "test123",
      })
      .expect(200, done);
  });
});
describe("GET /user/cart", () => {
  it("returns status 200", (done) => {
    request(app).post("/user/signin").send({
      username: "Test",
      password: "test123",
    });
    request(app).get("/user/cart").expect(200, done);
  });
});
describe("POST /user/cart/add", () => {
  it("returns status 200", (done) => {
    request(app).post("/user/cart/add").expect(200, done);
  });
});
describe("POST /user/signout", () => {
  it("returns status 200", (done) => {
    request(app).post("/user/signout").expect(200, done);
  });
});
/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
  jest.setTimeout(50000);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

/* disconnect and clean up after all tests */
afterAll(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
  await User.deleteMany();
  await mongoose.connection.close();
});
