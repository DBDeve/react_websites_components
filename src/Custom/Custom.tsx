import React, {ReactNode,ReactElement} from 'react';
import styles from './Custom.module.css';


type CustomHeading = {
    type:'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
    margin?:string | {top?:string, bottom?:string, right?:string, left?:string},
    font?:{style?:string, variant?:string, weight?:string,stretch?:string, size?:string, height?:string, family?:string},
    color?:string
    children:ReactNode
}
export const CustomHeading:React.FC<CustomHeading> = ({type,margin,font,color,children}) => {
    
    let style = typeof margin === 'string'? {
        '--heading-marginTop': margin,'--heading-marginRight': margin,'--heading-marginBottom': margin,'--heading-marginLeft': margin,
        '--heading-fontStyle': font?.style, '--heading-fontVariant':font?.variant, '--heading-fontWeight':font?.weight, '--heading-fontStretch':font?.stretch, '--heading-fontSize':font?.size, '--heading-lineHeight':font?.height, '--heading-fontFamily':font?.family,
        '--heading-color':color
    }:{
        '--heading-marginTop': margin?.top,'--heading-marginRight': margin?.right,'--heading-marginBottom': margin?.bottom,'--heading-marginLeft': margin?.left,
        '--heading-fontStyle': font?.style, '--heading-fontVariant':font?.variant, '--heading-fontWeight':font?.weight, '--heading-fontStretch':font?.stretch, '--heading-fontSize':font?.size, '--heading-lineHeight':font?.height, '--heading-fontFamily':font?.family,
        '--heading-color':color
    } as React.CSSProperties; 
    return React.createElement(type, { style, className: styles.customHeading },children);
}


type CustomParagraph={
    children:ReactNode
}
export const CustomParagraph:React.FC<CustomParagraph> = ({children}) => {
    const styledChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === 'a') {
      return React.cloneElement(child as ReactElement<any>, {
        className: `${styles.anchor} ` 
      });
    }
    return child;
  });
  return <p className={styles.customParagraph}> {styledChildren} </p>;
}


type CustomBottom={
    padding?:{top?:string, bottom?:string, right?:string, left?:string, color?:string},
    border?:{width?:string, type?:'solid', color?:string},
    margin?:{top?:string, bottom?:string, right?:string, left?:string},
    text?:{size?:string, weight?:string, color?:string, family?:string},
    boxShadow?:{offset:string,radius:string,color:string},
    children:ReactNode
}
export const CustomButton:React.FC<CustomBottom> = ({padding,border,margin,children}) => {
    return(
        <button
            style={{
            '--button-paddingTop': padding?.top, '--button-paddingRight':padding?.right,'--button-paddingBottom':padding?.bottom, '--button-paddingLeft':padding?.left,
            '--button-borderWidth':border?.width, '--button-borderType': border?.type, '--button-borderColor':border?.color,
            '--button-marginTop': margin?.top, '--button-marginRight': margin?.right, '--button-marginBottom': margin?.bottom, '--button-marginLeft': margin?.left,
            } as React.CSSProperties}
            className={styles.button}
        >
            {children}
        </button>
    )
}

