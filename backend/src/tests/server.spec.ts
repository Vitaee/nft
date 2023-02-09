/* eslint-disable no-console */
import app from '../server';
import supertest from 'supertest';
describe('Testing Express Api', () => {
  it('Tests the base route', async () => {
    const response = await supertest(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
  });
});
