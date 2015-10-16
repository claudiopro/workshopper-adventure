#!/usr/bin/env babel-node

import {Adventure} from './adventure';

class LegacyWorkshopper extends Adventure {
  constructor(options) {
    if (options.showHeader === undefined)
      options.showHeader = true

    super(...options);

    if (!(this instanceof LegacyWorkshopper))
      return new LegacyWorkshopper(options)

    this.execute(process.argv.slice(2))
  }
}

export {LegacyWorkshopper};
