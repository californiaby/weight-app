const expect = require('chai').expect;
const request = require('supertest');

const url = 'http://localhost:3000';

describe('/users', () => {
  let createdUserId;

  it('GET /users should return a list of users', () => {
    return request(url)
      .get('/users')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
      });
  });

  it('POST /users should create a new user', () => {
    return request(url)
      .post('/users')
      .send({
        name: 'acceptance',
        email: 'acceptance@fake.com',
      })
      .set('Accept', 'application/json')
      .then((res) => {
        expect(res.status).to.equal(201);
        createdUserId = res.body._id;
      });
  });

  it('GET /users/:id should return specific user details', () => {
    return request(url)
      .get(`/users/${createdUserId}`)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body._id).to.equal(createdUserId);
      });
  });

  it('DELETE /users/:id should delete specific user', () => {
    return request(url)
      .delete(`/users/${createdUserId}`)
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body._id).to.equal(createdUserId);
      });
  });

  it('Deleted user shouldn\'t be present', () => {
    return request(url)
      .get('/users')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');

        expect(res.body).to.not.include({ _id: createdUserId });
      });
  });
});
