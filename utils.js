const electron = require('electron');

const beforeEach = function (env = {}) {
  this.app = new Application({
    path: electron,
    args: ['.'],
  });

  return this.app.start();
};

const afterEach = function () {
  if (this.app && this.app.isRunning()) {
    return this.app.stop();
  }
  return undefined;
};