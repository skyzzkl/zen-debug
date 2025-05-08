const process = require("node:process");
const chalk = require("chalk");

const { logger } = require("./modules/logger.cjs");
require("./modules/version.cjs");

module.exports = logger;
