import { defineConfig } from 'dumi';

import { homepage, name } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig = {
  logo: 'https://avatars.githubusercontent.com/u/148947838',
  footerConfig: {
    resources: {
      title: 'Resources',
      items: [
        {
          description: 'CloudNative Components',
          openExternal: true,
          title: 'Yunti Charts',
          url: 'https://github.com/yuntijs/yunti-charts',
        },
        {
          description: 'Awesome lint configs',
          openExternal: true,
          title: 'Yunti Lint',
          url: 'https://github.com/yuntijs/yunti-lint',
        },
      ],
    },
    moreProducts: {
      title: 'More Products',
      items: [
        {
          description: 'Framework for k8s',
          openExternal: true,
          title: 'Kubebb',
          url: 'https://github.com/kubebb',
        },
        {
          description: 'One-stop LLMOps platform',
          openExternal: true,
          title: 'KubeAGI',
          url: 'https://github.com/kubeagi',
        },
      ],
    },
  },
  actions: [
    {
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/action-icon',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description: 'Yunti Charts is an open-source Charts component library for building web apps',
  footer: 'Made with ☁️ by YuntiJS',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOLI-Zns4Ccyx5',
    repo: 'yuntijs/yunti-charts',
    repoId: 'R_kgDOLI-Zng',
  },
  name: 'Charts',
  nav: [
    { link: '/components/line-chart', title: 'Components' },
    { link: '/changelog', title: 'Changelog' },
  ],
  socialLinks: {
    github: homepage,
  },
  title: 'Yunti Charts',
};

export default defineConfig({
  apiParser: {},
  base: isProduction ? '/yunti-charts/' : '/',
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://avatars.githubusercontent.com/u/148947838?s=64&v=4'],
  locales: [{ id: 'en-US', name: 'English' }],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  publicPath: '/yunti-charts/',
  outputPath: './dist/yunti-charts/',
  resolve: {
    entryFile: './src/index.ts',
  },
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Yunti Charts',
});
