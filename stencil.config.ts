import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import { reactOutputTarget } from '@stencil/react-output-target'
import postcssConfig from './postcss.config'

export const config: Config = {
  namespace: 'liquid',
  srcDir: 'src/liquid',
  globalStyle: 'src/liquid/global/styles/global.css',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '..',
      proxiesFile: './src/react.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
    },
    {
      type: 'docs-readme',
      footer: ' ',
    },
    {
      type: 'docs-vscode',
      file: 'tmp/web-components.html-data.json',
    },
    {
      type: 'docs-json',
      file: 'dist/web-components.json',
    },
  ],
  plugins: [postcss(postcssConfig)],
  testing: {
    allowableMismatchedPixels: 0,
    setupFiles: ['./jest.setup.js'],
    moduleDirectories: ['node_modules', './'],
    timers: 'legacy',
    // browserHeadless: false,
    // browserDevtools: true,
    // browserSlowMo: 1000, // milliseconds
  },
  buildEs5: false,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    shadowDomShim: false,
    safari10: false,
    scriptDataOpts: false,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: false,
  },
}
