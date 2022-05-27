const fs = require('fs');

fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\n`);
fs.writeFileSync('./.env', `APP_ID=${process.env.APP_ID}\n`);