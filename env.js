import * as dotenv from 'dotenv';
dotenv.config();

export const AWS_ACCESS_KEY_ID = process.env.VITE_AWS_ACCESS_KEY_ID;
export const AWS_SECRET_ACCESS_KEY = process.env.VITE_AWS_SECRET_ACCESS_KEY;