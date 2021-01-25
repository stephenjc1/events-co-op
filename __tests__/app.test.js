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
    describe('POST', () => { 
     it('POST status:201, returns new event when passed a valid event', () => {
    const eventToPost = { type: '5 a-side football', location: "Manchester central powerleague", date_time: "2021-03-10 19:00:00", host: 'jessjelly', details: 'friendly game of 5 a-side.'};
      return request(app)
      .post('/api/events')
      .send(eventToPost)
      .expect(201)
      .then(({ body : { event }}) => {
        expect(Object.keys(event)).toEqual(
          expect.arrayContaining([
            'type',
            'location',
            'date_time',
            'host',
            'details',
          ])
        )
      })
     }); 
     });
  });  
  describe('/events/:event_id', () => { 
    describe('GET', () => { 
   it('GET status:200, serves up an event by id', () => { 
     return request(app)
      .get('/api/events/1')
      .expect(200)
      .then((res) => {
    expect(res.body.event.event_id).toBe(1);
  })
   }); 
   });
     });
 });