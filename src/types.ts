// fammi una lista delle famiglie di valori per css (chiedere questo a copilot)

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

export type CSSpercentage = `${number}%`;

export type CSSangle = `${number}deg`|`${number}rad`|`${number}grad`|`${number}turn`;

export type CSStime = `${number}s` | `${number}ms`;

export type CSSFrequency = `${number}Hz` | `${number}kHz`;

export type CSSResolution = `${number}dpi` | `${number}dpcm` | `${number}dppx`;

export type cssGlobalValue = 'inherit' | 'initial' | 'unset' | 'revert';

export type CSSkeyworld = 'none' | 'auto';

export type CSSFlex =
  | `${number}`                               // grow
  | `${number} ${number}`                     // grow shrink
  | CSSLength
  | CSSpercentage                             // basis
  | `${number} ${number} ${CSSLength | CSSpercentage}`        // grow shrink basis
  | 'auto'
  | 'none'
  | cssGlobalValue;

export type CSSRatio =
  | `${number}/${number}`
  | cssGlobalValue;






