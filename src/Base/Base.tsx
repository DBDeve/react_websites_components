import React, {ReactNode,ReactElement,useState} from 'react';
import styles from './Base.module.css';
import {CSSLength, Margin, FontStyle, FontVariant, FontWeight, FontStretch, LineHeight, Color,TextDecorationStyle,TextDecorationLine,TextDecorationThickness,Padding,BackgroundBlendMode} from '../types';
import {FlexDirection, FlexWrap, AlignContent, JustifyContent, AlignItems} from '../types';
import {defaultImg} from './index';


type Heading = {
    type:'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
    margin?:{width:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    font?:{style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string},
    color?: Color
    children:ReactNode
}
export const Heading:React.FC<Heading> = ({type,margin,font,color,children}) => {
    
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



type Paragraph={
    font?: {style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string},
    anchor?:{
        color?:string,
        textDecoration?:{
            line:TextDecorationLine,
            color:Color,
            style:TextDecorationStyle,
            thickness:TextDecorationThickness
        }
    },
    anchorHover?:{
        color?:string, 
        textDecoration?:{
            line:TextDecorationLine,
            color:Color,
            style:TextDecorationStyle,
            thickness:TextDecorationThickness
        }
    }, 
    children:ReactNode
}
export const Paragraph:React.FC<Paragraph> = ({font,anchor,anchorHover,children}) => {

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



type Button={
    href?:string;
    padding?:{width?:Padding, color?:string} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding, color?:string},
    border?:{width?:string, type?:'solid', color?:string, radius?:string},
    margin?:{width?:Margin} | {top?:string, bottom?:string, right?:string, left?:string},
    fontText?:{style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string, color?:string},
    boxShadow?:{offset:string,radius:string,color:string},
    children:ReactNode
}
export const Button:React.FC<Button> = ({href,padding,border,margin,fontText,children}) => {

    let paddingStyle;
    let marginStyle;
    let borderStyle;
    let fontTextStyle;
    let hrefValue;

    if(href){
        hrefValue=href;
    } else {
        hrefValue='#';
    }

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
        <a
            href={hrefValue}
            style={buttonStyle}
            className={styles.button}
        >
            {children}
        </a>
    )
}

type flex = {type:'flex', direction?: FlexDirection, wrap?: FlexWrap, alignContent?: AlignContent, justifyContent?: JustifyContent,alignItems?: AlignItems}
type grid = {type:'grid', columns?:string, rows?:string, gap?:string, justifyItems?:string, alignItems?:string}
type display = flex | grid
type Container = {
    type: 'main' | 'section' | 'body' | 'div',
    margin?:{width?:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    border?:{width?:string, type?:'solid', color?:string, radius?:string},
    padding?:{width?:Padding} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding},
    backGround?:{color?:Color, image?:string, position?:string, size?:string, mode?:BackgroundBlendMode},
    display?:display,
    children:ReactNode
}
export const Container:React.FC<Container> = ({type,padding,border,margin,backGround,display,children}) => {

    let paddingStyle;
    let borderStyle;
    let marginStyle;
    let backgroundStyle;
    let displayStyle;
    let displayProps
    

    if (padding){
        if('width' in padding) {
            paddingStyle = {'--container-padding-top': padding.width,'--container-padding-bottom': padding.width,'--container-padding-right': padding.width,'--container-padding-left': padding.width}
        } 
        else if ('top' in padding || 'bottom' in padding || 'right' in padding || 'left' in padding) {
            paddingStyle = {'--container-padding-top': padding.top,'--container-padding-bottom': padding.bottom,'--container-padding-right': padding.right,'--container-padding-left': padding.left}
        }
    }

    if(border){
        borderStyle = {'--container-border-width': border.width, '--container-border-type': border.type, '--container-border-color': border.color, '--container-border-radius': border.radius}
    }

    if(margin){
        if('width' in margin) {
            marginStyle = {'--container-margin-top': margin.width,'--container-margin-bottom': margin.width,'--container-margin-right': margin.width,'--container-margin-left': margin.width}
        } 
        else if('top' in margin || 'bottom' in margin || 'right' in margin || 'left' in margin) {
            marginStyle = {'--container-margin-top': margin.top,'--container-margin-bottom': margin.bottom,'--container-margin-right': margin.right,'--container-margin-left': margin.left}
        }
    }

    if(backGround){
        backgroundStyle = {'--container-background-color':backGround.color, '--container-background-image':backGround.image, '--container-background-position':backGround.position, '--container-background-size':backGround.size,'--container-background-mode':backGround.mode}
    }

    if(display){
        if(display.type === 'flex'){
            displayStyle={'--container-display':'flex', '--container-flex-direction':display.direction, '--container-flex-wrap':display.wrap, '--container-align-content':display.alignContent, '--container-justify-content':display.justifyContent, '--container-align-items':display.alignItems};
            displayProps=styles.flex;
        }

        if(display.type === 'grid'){
            displayStyle={'--container-display':'grid', '--container-grid-template-columns':display.columns, '--container-grid-template-rows':display.rows, '--container-gap':display.gap, '--container-justify-items':display.justifyItems, '--container-align-items':display.alignItems};
            displayProps=styles.grid;
        }
    }
    

    const containerStyle = {
        ...paddingStyle,
        ...borderStyle,
        ...marginStyle,
        ...backgroundStyle,
        ...displayStyle
    } as React.CSSProperties;

    return  React.createElement(type, { style:containerStyle , className: `${styles.customContainer} ${displayProps}` },children);

}

//aggiungere tag immagine
type image = {
    attr?:{src?:string, description?:string, title?:string, height?:number, width?:number},
    margin?:{width?:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
}
export const Image:React.FC<image>=({attr,margin})=>{

    let srcAttr;
    let descriptionAttr;
    let titleAttr;
    let heightAttr;
    let widthAttr;

    if(attr){

        if(attr.src){
            srcAttr=attr.src;
        } else {
            srcAttr=defaultImg;
        }

        if(attr.description){
            descriptionAttr=attr.description;
        } else {
            descriptionAttr='default image';
        }

        if(attr.title){
            titleAttr=attr.title;
        } else {
            titleAttr='default image';
        }

        if(attr.height){
            heightAttr=attr.height
        } else {
            heightAttr=300
        }

        if(attr.width){
            widthAttr=attr.width
        } else {
            widthAttr=300
        }

    } else {
        srcAttr=defaultImg;
        descriptionAttr='default image';
        titleAttr='default image';
        heightAttr=200;
        widthAttr=200;
    }

    let marginStyle;

    if(margin){
        if('width' in margin) {
            marginStyle = {'--image-margin-top': margin.width,'--image-margin-bottom': margin.width,'--image-margin-right': margin.width,'--image-margin-left': margin.width}
        } 
        else if('top' in margin || 'bottom' in margin || 'right' in margin || 'left' in margin) {
            marginStyle = {'--image-margin-top': margin.top,'--image-margin-bottom': margin.bottom,'--image-margin-right': margin.right,'--image-margin-left': margin.left}
        }
    }

    const containerStyle = {
        ...marginStyle
    } as React.CSSProperties;

    return (
        <img src={srcAttr} alt={descriptionAttr} title={titleAttr} loading="lazy" width={widthAttr} height={heightAttr} style={containerStyle} className={styles.image}></img>
    )

}


/*type Video = {
    src:string, controls?:boolean, autoPlay?:boolean, loop?:boolean, muted?:boolean, poster?:string, width?:string, height?:string, playsinline?:boolean, preload?:'auto' | 'metadata' | 'none', crossOrigin?:'anonymous' | 'use-credentials';
}
export const Video:React.FC<Video>=({src, controls, autoPlay, loop, muted, poster, width, height, playsinline, preload, crossOrigin})=>{
    return (
        <video src={`${src}`} controls={controls ? true : false} autoPlay={autoPlay ? true : false} muted={muted ? true : false} loop={loop ? true : undefined} poster={poster || undefined} preload={preload || 'metadata'}>
        </video>
    )
}*/

//aggiungere tag separatore
type separator = {
    color?:Color, margin?:Margin, height?:string
}
export const Separator:React.FC<separator>=({color,margin,height})=>{

    let colorStyle;
    let marginStyle;
    let heightStyle;

    if(color){
        colorStyle = {'--separator-color':color}
    }

    if(margin){
        marginStyle = {'--separator-margin':margin}
    }

    if(height){
        heightStyle = {'--separator-height':height}
    }

    const headerStyle = {
        ...colorStyle,
        ...marginStyle,
        ...heightStyle
    } as React.CSSProperties;

    return(
        <hr style={headerStyle} className={styles.separator}></hr>
    )
}

//aggiungere tag spaziatura
type Spacing = {
    height:string
}
export const Spacing:React.FC<Spacing>=({height})=>{
    
    let heightStyle;

    if(height){
        heightStyle = {'--spacing-height':height}
    }

    const spacingStyle ={
        ...heightStyle
    } as React.CSSProperties;

    return(
        <div style={spacingStyle} className={styles.spacing}></div>
    )
}