import { Config } from '@stencil/core';
import tailwind, {tailwindGlobal, tailwindHMR} from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'my-webcomponents',
  plugins:[
    tailwind(),
    tailwindHMR(),
    tailwindGlobal()
  ],
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
