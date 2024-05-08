import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
  })
  .unknown(true);

//const { error, value: envVars } = envsSchema.validate(process.env);
const { error, value } = envsSchema.validate(process.env);

//console.log({ error });
//console.log({ envVars });

if (error) {
  throw new Error(`Config valitation error: ${error.message}`);
}

const envVars: EnvVars = value;
// valdar

export const envs = {
  //port: process.env.PORT,
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
};
