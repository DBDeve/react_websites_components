import React, {ReactNode,ReactElement} from 'react';
import styles from './Custom.module.css';


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

