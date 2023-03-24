const icongen = require('icon-gen');

const options = {
  report: true,
  ico: {
    name: 'favicon',
    sizes: [48],
  },
  icns: {
    name: 'tddo-app',
    sizes: [256],
  },
  favicon: {
    name: 'tddo-app',
    pngSizes: [128],
    icoSizes: [],
  },
};

icongen('src/icon.svg', 'public/', options);
