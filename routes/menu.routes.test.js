const app = require("../app.js");
const request = require("supertest");
const mongoose = require("mongoose");

describe("GET /menu", () => {
  it("returns status 200", (done) => {
    request(app).get("/menu").expect(200, done);
  });
});
describe("GET /menu/categories", () => {
  it("returns status 200", (done) => {
    request(app).get("/menu/categories").expect(200, done);
  });
});
describe("GET /menu/categories/:id", () => {
  it("returns status 200", (done) => {
    request(app).get("/menu/categories/:id").expect(200, done);
  });
});
describe("POST /menu/search", () => {
  it("returns status 200", (done) => {
    request(app).post("/menu/search").expect(200, done);
  });
});
/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
