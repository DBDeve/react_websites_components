import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    postcss({
      modules: true,
      extract: true, // genera dist/styles.css
    }),
  ],
  external: ['react', 'react-dom'], // evita di includere React nel bundle
};
