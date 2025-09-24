import React, {ReactNode,ReactElement} from 'react';
import styles from './PageSection.module.css';


type PageSection = {
    h2?:{size?:string,family?:string,content:string},
    children:ReactNode /* | ReactElement<typeof Section>*/
}
export const PageSection:React.FC<PageSection> = ({h2,children}) => {
    return(
        <section className={styles.section}>
            {children}
        </section>
    )
}