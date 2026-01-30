import React, {ReactNode,ReactElement,useState,useEffect} from 'react';
import {CSSLength, FontStyle, FontVariant, FontWeight, FontStretch, LineHeight, Color,TextDecorationStyle,TextDecorationLine,TextDecorationThickness,BackgroundBlendMode} from '../types';
import {FlexDirection, FlexWrap, AlignContent, JustifyContent, AlignItems} from '../types';
import styles from './HeroSection.module.css';
import {Padding,Margin} from '../types'
import {defaultImgHeroSectionDesktop,defaultImgHeroSectionMobile,defaultImgHeroSectionTablet} from './index';


// ADD THIS TO CUSTOM BUTTON
// button?:{color:string, text:{color:string, content:string}, padding:string, border:{borderColor:string, borderRadius:string, style:string}, margin:string}


type HeroSection={
    backGroundImage?:{src:{desktop?:string, tablet?:string, mobile?:string}, brightness?:Color, objectFit?:string},
    padding?:{all?:Padding} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding},
    height?:{mobile?:CSSLength, tablet?:CSSLength, desktop?:CSSLength},
    children: ReactNode
}
export const HeroSection:React.FC<HeroSection> = ({backGroundImage,padding,height,children}) => {

    let paddingStyle;
    let heightStyle;
    let backgroundImageStyle;

    if(backGroundImage){
        backgroundImageStyle = {'--hero-background-image-brightness': backGroundImage.brightness, '--hero-background-image-object-fit': backGroundImage.objectFit}
    }

    if (padding){
        if('all' in padding) {
            paddingStyle = {'--hero-section-padding-top': padding.all,'--hero-section-padding-bottom': padding.all,'--hero-section-padding-right': padding.all,'--hero-section-padding-left': padding.all}
        } 
        else if ('top' in padding || 'bottom' in padding || 'right' in padding || 'left' in padding) {
            paddingStyle = {'--hero-section-padding-top': padding.top,'--hero-section-padding-bottom': padding.bottom,'--hero-section-padding-right': padding.right,'--hero-section-padding-left': padding.left}
        }
    }

    if(height){
        
        heightStyle = {'--hero-section-desktop-height': height.desktop, '--hero-section-tablet-height': height.tablet, '--hero-section-mobile-height': height.mobile};
        
    }

    const containerStyle = {
        ...paddingStyle,
        ...heightStyle,
    } as React.CSSProperties;

    const backGroundImage1 ={
        ...backgroundImageStyle
    } as React.CSSProperties;
    
    return(
        <div id='hero_section' className={styles.HeroSection} style={containerStyle}>
            <img 
                className={styles.heroBackgroundImage}
                style={backGroundImage1}
                src={backGroundImage? backGroundImage.src?.desktop : defaultImgHeroSectionDesktop}
                srcSet={`${backGroundImage? backGroundImage.src?.desktop :defaultImgHeroSectionDesktop} 1600w, ${backGroundImage? backGroundImage.src?.tablet :defaultImgHeroSectionTablet} 1000w, ${backGroundImage? backGroundImage.src?.mobile :defaultImgHeroSectionMobile} 600w`}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 100vw, 100vw"
                alt="Background image" title="Background image" fetchPriority="high" loading="eager" height={'auto'} width={'auto'} />
            {children}
        </div>
    )
}


type HeroContainer = {
    margin?:{all?:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    flexSetting?:{direction?: FlexDirection, size?:string, gap?:string, wrap?: FlexWrap, alignContent?:AlignContent, justifyContent?:JustifyContent, alignItems?:AlignItems}
    children: ReactNode
}
export const HeroContainer:React.FC<HeroContainer> = ({margin,flexSetting,children}) => {

    let flexSettingStyle;
    let marginStyle;

    if(margin){
        if('all' in margin) {
            marginStyle = {'--hero-container-margin-top': margin.all,'--hero-container-margin-bottom': margin.all,'--hero-container-margin-right': margin.all,'--hero-container-margin-left': margin.all}
        } 
        else if('top' in margin || 'bottom' in margin || 'right' in margin || 'left' in margin) {
            marginStyle = {'--hero-container-margin-top': margin.top,'--hero-container-margin-bottom': margin.bottom,'--hero-container-margin-right': margin.right,'--hero-container-margin-left': margin.left}
        }
    }

    if(flexSetting){
        flexSettingStyle={'--hero-container-flex-direction':flexSetting.direction, '--hero-container-flex':flexSetting.size, '--hero-container-gap':flexSetting.gap, '--hero-container-align-content':flexSetting.alignContent, '--hero-container-align-items':flexSetting.alignItems, '--hero-container-justify-content':flexSetting.justifyContent}
    }

    const heroContainerStyle = {
        ...flexSettingStyle,
        ...marginStyle
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