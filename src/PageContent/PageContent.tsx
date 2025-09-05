import React, {ReactNode,ReactElement} from 'react';
import styles from './PageContent.module.css';


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