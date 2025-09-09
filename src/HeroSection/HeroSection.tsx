import React, {ReactNode,ReactElement} from 'react';
import styles from './HeroSection.module.css';
import {CustomButton} from '../Custom'

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
    h2?:{size?:string,family?:string,content:string}
    button?:{padding?:string, text:{color:string, content:string}}
}
export const HeroSection:React.FC<HeroSection> = ({mediaType,h2,button}) => {
    return(
        <section id='hero_section' className={styles.HeroSection}> 
            {mediaType.type === 'video' && <video></video>}
            {mediaType.type === 'image' && (<img src={`${mediaType.src}`} className={`${styles.hero_img}`}alt="immagine hero section" loading="lazy"/>)}
            <div className={styles.HeroContent}>
                {h2 && <h2 style={{ '--h2hero-size': h2.size, '--h2hero-family':h2.family } as React.CSSProperties} className={`${styles.h2HeroSection}`}> {h2.content} </h2>}
                {button &&  <CustomButton> pulsante di prova </CustomButton>}
            </div>
        </section>
    )
}