/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.get('/', (req, res) => {
    res.status(200).send('Hello from typescript express!');
});
app.listen(port, () => {
    console.log(`Node app listening on port ${port}`);
});
