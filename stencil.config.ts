import { Config } from '@stencil/core';
import tailwind, {tailwindHMR} from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'my-webcomponents',
  globalStyle: './src/app.css',
  plugins:[
    tailwind(),
    tailwindHMR(),
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
