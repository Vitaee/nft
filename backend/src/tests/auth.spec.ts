/* eslint-disable no-console */
import app from '../server';
import supertest from 'supertest';
describe('Testing Auth Controllers', () => {
  it('Tests the register route', async () => {
    const response = await supertest(app).post('/auth/register').send({
      username: 'hanifi',
      email: 'hanifi@gmail.com',
      password: '123456',
    });

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
  });

  it('Test the login route', async () => {
    const response = await supertest(app).post('/auth/login').send({
      email: 'harun@gmail.com',
      password: '123456',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
  });
});
