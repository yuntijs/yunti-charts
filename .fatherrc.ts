import { defineConfig } from 'father';

export default defineConfig({
  esm: { output: 'es' },
  umd: {
    output: 'umd',
    name: 'YuntiCharts',
    entry: {
      'src/index': {
        name: 'YuntiCharts',
      },
    },
    sourcemap: true,
    externals: {
      'react': 'var window.React',
      'antd': 'var window.antd',
      'react-dom': 'var window.ReactDOM',
      'prop-types': 'var window.PropTypes',
      "@antv/g2": "var window.G2"
    },
  },
});
