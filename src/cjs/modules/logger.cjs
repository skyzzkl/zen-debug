const chalk = import("chalk").then(m => m.default);
const process = require("node:process");
const { checkVersion } = require("./version.cjs");

class Logger {
	constructor() {
		this.levels = {
			info: "INFO",
			conn: "CONN",
			warn: "WARN",
			error: "ERROR"
		};
	}

	async log(level, message) {
		const c = await chalk;
		const timestamp = new Date().toISOString();
		const levelTag = `[${level}]`.padEnd(8, " ");

		let color;
		switch (level) {
			case this.levels.error:
				color = c.red;
				break;
			case this.levels.warn:
				color = c.yellow;
				break;
			case this.levels.conn:
				color = c.blue;
				break;
			case this.levels.info:
			default:
				color = c.green;
		}

		console.log(c.gray(`[${timestamp}]`) + color(levelTag) + message);
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

const logger = new Logger();

checkVersion();

module.exports = { logger };
