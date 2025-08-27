import typescript from '@rollup/plugin-typescript';
import postcss    from 'rollup-plugin-postcss';
import dts        from 'rollup-plugin-dts';

const components = ['Footer', 'Header'];

export default components.flatMap(name => {
  const input = `src/${name}/index.ts`;

  // 1) JS + CSS
  const jsConfig = {
    input,
    output: {
      dir: `dist/${name}`,
      format: 'esm',
      banner: `"use client"; 
import './${name}.css';`,
      entryFileNames: `${name}.js`,
      assetFileNames: `styles.css`
    },
    plugins: [
      typescript({ declaration: false }),
      postcss({
        extract: true,  // estrae solo per questo componente
        minimize: true
      })
    ]
  };

  // 2) Dichiarazioni .d.ts
  const dtsConfig = {
    input,
    output: {
      dir: `dist/${name}`,
      format: 'es',
      entryFileNames: `${name}.d.ts`
    },
    plugins: [ dts() ]
  };

  return [ jsConfig, dtsConfig ];
});
