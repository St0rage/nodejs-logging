async function callAsync() {
  return Promise.reject("Ups");
}

import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "exception.log",
    }),
  ],
});

callAsync();
