import typescript from '@rollup/plugin-typescript';
import postcss    from 'rollup-plugin-postcss';
import dts        from 'rollup-plugin-dts';

const components = ['Footer', 'Header','HeroSection','Custom','PageContent','PageSection'];

const componentConfig = components.flatMap(name => {
  
  const input = `src/${name}/index.ts`;

  // 1) JS + CSS
  const jsConfig = {
    input,
    external: [
      'react',                                
      'react-dom', 
      '@fortawesome/fontawesome-free/css/all.min.css',
    ],
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
        extract: true,  
        minimize: true
      })
    ]
  };

  // 2) Dichiarazioni .d.ts
  const dtsConfig = {
    input,
    external: [
      'react',                               
      'react-dom',                            
      '@fortawesome/fontawesome-free/css/all.min.css',    
    ],
    output: {
      dir: `dist/${name}`,
      format: 'es',
      entryFileNames: `${name}.d.ts`
    },
    plugins: [ dts() ]
  };

  return [ jsConfig, dtsConfig ];
});

const functionConfig = () => {

  const functionConfigjs = {
    input: 'src/Function/index.ts',
    output: {
      file: 'dist/Function/function.js',
      format: 'esm'
    },
    plugins: [typescript()]
  }

  const functionConfigdts = {
    input: 'src/Function/index.ts',
    output: {
      file: 'dist/Function/function.d.ts',
      format: 'es',
    },
    plugins: [dts()]
  }

  return [ functionConfigjs, functionConfigdts];
  
};

export default [...componentConfig, ...functionConfig()];