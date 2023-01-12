const app = require("../app.js");
const request = require("supertest");
const mongoose = require("mongoose");

describe("GET /info/privacy", () => {
  it("returns status 200", (done) => {
    request(app).get("/info/privacy").expect(200, done);
  });
});
describe("GET /info/terms", () => {
  it("returns status 200", (done) => {
    request(app).get("/info/terms").expect(200, done);
  });
});
describe("GET /info/agreement", () => {
  it("returns status 200", (done) => {
    request(app).get("/info/agreement").expect(200, done);
  });
});
describe("GET /info/sitemap", () => {
  it("returns status 200", (done) => {
    request(app).get("/info/sitemap").expect(200, done);
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
