import React, {ReactNode,ReactElement,useState,useEffect,useRef} from 'react';
import styles from './Container.module.css';
import {CSSLength, Margin, FontStyle, FontVariant, FontWeight, FontStretch, LineHeight, Color,TextDecorationStyle,TextDecorationLine,TextDecorationThickness,Padding,BackgroundBlendMode} from '../types';
import {FlexDirection, FlexWrap, AlignContent, JustifyContent, AlignItems} from '../types';

type BlockContainer = {
    type: 'main' | 'section' | 'body' | 'div',
    margin?:{all?:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    border?:{width?:string, type?:'solid', color?:string, radius?:string},
    padding?:{all?:Padding} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding},
    backGround?:{color?:Color},
    backGroundImage?:{src:string | {desktop?:string, tablet?:string, mobile?:string}, brightness?:number, objectFit?:string}, 
    children:ReactNode
}
export const BlockContainer:React.FC<BlockContainer> = ({type,padding,border,margin,backGround, backGroundImage,children}) => {

    let paddingStyle;
    let borderStyle;
    let marginStyle;
    let backgroundStyle;
    let backGroundImageStyle;

    if (padding){
        if('all' in padding) {
            paddingStyle = {'--container-padding-top': padding.all,'--container-padding-bottom': padding.all,'--container-padding-right': padding.all,'--container-padding-left': padding.all}
        } 
        else if ('top' in padding || 'bottom' in padding || 'right' in padding || 'left' in padding) {
            paddingStyle = {'--container-padding-top': padding.top,'--container-padding-bottom': padding.bottom,'--container-padding-right': padding.right,'--container-padding-left': padding.left}
        }
    }

    if(border){
        borderStyle = {'--container-border-width': border.width, '--container-border-type': border.type, '--container-border-color': border.color, '--container-border-radius': border.radius}
    }

    if(margin){
        if('all' in margin) {
            marginStyle = {'--container-margin-top': margin.all,'--container-margin-bottom': margin.all,'--container-margin-right': margin.all,'--container-margin-left': margin.all}
        } 
        else if('top' in margin || 'bottom' in margin || 'right' in margin || 'left' in margin) {
            marginStyle = {'--container-margin-top': margin.top,'--container-margin-bottom': margin.bottom,'--container-margin-right': margin.right,'--container-margin-left': margin.left}
        }
    }

    if(backGround){
        backgroundStyle = {'--container-background-color':backGround.color,}
    }

    if(backGroundImage){
        backGroundImageStyle = {
            '--container-background-brightness': backGroundImage.brightness,
            '--container-background-object-fit': backGroundImage.objectFit
        } 
    }

    const containerStyle = {
        ...paddingStyle,
        ...borderStyle,
        ...marginStyle,
        ...backgroundStyle,
    } as React.CSSProperties;

    const imageStyle = {
        ...backGroundImageStyle
    } as React.CSSProperties;


    
    return  React.createElement(
        type, 
        { style:containerStyle , className: `${styles.BlockContainer}`},
        typeof backGroundImage?.src==='string' && (
            <img 
                className={styles.BackgroundImage}
                style={imageStyle}
                src={backGroundImage.src}
                alt="Background image" 
                title="Background image" 
                loading='lazy'
            />
        ),
        typeof backGroundImage?.src==='object' && (
            <img 
                className={styles.BackgroundImage}
                style={imageStyle}
                src={backGroundImage.src.desktop}
                srcSet={`${backGroundImage.src.desktop? backGroundImage.src.desktop: ''} 1600w, ${backGroundImage.src.tablet? backGroundImage.src.tablet: ''} 1000w, ${backGroundImage.src.mobile? backGroundImage.src.mobile: ''} 600w`}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 100vw, 100vw"
                alt="Background image" 
                title="Background image" 
                loading='lazy'
            />
        ),
        children
    );
}

