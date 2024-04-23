import winston from "winston";

test("transport level", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "application-error.log",
      }),
    ],
  });

  logger.info("Hello World");
  logger.info("Hello World");
  logger.info("Hello World");
  logger.info("Hello World");
  logger.error("Hello Error");
  logger.error("Hello Error");
  logger.error("Hello Error");
});
