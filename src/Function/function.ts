import { LowercaseLetter,DecimalUnion,CSSangle,CSSpercentage,RGBvalue} from "../types";
import { CSShwb,CSShsla,CSShex,CSSrgb,CSSrgba } from "../types";



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