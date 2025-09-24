import React, {ReactNode,ReactElement} from 'react';
import styles from './PageContent.module.css';
import {PageSection} from '../PageSection/PageSection'
import { HeroSection } from '../HeroSection/HeroSection';

type PageContent = {
    children: ReactNode | ReactElement<typeof PageSection> | ReactElement<typeof HeroSection>
}
export const PageContent:React.FC<PageContent> = ({children}) => {
    return(
        <main id="main-content" aria-label="main content" className={styles.main}>
            {children}
        </main>
    )
}