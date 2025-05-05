import https from "https";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(readFileSync(resolve(__dirname, "../package.json")));
const localVersion = pkg.version;
const packageName = pkg.name;

const log = async (level, msg) => {
	const timestamp = new Date().toISOString();
	const levelTag = `[${level}]`.padEnd(8, " ");

	await console.log(
		chalk.gray(`[${timestamp}]`) + chalk.yellow(levelTag) + msg
	);
};

export function checkVersion() {
	return new Promise((resolvePromise, reject) => {
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
