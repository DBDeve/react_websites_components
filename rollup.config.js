import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true,       // genera un file CSS separato
      minimize: true,      // minifica il CSS
      modules: true       // metti true se usi CSS Modules
    }),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true
    })
  ],
  external: ['react', 'react-dom']
};
