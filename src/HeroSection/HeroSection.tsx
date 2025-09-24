import React, {ReactNode,ReactElement} from 'react';
import styles from './HeroSection.module.css';
import { rgba, rgb } from '../types';

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
    children:string,
    size?:string,family?:string
}
export const HeroHeading:React.FC<HeroHeading> = ({children}) =>{
    return (
        <h1 className={styles.HeroHeading}> {children} </h1>
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

type HeroParagraph = {
    children:string
}
export const HeroParagraph:React.FC<HeroParagraph> = ({children}) =>{
    return (
        <p className={styles.HeroParagraph}> {children} </p>
    )
}



//fare un componente heading, uno button e uno paragraph. e definire un contentuto in cui mettere tutto