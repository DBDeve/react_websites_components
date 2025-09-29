import React, {ReactNode,ReactElement} from 'react';
import styles from './Custom.module.css';
import {CSSLength, Margin, FontStyle, FontVariant, FontWeight, FontStretch, LineHeight, color,TextDecorationStyle,TextDecorationLine,TextDecorationThickness,Padding} from '../types'


type CustomHeading = {
    type:'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
    margin?:{width:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    font?:{style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string},
    color?: color
    children:ReactNode
}
export const CustomHeading:React.FC<CustomHeading> = ({type,margin,font,color,children}) => {
    
    let marginStyle;
    let fontStyle;
    let colorStyle;

    if (margin){
        if('width' in margin) {
            marginStyle = {'--heading-margin-top': margin.width,'--heading-margin-bottom': margin.width,'--heading-margin-right': margin.width,'--heading-margin-left': margin.width}
        } 
        else if('top' in margin || 'bottom' in margin || 'right' in margin || 'left' in margin) {
            marginStyle = {'--button-margin-top': margin.top,'--button-margin-bottom': margin.bottom,'--button-margin-right': margin.right,'--button-margin-left': margin.left}
        }
    }

    if(font){
        fontStyle = {'--heading-font-style': font.style, '--heading-font-variant':font.variant, '--heading-font-weight':font.weight, '--heading-font-stretch':font.stretch, '--heading-font-size':font.size, '--heading-line-height':font.height, '--heading-font-family':font.family}
    }

    colorStyle = {'--heading-color':color}

    const headerStyle = {
        ...marginStyle,
        ...fontStyle,
        ...colorStyle
    } as React.CSSProperties;

    return React.createElement(type, { style:headerStyle , className: styles.customHeading },children);
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

    let fontStyle;
    let anchorStyle;
    let anchorHoverStyle;

    if (font){
        fontStyle = {'--font-style-paragraph':font?.style,'--font-variant-paragraph':font?.variant,'--font-weight-paragraph':font?.weight,'--font-stretch-paragraph':font?.stretch,'--font-size-paragraph':font?.size,'--line-height-paragraph':font?.height,'--font-family-paragraph':font?.family} as React.CSSProperties;
    }

    if (anchor){
        anchorStyle = {'--anchor-color':anchor.color, '--anchor-text-decoration-line':anchor.textDecoration?.line, '--anchor-text-decoration-style':anchor.textDecoration?.style,'--anchor-text-decoration-color':anchor.textDecoration?.color,'--anchor-text-decoration-thickness':anchor.textDecoration?.thickness}
    }

    if (anchorHover){
        anchorHoverStyle = {'--anchor-hover-color':anchorHover.color, '--anchor-hover-text-decoration-line':anchorHover.textDecoration?.line,'--anchor-hover-text-decoration-style':anchorHover.textDecoration?.style,'--anchor-hover-text-decoration-color':anchorHover.textDecoration?.color,'--anchor-hover-text-decoration-thickness':anchorHover.textDecoration?.thickness}
    }

    const AnchorStyle = {
        ...anchorStyle,
        ...anchorHoverStyle
    } as React.CSSProperties;

    const styledChildren = React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === 'a') {
            return React.cloneElement(child as ReactElement<any>, {
                style:AnchorStyle, className: `${styles.anchor} ` 
            });
        }
        return child;
    });

    return <p style={fontStyle} className={styles.customParagraph}> {styledChildren} </p>;
}



type CustomBottom={
    padding?:{width?:Padding, color?:string} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding, color?:string},
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
            paddingStyle = {'--button-padding-top': padding.width,'--button-padding-bottom': padding.width,'--button-padding-right': padding.width,'--button-padding-left': padding.width}
        } 
        else if ('top' in padding || 'bottom' in padding || 'right' in padding || 'left' in padding) {
            paddingStyle = {'--button-padding-top': padding.top,'--button-padding-bottom': padding.bottom,'--button-padding-right': padding.right,'--button-padding-left': padding.left}
        }
    }

    if(border){
        borderStyle = {'--button-border-width': border.width, '--button-border-type': border.type, '--button-border-color': border.color, '--button-border-radius': border.radius}
    }

    if(margin){
        if('width' in margin) {
            marginStyle = {'--button-margin-top': margin.width,'--button-margin-bottom': margin.width,'--button-margin-right': margin.width,'--button-margin-left': margin.width}
        } 
        else if('top' in margin || 'bottom' in margin || 'right' in margin || 'left' in margin) {
            marginStyle = {'--button-margin-top': margin.top,'--button-margin-bottom': margin.bottom,'--button-margin-right': margin.right,'--button-margin-left': margin.left}
        }
    }

    if(fontText){
        fontTextStyle = {'--button-font-text-style': fontText.style, '--button-font-text-variant':fontText.variant, '--button-font-text-weight':fontText.weight, '--button-font-text-stretch':fontText.stretch, '--button-font-text-size':fontText.size, '--button-font-text-height':fontText.height, '--button-font-text-family':fontText.family, '--button-font-text-color': fontText.color}
    }


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

