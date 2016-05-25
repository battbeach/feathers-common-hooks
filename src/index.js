import errors from 'feathers-errors';
import makeDebug from 'debug';

const debug = makeDebug('feathers-common-hooks');

class Service {
  constructor(options = {}) {
    this.options = options;
  }

  find(params) {
    return new Promise((resolve, reject) => {
      // Put some async code here.
      if (!params.query) {
        return reject(new errors.BadRequest());
      }

      resolve([]);
    });
  }
}

export default function init(options) {
  debug('Initializing feathers-common-hooks plugin');
  return new Service(options);
}

init.Service = Service;
