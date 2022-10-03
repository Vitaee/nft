/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import app from './server';
import supertest from "supertest";
describe('Testing Express Api', () => {

  it('Tests the base route', async () => {

    const response = await supertest(app).get('/');

		expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
  });

});
