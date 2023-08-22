const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const API = require("../../Server");

chai.use(chaiHttp);

describe("API End Point Test", function () {
  it("Checking the successful request", function (done) {
    chai.request(API)
      .get('/v1/learnEnd')
      .query({ customParam: 'value' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.be.true;
        expect(res.body.message).to.equal('welcome to testing learning');
        done();
      });
  });

  it("Checking the error request", function (done) {
    chai.request(API)
      .get('/v1/learnEnd')
      .query({ error: true })
      .end((err, res) => {
        expect(res).to.have.status(500);
        expect(res.body.status).to.be.false;
        expect(res.body.message).to.equal('something went wrong');
        done();
      });
  });
});

