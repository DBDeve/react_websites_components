import React, {ReactNode,ReactElement} from 'react';
import styles from './HeroSection.module.css';
import {CustomHeading,CustomParagraph,CustomButton} from '../Custom'
import { rgba, rgb } from '../types';

// ADD THIS TO CUSTOM BUTTON
//button?:{color:string, text:{color:string, content:string}, padding:string, border:{borderColor:string, borderRadius:string, style:string}, margin:string}



type Page = {
    h1:{size?:string,family?:string,content:string},
    children:ReactElement<typeof Section>
}
export const Page:React.FC<Page> = ({h1,children}) => {
    return(
        <main>
            <h1 className={`${styles.h1}`} style={{ '--h1-size': h1.size, '--h1-family':h1.family } as React.CSSProperties}> {h1.content} </h1>
            {children}
        </main>
    )
}

type Section = {
    h2:{size?:string,family?:string,content:string},
    children:ReactNode | ReactElement<typeof Section>
}
export const Section:React.FC<Section> = ({h2,children}) => {
    return(
        <section>
            <h2 className={`${styles.h2}`} style={{ '--h2-size': h2.size, '--h2-family':h2.family } as React.CSSProperties}> {h2.content} </h2>
            {children}
        </section>
    )
}

type image={ type:'image', src:string}
type video={ type:'video', src:string}
type HeroSection={
    mediaType:video | image,
    heading?:{size?:string,family?:string,content:string},
    paragraph:boolean,
    button?:{padding?:string, text:{color:string, content:string}}
}
export const HeroSection:React.FC<HeroSection> = ({mediaType,heading,paragraph,button}) => {
    return(
        <section id='hero_section' className={styles.HeroSection}> 
            {mediaType.type === 'video' && <video></video>}
            {mediaType.type === 'image' && (<img src={`${mediaType.src}`} className={`${styles.hero_img}`}alt="immagine hero section" loading="lazy"/>)}
            <div className={styles.HeroContent}>
                {heading && <CustomHeading type='h1' color={rgba(52, 195, 252, 1)}> titolo di prova1</CustomHeading>}
                {paragraph && <CustomParagraph> paragrafo di prova con <a href="#"> link </a></CustomParagraph>}
                {button &&  <CustomButton> pulsante di prova </CustomButton>}
            </div>
        </section>
    )
}

//fare un componente heading, uno button e uno paragraph. e definire un contentuto in cui mettere tutto