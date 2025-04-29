import chalk from "chalk";
import process from "node:process";

class Logger {
  constructor() {
    this.levels = {
      info: "INFO",
      conn: "CONN",
      warn: "WARN",
      error: "ERROR",
    };
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const levelTag = `[${level}]`.padEnd(8, " ");

    switch (level) {
      case this.levels.error:
        console.log(
          chalk.gray(`[${timestamp}]`) + chalk.red(levelTag) + message
        );
        break;
      case this.levels.warn:
        console.log(
          chalk.gray(`[${timestamp}]`) + chalk.yellow(levelTag) + message
        );
        break;
      case this.levels.conn:
        console.log(
          chalk.gray(`[${timestamp}]`) + chalk.blue(levelTag) + message
        );
        break;
      case this.levels.info:
      default:
        console.log(
          chalk.gray(`[${timestamp}]`) + chalk.green(levelTag) + message
        );
        break;
    }
  }

  info(message) {
    this.log(this.levels.info, message);
  }

  conn(message) {
    this.log(this.levels.conn, message);
  }

  warn(message) {
    this.log(this.levels.warn, message);
  }

  error(message) {
    const errorMessage =
      message instanceof Error
        ? `${message.message}\n${message.stack}`
        : message;
    this.log(this.levels.error, errorMessage);
  }
}

class Debugger {
  constructor(logger) {
    if (!logger) {
      throw new Error("Debugger requires a Logger instance.");
    }
    this.logger = logger;
  }

  capture() {
    const originalWarn = console.warn;
    const originalError = console.error;

    process.on("uncaughtException", (err) => {
      this.logger.error(`Exceção Não Capturada: ${err.message}\n${err.stack}`);
    });

    process.on("unhandledRejection", (reason, promise) => {
      const reasonStr =
        reason instanceof Error
          ? `${reason.message}\n${reason.stack}`
          : String(reason);
      this.logger.error(
        `Rejeição de Promise Não Tratada.\nPromise: ${promise}\nMotivo: ${reasonStr}`
      );
    });

    console.warn = (...args) => {
      this.logger.warn(args.map(String).join(" "));
      originalWarn(...args);
    };

    console.error = (...args) => {
      this.logger.error(
        args
          .map((arg) =>
            arg instanceof Error ? `${arg.message}\n${arg.stack}` : String(arg)
          )
          .join(" ")
      );
      originalError(...args);
    };

    this.logger.info(
      "Debugger ativado. Capturando exceções não tratadas e rejeições de promessas."
    );
    this.logger.info(
      "Console.warn e console.error foram substituídos para capturar mensagens."
    );
  }
}

const loggerInstance = new Logger();
const debuggerInstance = new Debugger(loggerInstance);

debuggerInstance.capture();

export { loggerInstance as logger };
