const https = require("https");
const { readFileSync } = require("fs");
const { resolve } = require("path");
const chalk = import("chalk").then(m => m.default);

const pkg = JSON.parse(
	readFileSync(resolve(__dirname, "../../../package.json"))
);
const localVersion = pkg.version;
const packageName = pkg.name;

const log = async (level, msg) => {
	const timestamp = new Date().toISOString();
	const levelTag = `[${level}]`.padEnd(8, " ");

	console.log(
		(await chalk).gray(`[${timestamp}]`) +
			(await chalk).yellow(levelTag) +
			msg
	);
};

function checkVersion() {
	return new Promise(resolvePromise => {
		const url = `https://registry.npmjs.org/${packageName}`;
		https
			.get(url, res => {
				let data = "";

				res.on("data", chunk => (data += chunk));
				res.on("end", () => {
					try {
						const json = JSON.parse(data);
						const latest = json["dist-tags"].latest;

						if (latest && latest !== localVersion) {
							log(
								"WARN",
								"Your version is different from the current one, we recommend you to update the package or ignore this message."
							);
							log(
								"WARN",
								`New version available: ${latest} (current: ${localVersion})`
							);
							console.log("\n\n");
						}
						resolvePromise();
					} catch {
						resolvePromise();
					}
				});
			})
			.on("error", () => {
				resolvePromise();
			});
	});
}

module.exports = { checkVersion };
