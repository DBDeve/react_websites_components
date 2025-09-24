// scaricare (npm install type-fest)

import {IntRange} from 'type-fest'


export type RGBvalue = IntRange<0, 256>

export type percentaceValue = IntRange<0, 101>

type DecimalUnion = 
0 | 0.01 | 0.02 | 0.03 | 0.04 | 0.05 | 0.06 | 0.07 | 0.08 | 0.09 | 0.1
  | 0.10 | 0.11 | 0.12 | 0.13 | 0.14 | 0.15 | 0.16 | 0.17 | 0.18 | 0.19 | 0.2
  | 0.20 | 0.21 | 0.22 | 0.23 | 0.24 | 0.25 | 0.26 | 0.27 | 0.28 | 0.29 | 0.3
  | 0.30 | 0.31 | 0.32 | 0.33 | 0.34 | 0.35 | 0.36 | 0.37 | 0.38 | 0.39 | 0.4
  | 0.40 | 0.41 | 0.42 | 0.43 | 0.44 | 0.45 | 0.46 | 0.47 | 0.48 | 0.49 | 0.5
  | 0.50 | 0.51 | 0.52 | 0.53 | 0.54 | 0.55 | 0.56 | 0.57 | 0.58 | 0.59 | 0.6
  | 0.60 | 0.61 | 0.62 | 0.63 | 0.64 | 0.65 | 0.66 | 0.67 | 0.68 | 0.69 | 0.7
  | 0.70 | 0.71 | 0.72 | 0.73 | 0.74 | 0.75 | 0.76 | 0.77 | 0.78 | 0.79 | 0.8
  | 0.80 | 0.81 | 0.82 | 0.83 | 0.84 | 0.85 | 0.86 | 0.87 | 0.88 | 0.89 | 0.9
  | 0.90 | 0.91 | 0.92 | 0.93 | 0.94 | 0.95 | 0.96 | 0.97 | 0.98 | 0.99 | 1
;

type LowercaseLetter =
  | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j'
  | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't'
  | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0'
;

//////////////COLOR///////////////

export type CSShex = string & { __brand: 'CSShex' };

// 3) overload per catturare i parametri fuori range
export function hex(
  h: LowercaseLetter ,
  i: LowercaseLetter ,
  e: LowercaseLetter ,
  f: LowercaseLetter ,
  x: LowercaseLetter ,
  z: LowercaseLetter ,
  a: LowercaseLetter ,
  b: LowercaseLetter 
): CSShex;

// 4) implementazione che restituisce il branded type
export function hex(h:string, i:string, e:string, f:string, x:string, z:string, a:string, b:string,): CSShex {
  return `#${h}${i}${e}${f}${x}${z}${a}${b}` as CSShex;
}


export type CSShwb = string & { __brand: 'CSShwb' };

// 3) overload per catturare i parametri fuori range
export function hwb(
  h: CSSangle,
  w: CSSpercentage,
  b: CSSpercentage,
): CSShwb;

// 4) implementazione che restituisce il branded type
export function hwb(h: string, w: string, b: string): CSShwb {
  return `hwb(${h},${w},${b})` as CSShwb;
}


export type CSShsla = string & { __brand: 'CSShsla' };

// 3) overload per catturare i parametri fuori range
export function hsla(
  h: CSSangle,
  s: CSSpercentage,
  l: CSSpercentage,
  a: DecimalUnion
): CSShsla;

// 4) implementazione che restituisce il branded type
export function hsla(h: string, s: string, l: string, a:number): CSShsla {
  return `hsla(${h},${s},${l},${a})` as CSShsla;
}


export type CSShsl = string & { __brand: 'CSShsl' };

// 3) overload per catturare i parametri fuori range
export function hsl(
  h: CSSangle,
  s: CSSpercentage,
  l: CSSpercentage,
): CSShsl;

// 4) implementazione che restituisce il branded type
export function hsl(h: string, s: string, l: string, ): CSShsl {
  return `hsl(${h},${s},${l})` as CSShsl;
}


