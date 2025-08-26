import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts'

const entries = {
  Footer: 'src/Footer/index.ts',
  Header: 'src/Header/index.ts'
}

/** 
 * Config 1: JS + CSS 
 */
const bundleConfig = {
  input:  entries,
  output: {
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name]/[name].js',
    assetFileNames: '[name]/[name].css'    // CSS estratto
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      // Lascia che TypeScript compili solo TS→JS, senza scrivere .d.ts
      declaration: false
    }),
    postcss( {
      extract: true,       // <-- estrai tutto in un .css
      minimize: true
    })
  ]
}

/** 
 * Config 2: Dichiarazioni .d.ts 
 */
const typesConfig = {
  input:  entries,
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: '[name]/[name].d.ts'
  },
  plugins: [
    dts()
  ]
}

export default [ bundleConfig, typesConfig ]