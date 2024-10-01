import typescript from '@rollup/plugin-typescript';

export default {
  input: 'js/index.ts',
  output: {
    dir: 'js',
    format: 'cjs'
  },
  plugins: [typescript()]
};
