import React, {ReactNode,ReactElement} from 'react';
import styles from './HeroSection.module.css';
import { rgba, rgb } from '../types';
import {Margin} from '../types'


// ADD THIS TO CUSTOM BUTTON
// button?:{color:string, text:{color:string, content:string}, padding:string, border:{borderColor:string, borderRadius:string, style:string}, margin:string}




type image={ type:'image', src:string}
type video={ type:'video', src:string}
type HeroSection={
    mediaType:video | image,
    children: ReactNode
}
export const HeroSection:React.FC<HeroSection> = ({mediaType, children}) => {
    return(
        <div id='hero_section' className={styles.HeroSection}>
            {mediaType.type === 'video' && <video></video>}
            {mediaType.type === 'image' && (<img src={`${mediaType.src}`} className={`${styles.hero_img}`}alt="immagine hero section" loading="lazy"/>)}
            <div className={styles.HeroContent}>
                {children}
            </div>
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
    children:string,
    padding?:string, text?:{color:string}
}
export const HeroButton:React.FC<Herobutton> = ({children}) =>{
    return (
        <button className={styles.HeroButton}> {children} </button>
    )
}





//fare un componente heading, uno button e uno paragraph. e definire un contentuto in cui mettere tutto