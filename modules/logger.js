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

const loggerInstance = new Logger();
export { loggerInstance as logger };
