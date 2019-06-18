import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      baseUrl: 'https://stencil-seo-starter1.com/',
      type: 'www',
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
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
