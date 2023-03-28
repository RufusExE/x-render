import { defineConfig } from 'dumi';
import path from 'path';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  favicons: ['https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png'],
  outputPath: 'docs-dist',
  // locales: [{ id: 'zh-CN', name: '中文' }, { id: 'en-US', name: 'English' }],
  locales: [{ id: 'zh-CN', name: '中文' }],
  themeConfig: {
    name: 'XRender',
    logo: 'https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png',
    footer: false,
    socialLinks: {
      github: 'https://github.com/alibaba/x-render',
    },
    nav: {
      'zh-CN': [
        {
          title: 'FormRender',
          link: '/form-render',
        },
        {
          title: 'TableRender',
          link: '/table-render',
        },
        {
          title: 'ChartRender',
          link: '/chart-render',
        },
        { title: '表单设计器', link: '/generator' },
        {
          title: 'Playground',
          link: '/playground',
        }
      ],
      // 'en-US': [
      //   {
      //     title: 'FormRender',
      //     link: '/en/form-render',
      //   }
      // ]
    },
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@alifd/next',
        libraryDirectory: 'lib',
      },
      '@alifd/next',
    ],
  ],
  ignoreMomentLocale: true,
  chainWebpack(config, { webpack }) {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin);
  },
  headScripts: [
    'https://unpkg.com/react@17.0.1/umd/react.production.min.js',
    'https://g.alicdn.com/code/lib/react-dom/16.14.0/umd/react-dom.production.min.js'
  ],
  plugins: [require.resolve('./scripts/dumi-plugin/redirect')],
  alias: { 
    'form-render':  path.resolve(__dirname, 'packages/form-render/src'),
    'table-render':  path.resolve(__dirname, 'packages/table-render/src'),
    'chart-render':  path.resolve(__dirname, 'packages/chart-render/src'),
    'fr-generator':  path.resolve(__dirname, 'tools/schema-generator/src'),
    'fr-design':  path.resolve(__dirname, 'tools/schema-design/src')
  },
  codeSplitting: { jsStrategy: 'granularChunks' },
  //...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
});

