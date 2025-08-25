import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      modules: true,
      minimize: true,
      sourceMap: true,
      extract: false, // ⛔ niente file CSS globali
      inject: false,
    })
  ],
  external: ['react', 'react-dom']
};
