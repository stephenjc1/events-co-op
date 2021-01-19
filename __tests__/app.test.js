// process.env.NODE_ENV = 'test';
const app = require('../server.js');
const request = require('supertest');
const connection = require('../db/connection');

beforeEach(() => {
  return connection.seed.run();
});

afterAll(() => {
  return connection.destroy();
});

// describe('app', () => { 
//  it('status 404 when invalid endpoint', () => { 
//    return request(app)
//    .get('/invalidendpoint')
//    .expect(404)
//    .then(({ body: { msg } }) => {
//      expect(msg).toBe('This page does not exist');
//    });
//  }); 
//  });
describe('/api', () => {
  describe('/events', () => {
    describe('GET', () => {
it('Status: 200 successful request returns an array of events', () => {
  return request(app)
  .get('/api/events')
  .expect(200)
  .then((res) => {
    expect(res.body.events).toEqual(expect.any(Array));
    expect(res.body.events.length).toBe(2);
  });
});
    });
  });  
 });