<a name="readme-top"></a>

<div align="center">

<h1>Yunti Charts</h1>

☁️ Yunti Charts is an open-source Charts component library for building web apps

English ・ [简体中文](./README.zh-CN.md) ・ [Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

<!-- SHIELD GROUP -->

[![][npm-release-shield]][npm-release-link]

<!-- [![][vercel-shield]][vercel-link] -->

[![][npm-downloads-shield]][npm-downloads-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

<!-- [![][banner]][vercel-link] -->

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [📦 Installation](#-installation)
  - [Compile with NextJS](#compile-with-nextjs)
- [☁️ Usage](#️-usage)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)

####

</details>

## 📦 Installation

> \[!IMPORTANT]\
> This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

To install Yunti Charts, run the following command:

```bash
pnpm add @yuntijs/charts
```

### Compile with NextJS

> \[!NOTE]\
> By work correct with nextjs ssr, add `transpilePackages: ['@yuntijs/charts']` to `next.config.js`. For example:

```js
// next.config.js
const nextConfig = {
  // ...other config

  transpilePackages: ['@yuntijs/charts'],
};
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ☁️ Usage

> \[!NOTE]\
> The YuntiCharts components are inspired by [AntV G2](https://g2.antv.antgroup.com/) and developed based on [Antd](https://ant.design/components/overview/), fully compatible with Antd components,
> and it is recommended to use [antd-style](https://ant-design.github.io/antd-style/) as the default css-in-js styling solution.

```tsx
import { LineChart } from '@yuntijs/charts';

export default () => (
  <LineChart/>
);
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][codespaces-shield]][codespaces-link]

Or clone it for local development:

```bash
git clone https://github.com/yuntijs/yunti-charts.git
cd yunti-charts
pnpm install
pnpm dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][contributors-contrib]][contributors-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

<details><summary><h4>📝 License</h4></summary>

[![][fossa-license-shield]][fossa-license-link]

</details>

Copyright © 2024 [YuntiJS][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

<!-- [vercel-link]: https://ui.yuntijs.com -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[codespaces-link]: https://codespaces.new/yuntijs/yunti-charts
[codespaces-shield]: https://github.com/codespaces/badge.svg
[contributors-contrib]: https://contrib.rocks/image?repo=yuntijs/yunti-charts
[contributors-link]: https://github.com/yuntijs/yunti-charts/graphs/contributors
[fossa-license-link]: https://app.fossa.com/projects/git%2Bgithub.com%2Fyuntijs%2Fyunti-charts
[fossa-license-shield]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fyuntijs%2Fyunti-charts.svg?type=large
[github-action-release-link]: https://github.com/actions/workflows/yuntijs/yunti-charts/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/yuntijs/yunti-charts/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/actions/workflows/yuntijs/yunti-charts/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/yuntijs/yunti-charts/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-contributors-link]: https://github.com/yuntijs/yunti-charts/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/yuntijs/yunti-charts?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/yuntijs/yunti-charts/network/members
[github-forks-shield]: https://img.shields.io/github/forks/yuntijs/yunti-charts?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/yuntijs/yunti-charts/issues
[github-issues-shield]: https://img.shields.io/github/issues/yuntijs/yunti-charts?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/yuntijs/yunti-charts/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/yuntijs/yunti-charts?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/yuntijs/yunti-charts/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/yuntijs/yunti-charts?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/yuntijs/yunti-charts/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/yuntijs/yunti-charts?color=ffcb47&labelColor=black&style=flat-square
[npm-downloads-link]: https://www.npmjs.com/package/@yuntijs/charts
[npm-downloads-shield]: https://img.shields.io/npm/dt/@yuntijs/charts?labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@yuntijs/charts
[npm-release-shield]: https://img.shields.io/npm/v/@yuntijs/charts?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/yuntijs/yunti-charts/pulls
[pr-welcome-shield]: https://img.shields.io/badge/☁️_pr_welcome-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/yuntijs
