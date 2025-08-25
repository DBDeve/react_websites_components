import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    banner: `import './styles.css';`
  },
  plugins: [
    typescript(),
    postcss({
      modules: true,
      extract: 'styles.css', // genera dist/styles.css
    }),
  ],
  external: ['react', 'react-dom','@fortawesome/fontawesome-free/css/all.min.css'], // evita di includere React nel bundle
};
