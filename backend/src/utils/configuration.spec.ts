/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import configs from "./configuration";
import * as dotenv from "dotenv"
dotenv.config({path: './.env.development'});

describe('env test', () => {
    it('should have a client id', () => {
        expect(configs.port).toBe(undefined);
    });
});
