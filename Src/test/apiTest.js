const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const API = require("../../Server");
const BaseUrl = '/v1/learnEnd'
chai.use(chaiHttp);


//Testing API;
describe("API End Point Test", function () {
  it("Checking the successful request", function (done) {
    chai.request(API)
      .get(BaseUrl)
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
      .get(BaseUrl)
      .query({ error: true })
      .end((err, res) => {
        expect(res).to.have.status(500);
        expect(res.body.status).to.be.false;
        expect(res.body.message).to.equal('something went wrong');
        done();
      });
  });
});

//Get AllUser (/all_user);
describe('Get All user endpoint testing', () => {
  it('should handle error', (done) => {
    chai.request(API)
      .get(BaseUrl + '/all_user')
      .query({ error: 'true' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(500);
        expect(res.body.status).to.be.false;
        expect(res.body.message).to.equal('Something went wrong');
        done()
      });
  });

  it('should get all users', (done) => {
    chai.request(API)
      .get(BaseUrl + '/all_user')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.be.true;
        expect(res.body.data).to.be.an('array');
        done()
      });
  });
});

//Create new user;
describe('Create New User', () => {
  it('Should handle error', (done) => {
    chai.request(API)
      .post(BaseUrl + '/createNewUser')
      .query({ error: true })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.status).to.be.false;
        expect(res).to.have.status(500)
        expect(res.body.message).to.equal('something went wrong')
        done()
      })
  })

  it('should create new user', (done) => {
    const newUser = {
      "first_name": "first",
      "last_name": "last",
      "mobile_number": "1234567890",
      "email": "Test@gmail.com",
      "password": "Test@gmail.com"
    };

    chai.request(API)
      .post(`${BaseUrl}/createNewUser`)
      .send(newUser)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.request._data).to.deep.equal(newUser);
        if (res.body.status) {
          expect(res).to.have.status(201);
          expect(res.body.message).to.equal('Successfully new user created');
        } else {
          expect(res).to.have.status(500);
          expect(res.body.message).to.equal('something went wrong');
        }
        done();
      });
  });


})

