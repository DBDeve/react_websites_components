import React, {ReactNode,ReactElement} from 'react';
import styles from './Custom.module.css';


type CustomHeading = {
    margin?:string | {top?:string, bottom?:string, right?:string, left?:string},
    type:'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
    children:ReactNode
}
export const CustomHeading:React.FC<CustomHeading> = ({type,children, margin}) => {
    const style = typeof margin === 'string'? {'--button-marginTop': margin,'--button-marginRight': margin,'--button-marginBottom': margin,'--button-marginLeft': margin,}:{'--button-marginTop': margin?.top,'--button-marginRight': margin?.right,'--button-marginBottom': margin?.bottom,'--button-marginLeft': margin?.left,
    } as React.CSSProperties;
    return React.createElement(type, { style, className: styles.customHeading },children);
    
}


type CustomBottom={
    padding?:{top?:string, bottom?:string, right?:string, left?:string, color?:string},
    border?:{width?:string, type?:'solid', color?:string},
    margin?:{top?:string, bottom?:string, right?:string, left?:string},
    text?:{size?:string, weight?:string, color?:string, family?:string},
    boxShadow?:{offset:string,radius:string,color:string},
    children:ReactNode
}
export const CustomButton:React.FC<CustomBottom> = ({padding,border,margin,children}) => {
    return(
        <button
            style={{
            '--button-paddingTop': padding?.top, '--button-paddingRight':padding?.right,'--button-paddingBottom':padding?.bottom, '--button-paddingLeft':padding?.left,
            '--button-borderWidth':border?.width, '--button-borderType': border?.type, '--button-borderColor':border?.color,
            '--button-marginTop': margin?.top, '--button-marginRight': margin?.right, '--button-marginBottom': margin?.bottom, '--button-marginLeft': margin?.left,
            } as React.CSSProperties}
            className={styles.button}
        >
            {children}
        </button>
    )
}

