import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.tsx', // o index.ts se non usi JSX
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs', // CommonJS
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm' // ES Module
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json',useTsconfigDeclarationDir: true })
  ],
  external: ['react', 'react-dom'] // evita di includere React nel bundle
};
