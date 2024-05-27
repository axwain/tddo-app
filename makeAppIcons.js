const icongen = require('icon-gen');

const options = {
  report: true,
  ico: {
    name: 'icon',
    sizes: [256],
  },
  icns: {
    name: 'icon',
    sizes: [512],
  },
  favicon: {
    name: 'icon',
    pngSizes: [512],
    icoSizes: [256],
  },
};

icongen('src/icon.svg', 'build/', options);
