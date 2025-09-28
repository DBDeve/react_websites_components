import React, {ReactNode,ReactElement} from 'react';
import styles from './Custom.module.css';
import {CSSLength, Margin, FontStyle, FontVariant, FontWeight, FontStretch, LineHeight, color,TextDecorationStyle,TextDecorationLine,TextDecorationThickness,Padding} from '../types'


type CustomHeading = {
    type:'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
    margin?:Margin | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    font?:{style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string},
    color?: color
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
    font?: {style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string},
    anchor?:{
        color?:string, 
        textDecoration?:{
            line:TextDecorationLine, 
            color:color, 
            style:TextDecorationStyle,
            thickness:TextDecorationThickness
        }
    },
    anchorHover?:{
        color?:string, 
        textDecoration?:{
            line:TextDecorationLine, 
            color:color, 
            style:TextDecorationStyle,
            thickness:TextDecorationThickness
        }
    }, 
    children:ReactNode
}
export const CustomParagraph:React.FC<CustomParagraph> = ({font,anchor,anchorHover,children}) => {
    let style = {
        '--anchor-color':anchor?.color,
        '--anchor-text-decoration-line':anchor?.textDecoration?.line, '--anchor-text-decoration-style':anchor?.textDecoration?.style,'--anchor-text-decoration-color':anchor?.textDecoration?.color,'--anchor-text-decoration-thickness':anchor?.textDecoration?.color,
        '--anchor-hover-color':anchorHover?.color,
        '--anchor-hover-text-decoration-line':anchorHover?.textDecoration?.line,'--anchor-hover-text-decoration-style':anchorHover?.textDecoration?.style,'--anchor-hover-text-decoration-color':anchorHover?.textDecoration?.color,'--anchor-hover-text-decoration-thickness':anchorHover?.textDecoration?.thickness
    } as React.CSSProperties; // anchor e anchor hover var()
    const styledChildren = React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === 'a') {
            return React.cloneElement(child as ReactElement<any>, {
                style, className: `${styles.anchor} ` 
            });
        }
        return child;
    });
  return <p style={{ '--font-style-paragraph':font?.style,'--font-variant-paragraph':font?.variant,'--font-weight-paragraph':font?.weight,'--font-stretch-paragraph':font?.stretch,'--font-size-paragraph':font?.size,'--line-height-paragraph':font?.height,'--font-family-paragraph':font?.family} as React.CSSProperties} className={styles.customParagraph}> {styledChildren} </p>;
}



type CustomBottom={
    padding?:{width?:Padding, color?:string} | {top?:string, bottom?:string, right?:string, left?:string, color?:string},
    border?:{width?:string, type?:'solid', color?:string, radius?:string},
    margin?:{width?:Margin} | {top?:string, bottom?:string, right?:string, left?:string},
    fontText?:{style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string, color?:string},
    boxShadow?:{offset:string,radius:string,color:string},
    children:ReactNode
}
export const CustomButton:React.FC<CustomBottom> = ({padding,border,margin,fontText,children}) => {

    let paddingStyle;
    let marginStyle;
    let borderStyle;
    let fontTextStyle;

    if (padding){
        if('width' in padding) {
            paddingStyle = {'--button-padding-top': padding,'--button-padding-bottom': padding,'--button-padding-right': padding,'--button-padding-left': padding}
        } 
        else if ('top' in padding || 'bottom' in padding || 'right' in padding || 'left' in padding) {
            paddingStyle = {'--button-padding-top': padding?.top,'--button-padding-bottom': padding?.bottom,'--button-padding-right': padding?.right,'--button-padding-left': padding?.left}
        }
    }

    borderStyle = {'--button-border-width': border?.width, '--button-border-type': border?.type, '--button-border-color': border?.color, '--button-border-radius': border?.radius}

    if(margin){
        if('width' in margin) {
            marginStyle = {'--button-margin-top': margin,'--button-margin-bottom': margin,'--button-margin-right': margin,'--button-margin-left': margin}
        } 
        else if('top' in margin || 'bottom' in margin || 'right' in margin || 'left' in margin) {
            marginStyle = {'--button-margin-top': margin?.top,'--button-margin-bottom': margin?.bottom,'--button-margin-right': margin?.right,'--button-margin-left': margin?.left}
        }
    }

    //finire di inserire tutte le variabili 
    fontTextStyle = {'--button-font-text-style': fontText?.style, '--button-font-text-variant':fontText?.variant, '--button-font-text-weight':fontText?.weight, '--button-font-text-stretch':fontText?.stretch, '--button-font-text-size':fontText?.size, '--button-font-text-height':fontText?.height, '--button-font-text-family':fontText?.family, '--button-font-text-color': fontText?.color}

    const buttonStyle = {
        ...paddingStyle,
        ...borderStyle,
        ...marginStyle,
        ...fontTextStyle
    } as React.CSSProperties;

    return(
        <button
            style={buttonStyle}
            className={styles.button}
        >
            {children}
        </button>
    )
}