export type CSSrgb = string & { __brand: 'CSSrgb' };

// 3) overload per catturare i parametri fuori range
export function rgb(
  r: RGBvalue,
  g: RGBvalue,
  b: RGBvalue,
): CSSrgb;

// 4) implementazione che restituisce il branded type
export function rgb(r: number, g: number, b: number, ): CSSrgb {
  return `rgb(${r},${g},${b})` as CSSrgb;
}


export type CSSrgba = string & { __brand: 'CSSrgba' };

// 3) overload per catturare i parametri fuori range
export function rgba(
  r: RGBvalue,
  g: RGBvalue,
  b: RGBvalue,
  a: DecimalUnion
): CSSrgba;

// 4) implementazione che restituisce il branded type
export function rgba(r: number, g: number, b: number, a:number): CSSrgba {
  return `rgba(${r},${g},${b},${a})` as CSSrgba;
}


/*lenght type*/  
export type CSSLength = 
  `${number}px` | `${number}em` | `${number}rem` |
  `${number}vw` | `${number}vh` | `${number}vmin` | `${number}vmax` |
  `${number}ch` | `${number}ex` | `${number}ic` |
  `${number}lh` | `${number}rlh` |
  `${number}vi` | `${number}vb` |
  `${number}svw` | `${number}svh` | `${number}lvw` | `${number}lvh` | `${number}dvw` | `${number}dvh` |
  `${number}cqw` | `${number}cqh` | `${number}cqi` | `${number}cqb` | `${number}cqmin` | `${number}cqmax` |
  `${number}cm` | `${number}mm` | `${number}Q` | `${number}in` | `${number}pt` | `${number}pc`
;

export type CSSpercentage = `${percentaceValue}%`;

export type CSSangle = `${number}deg`|`${number}rad`|`${number}grad`|`${number}turn`;

export type CSStime = `${number}s` | `${number}ms`;

export type CSSFrequency = `${number}Hz` | `${number}kHz`;

export type CSSResolution = `${number}dpi` | `${number}dpcm` | `${number}dppx`;

export type CSSGlobalValue = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer';

export type CSSkeyworld = 'none' | 'auto';

export type CSSFlex =
  | `${number}`                               // grow
  | `${number} ${number}`                     // grow shrink
  | CSSLength
  | CSSpercentage                             // basis
  | `${number} ${number} ${CSSLength | CSSpercentage}`        // grow shrink basis
  | CSSkeyworld
  | CSSGlobalValue;

export type CSSRatio =
  | `${number}/${number}`
  | CSSGlobalValue;

export type GenericFamily = 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong';

export type FamilyName = ''; //finire

export type lineStyle = 'solid'|'double'|'dotted'|'dashed'



/////////////////

export type Margin = CSSLength | CSSGlobalValue | 'auto';

export type Border = CSSLength | CSSGlobalValue | 'auto';

export type Padding = CSSLength | CSSGlobalValue | 'auto';



export type FontStyle = 'normal' | 'italic' | 'oblique' | `oblique ${CSSangle}`;

export type FontVariant = 'normal' | 'small-caps' | CSSGlobalValue | 'revert-layer';

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'lighter' | 'bolder' | 'normal' | 'bold' | CSSGlobalValue;

export type FontStretch = 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'normal' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded' | CSSpercentage | CSSGlobalValue;

export type LineHeight = number | CSSLength | CSSpercentage | CSSGlobalValue;

export type color = CSSGlobalValue | CSSrgb | CSSrgba | CSShsl | CSShsla | CSShwb | CSShex

export type TextDecorationLine = 'none'|'underline'|'overline'|'line-through'

export type TextDecorationStyle = lineStyle | 'wavy';

export type TextDecorationThickness = 'auto'|'from-font'| CSSpercentage


/* FLEX TYPES */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | CSSGlobalValue;

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | CSSGlobalValue;

export type AlignContent = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | CSSGlobalValue;

export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | CSSGlobalValue;

export type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | CSSGlobalValue;


