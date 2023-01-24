const app = require("../app.js");
const request = require("supertest");
const mongoose = require("mongoose");

describe("Get /search", () => {
  it("returns status 200", (done) => {
    request(app).get("/search").expect(200, done);
  });
});
describe("POST /category", () => {
  it("returns status 200", (done) => {
    request(app).get("/category").expect(200, done);
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
