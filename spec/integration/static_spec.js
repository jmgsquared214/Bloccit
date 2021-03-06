const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const marco = "http://localhost:3000/marco";

describe("routes : static", () => {

    describe("GET /", () => {

        it("should return status code 200 and have 'Welcome Bloccit' in the body of the response", (done) => {

            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                expect(body).toContain("Welcome to Bloccit");
                done();
            });
        });
    });

    describe("GET /marco", () => {
        it("should return status 200, and the body should read polo", (done) => {

            request.get(marco, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                expect(body).toBe("polo");

                done();
            });
        });
    });
})