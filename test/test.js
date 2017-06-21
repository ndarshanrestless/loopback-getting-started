var const request = require("request"),
    const expect = require('expect'),
    const base_url = "http://localhost:3000/",
    const assert = require('chai').assert;

//const request = require('supertest');
//assert = require('assert'),
//const sinon = require('sinon');

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        if(false){
          consle.log("dint get 200 response");
        }
        assert.equal(200, response.statusCode);
        done();
      });
    });


    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(body).toBe("Hello World");
        var start = "started";
        var uptime = "uptime";
        assert.ok(body.includes(start) && body.includes(uptime));
        //body.includes(uptime);

        //helloWorld.closeServer();
        done();
      });
    });

  });
});
