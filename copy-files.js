const { move } = require('fs-extra');
const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const dirs = path =>
  readdirSync(path).filter(dirPath =>
    statSync(join(path, dirPath)).isDirectory()
  );

dirs('./lib').forEach(dir => {
  move(`./lib/${dir}`, `./${dir}`);
});
