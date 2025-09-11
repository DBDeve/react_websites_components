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


/////////////////

export type Margin = CSSLength | CSSGlobalValue | 'auto';

export type Border = CSSLength | CSSGlobalValue | 'auto';

export type Padding = CSSLength | CSSGlobalValue | 'auto';



export type FontStyle = 'normal' | 'italic' | 'oblique' | `oblique ${CSSangle}`;

export type FontVariant = 'normal' | 'small-caps' | CSSGlobalValue | 'revert-layer';

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'lighter' | 'bolder' | 'normal' | 'bold' | CSSGlobalValue;

export type FontStretch = 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'normal' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded' | CSSpercentage | CSSGlobalValue;

export type LineHeight = number | CSSLength | CSSpercentage | CSSGlobalValue;






