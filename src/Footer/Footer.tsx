import React, { Children, ReactElement,ReactNode } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Footer.module.css';

type Footer={backgroundColor?:string, children:ReactElement<typeof FooterNavbar>[] | ReactElement<typeof FooterNavbar>};
export const Footer:React.FC<Footer> = ({backgroundColor,children}) => {
  return (
    <footer id='footer' className={styles.footer}>
      {children}
    </footer>
  );
}

/* ce ne può essere più di una */ 
type FooterNavbar={title:string, linkList:{linkText: string; linkPath: string}[]};
export const FooterNavbar:React.FC<FooterNavbar> = ({title, linkList}) => {
  return (
  <nav className={styles.nav}>
    <h2>{title}</h2>
     <ul className={styles.ul}>
      {linkList.map((link) => (
        <li><a href={`${link.linkPath}`}>{link.linkText}</a></li>
      ))}
    </ul>
  </nav>
  )
}

type FotterAddress={addressData:{street?:string, city?:string, state?:string, zip?:string, country?:string, phone?:string, email?:string}};

type FooterSmall = {};



/*
type FooterGrid={rows?:number, columns?:number, gap?:string}
export const FooterGrid:React.FC<FooterGrid> = ({rows, columns}):ReactElement => {
  return (
    <div style={{display:'grid', gridTemplateRows:`repeat(${rows}, 1fr)`, gridTemplateColumns:`repeat(${columns}, 1fr)`, gap:'10px'}}>
    </div>
  )
}*/