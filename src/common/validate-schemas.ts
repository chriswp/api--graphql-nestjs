import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string().default('development'),
  APP_NAME: Joi.string().default('App Graphql').required(),
  APP_PORT: Joi.number().default(3000),
  APP_DEBUG: Joi.string().default(false),

  DB_CONNECTION: Joi.string().default('mysql'),
  DB_HOST: Joi.string().default('localhost'),
  DB_DATABASE: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_PORT: Joi.number().default(3306),

  PASSWORD_SALT: Joi.number().default(10),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES: Joi.string().default('7d'),
});
