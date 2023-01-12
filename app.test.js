const app = require("./app.js");
const request = require("supertest");
const mongoose = require("mongoose");

describe("Home page is live", () => {
  it("returns status 200", (done) => {
    request(app).get("/").expect(200, done);
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
