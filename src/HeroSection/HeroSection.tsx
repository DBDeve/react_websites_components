import React, {ReactNode,ReactElement,useState,useEffect} from 'react';
import {CSSLength, FontStyle, FontVariant, FontWeight, FontStretch, LineHeight, Color,TextDecorationStyle,TextDecorationLine,TextDecorationThickness,BackgroundBlendMode} from '../types';
import {FlexDirection, FlexWrap, AlignContent, JustifyContent, AlignItems} from '../types';
import styles from './HeroSection.module.css';
import {Padding,Margin} from '../types'
import {defaultImg} from './index';


// ADD THIS TO CUSTOM BUTTON
// button?:{color:string, text:{color:string, content:string}, padding:string, border:{borderColor:string, borderRadius:string, style:string}, margin:string}


type HeroSection={
    backGround?:{color?:Color, image?:string, position?:string, size?:string, mode?:BackgroundBlendMode},
    children: ReactNode
}
export const HeroSection:React.FC<HeroSection> = ({backGround,children}) => {

    let backgroundStyle;

    if(backGround){
        backgroundStyle = {'--hero-container-background-color':backGround.color, '--hero-container-background-image':backGround.image, '--hero-container-background-position':backGround.position, '--hero-container-background-size':backGround.size,'--hero-container-background-mode':backGround.mode}
    }

    const containerStyle = {
        ...backgroundStyle,
    } as React.CSSProperties;

    return(
        <div id='hero_section' className={styles.HeroSection} style={containerStyle}>
            {children}
        </div>
    )
}


type HeroContainer = {
    flexSetting?:{direction?: FlexDirection, wrap?: FlexWrap, alignContent?:AlignContent, justifyContent?:JustifyContent, alignItems?:AlignItems}
    children: ReactNode
}
export const HeroContainer:React.FC<HeroContainer> = ({flexSetting,children}) => {

    let flexSettingStyle;

    if(flexSetting){
        flexSettingStyle={'--Hero-Container-flex-direction':flexSetting.direction, '--Hero-Container-align-content':flexSetting.alignContent, '--Hero-Container-align-items':flexSetting.alignItems, '--Hero-Container-justify-content':flexSetting.justifyContent}
    }

    const heroContainerStyle = {
        ...flexSettingStyle,
    } as React.CSSProperties;

    return(
        <div className={styles.HeroContainer} style={heroContainerStyle}>
            {children}
        </div>
    )
}


type HeroHeading = {
    text?:{size?:string,family?:string, color?:string},
    margin?:Margin | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    children:string
}
export const HeroHeading:React.FC<HeroHeading> = ({text,margin,children}) =>{

    let textStyle = {'--hero-heading-size': text?.size,'--hero-heading-family':text?.family, '--hero-heading-color':text?.color};
    let marginStyle;

    if(typeof margin === 'string'){
        marginStyle = {'--hero-heading-margin-top': margin,'--hero-heading-margin-bottom': margin,'--hero-heading-margin-right': margin,'--hero-heading-margin-left': margin}
    } else {
        marginStyle = {'--hero-heading-margin-top': margin?.top,'--hero-heading-margin-bottom': margin?.bottom,'--hero-heading-margin-right': margin?.right,'--hero-heading-margin-left': margin?.left}
    }

    const headingStyle = {
        ...textStyle,
        ...marginStyle
    } as React.CSSProperties;

    return (
        <h1 style={headingStyle} className={styles.HeroHeading}> {children} </h1>
    )
}


type HeroParagraph = {
    text?:{size?:string,family?:string, color?:string},
    margin?:Margin | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    anchor?:{color?:string}
    children:ReactNode
}
export const HeroParagraph:React.FC<HeroParagraph> = ({text,margin,anchor,children}) => {

    let textStyle = {'--hero-paragraph-size': text?.size,'--hero-paragraph-family':text?.family, '--hero-paragraph-color':text?.color};
    let marginStyle;

    if(typeof margin === 'string'){
        marginStyle = {'--hero-paragraph-margin-top': margin,'--hero-paragraph-margin-bottom': margin,'--hero-paragraph-margin-right': margin,'--hero-paragraph-margin-left': margin}
    } else {
        marginStyle = {'--hero-paragraph-margin-top': margin?.top,'--hero-paragraph-margin-bottom': margin?.bottom,'--hero-paragraph-margin-right': margin?.right,'--hero-paragraph-margin-left': margin?.left}
    }
    
    const paragraphStyle = {
        ...textStyle,
        ...marginStyle
    } as React.CSSProperties;

    let styleanchor = {
        '--hero-anchor-paragraph-color':anchor?.color,
    } as React.CSSProperties;
    const styledChildren = React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === 'a') {
            return React.cloneElement(child as ReactElement<any>, {
                style:styleanchor, className: `${styles.HeroAnchorParagraph} ` 
            });
        }
        return child;
    });

    return (
        <p style={paragraphStyle} className={styles.HeroParagraph}> {styledChildren} </p>
    )
}

type Herobutton = {
    padding?:{width?:Padding, color?:string},
    border?:{width?:string, type?:'solid', color?:string, radius?:string},
    margin?:Margin | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    text?:{size?:string, family?:string, color?:string},
    children:ReactNode
}
export const HeroButton:React.FC<Herobutton> = ({padding,border,margin,text,children}) =>{
    let paddingStyle = {'--hero-button-padding':padding?.width, '--hero-button-color':padding?.color};
    let borderStyle = {'--hero-button-border-width':border?.width,'--hero-button-border-type':border?.type,'--hero-button-border-color':border?.color,'--hero-button-border-radius':border?.radius};
    let marginStyle;
    let textStyle = {'--hero-button-text-size': text?.size,'--hero-button-text-family':text?.family, '--hero-button-text-color':text?.color};

    if(typeof margin === 'string') {
        marginStyle = {'--hero-button-margin-top': margin,'--hero-button-margin-bottom': margin,'--hero-button-margin-right': margin,'--hero-button-margin-left': margin}
    } else {
        marginStyle = {'--hero-button-margin-top': margin?.top,'--hero-button-margin-bottom': margin?.bottom,'--hero-button-margin-right': margin?.right,'--hero-button-margin-left': margin?.left}
    }

    const buttonStyle = {
        ...paddingStyle,
        ...borderStyle,
        ...marginStyle,
        ...textStyle
    } as React.CSSProperties;
    
    return (
        <button style={buttonStyle} className={styles.HeroButton}> {children} </button>
    )
}

//fare un componente heading, uno button e uno paragraph. e definire un contentuto in cui mettere tutto