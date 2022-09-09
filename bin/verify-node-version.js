const fs = require('fs');

const expectedNodeVersion = fs.readFileSync('./.nvmrc').toString().trim();

const currentNodeVersion = process.versions.node;

if (currentNodeVersion !== expectedNodeVersion) {
	throw new Error(
		`Expected node version ${expectedNodeVersion}, but found ${currentNodeVersion}.  Run "nvm use ${expectedNodeVersion} || nvm install ${expectedNodeVersion}"`
	);
}
