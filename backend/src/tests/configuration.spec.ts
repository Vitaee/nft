/* eslint-disable no-console */
import configs from '../utils/configuration';

describe('env test', () => {
  it('should have a port number', () => {
    expect(configs.port).toBe(process.env.APP_PORT);
  });
});
