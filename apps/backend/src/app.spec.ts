import request from 'supertest';
import { app } from './app';

describe('GET /', () => {
  it('responds with a JSON message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hi API' });
  });

  it('responds with 404 for non-existing route', async () => {
    const response = await request(app).get('/non-existing');
    expect(response.status).toBe(404);
  });
});