type FlexContainer = {
    type: 'main' | 'section' | 'body' | 'div',
    margin?:{all?:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin},
    border?:{width?:string, type?:'solid', color?:string, radius?:string},
    padding?:{all?:Padding} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding},
    backGround?:{color?:Color},
    backGroundImage?:{src:string | {desktop?:string, tablet?:string, mobile?:string}, brightness?:number, objectFit?:string},
    flex?:{gap?:string, size?:number, direction?: FlexDirection, wrap?: FlexWrap, alignContent?: AlignContent, justifyContent?: JustifyContent,alignItems?: AlignItems},
    mobileReverse?:boolean,
    children:ReactNode
}
export const FlexContainer:React.FC<FlexContainer> = ({type,padding,border,margin,backGround, backGroundImage,flex,mobileReverse,children}) => {

    let paddingStyle;
    let borderStyle;
    let marginStyle;
    let backgroundStyle;
    let backGroundImageStyle;
    let flexStyle;

    if (padding){
        if('all' in padding) {
            paddingStyle = {'--container-padding-top': padding.all,'--container-padding-bottom': padding.all,'--container-padding-right': padding.all,'--container-padding-left': padding.all}
        } 
        else if ('top' in padding || 'bottom' in padding || 'right' in padding || 'left' in padding) {
            paddingStyle = {'--container-padding-top': padding.top,'--container-padding-bottom': padding.bottom,'--container-padding-right': padding.right,'--container-padding-left': padding.left}
        }
    }

    if(border){
        borderStyle = {'--container-border-width': border.width, '--container-border-type': border.type, '--container-border-color': border.color, '--container-border-radius': border.radius}
    }

    if(margin){
        if('all' in margin) {
            marginStyle = {'--container-margin-top': margin.all,'--container-margin-bottom': margin.all,'--container-margin-right': margin.all,'--container-margin-left': margin.all}
        } 
        else if('top' in margin || 'bottom' in margin || 'right' in margin || 'left' in margin) {
            marginStyle = {'--container-margin-top': margin.top,'--container-margin-bottom': margin.bottom,'--container-margin-right': margin.right,'--container-margin-left': margin.left}
        }
    }

    if(backGround){
        backgroundStyle = {'--container-background-color':backGround.color}
    }

    if(backGroundImage){
        backGroundImageStyle = {
            '--container-background-brightness': backGroundImage.brightness,
            '--container-background-object-fit': backGroundImage.objectFit
        } 
    }

    if(flex){
        
        flexStyle={'--container-flex-gap':flex.gap, '--flex':flex.size, '--container-flex-direction':flex.direction, '--container-flex-wrap':flex.wrap, '--container-align-content':flex.alignContent, '--container-justify-content':flex.justifyContent, '--container-align-items':flex.alignItems};
    
    }

    const componentRef = useRef<HTMLDivElement>(null);

    if(mobileReverse){

        useEffect(() => {

            let width = window.innerWidth;

            console.log("width",width)

            if(componentRef.current && width <= 850){
                componentRef.current.style.setProperty('--container-flex-direction','column-reverse');
                componentRef.current.style.setProperty('--container-align-items','center');
            } else if(componentRef.current && width > 850){

                if(flex && flex.direction){
                    if(flex.direction){
                        componentRef.current.style.setProperty('--container-flex-direction', flex.direction);
                    }
                    if(flex.alignItems){
                        componentRef.current.style.setProperty('--container-align-items', flex.alignItems);
                    }
                }

            }
                
            const onResize = () => {

                let width = window.innerWidth;

                console.log("width",width)

                if(componentRef.current && width <= 850){
                    componentRef.current.style.setProperty('--container-flex-direction','column-reverse');
                    componentRef.current.style.setProperty('--container-align-items','center');
                } else if(componentRef.current && width > 850){

                    if(flex && flex.direction){
                        if(flex.direction){
                            componentRef.current.style.setProperty('--container-flex-direction', flex.direction);
                        }
                        if(flex.alignItems){
                            componentRef.current.style.setProperty('--container-align-items', flex.alignItems);
                        }
                    }
                    
                }

            };

            window.addEventListener("resize", onResize);
            
            return () => window.removeEventListener("resize", onResize);

        }, []);
    }

    const containerStyle = {
        ...paddingStyle,
        ...borderStyle,
        ...marginStyle,
        ...backgroundStyle,
        ...flexStyle
    } as React.CSSProperties;

    const imageStyle = {
        ...backGroundImageStyle
    } as React.CSSProperties;

     


    return  React.createElement(
        type, 
        { style:containerStyle , className: `${styles.FlexContainer}`, ref:componentRef },
        typeof backGroundImage?.src==='string' && (
            <img 
                className={styles.BackgroundImage}
                style={imageStyle}
                src={backGroundImage.src}
                alt="Background image" 
                title="Background image" 
                loading='lazy'
            />
        ),
        typeof backGroundImage?.src==='object' && (
            <img 
                className={styles.BackgroundImage}
                style={imageStyle}
                src={backGroundImage.src.desktop}
                srcSet={`${backGroundImage.src.desktop? backGroundImage.src.desktop: ''} 1600w, ${backGroundImage.src.tablet? backGroundImage.src.tablet: ''} 1000w, ${backGroundImage.src.mobile? backGroundImage.src.mobile: ''} 600w`}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 100vw, 100vw"
                alt="Background image" 
                title="Background image" 
                loading='lazy'
            />
        ),
        children
    );

}