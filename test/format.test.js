import winston from "winston";

test("loggin with format", () => {
  const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.logstash(),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello Format");
});

test("loggin with printf format", () => {
  const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(),
    // format: winston.format.simple(),
    // format: winston.format.logstash(),
    format: winston.format.printf((log) => {
      return `${new Date()} : ${log.level.toUpperCase()}: ${log.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.info("Hello Format");
  logger.warn("Hello Format");
  logger.error("Hello Format");
});
