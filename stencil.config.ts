import { Config } from '@stencil/core';
const packageJson = require('./package.json');
// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      baseUrl: packageJson.seo.baseUrl,
      type: 'www',
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
      prerenderConfig: 'prerender.config.js'
    }
  ],
  copy: [
    {
      src: 'urls.json'
    },
    {
      src: '404.html'
    }
  ]
};
