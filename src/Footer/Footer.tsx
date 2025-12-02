import React, { Children, ReactElement,ReactNode } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Footer.module.css';
import { AlignContent, AlignItems, FlexDirection, FlexWrap,JustifyContent } from '../types';

const alignMap = {
  left: `${styles.justifyLeft}`,
  center: `${styles.justifyCenter}`,
  right: `${styles.justifyRight}`,
};

type Footer={backgroundColor?:string, children:ReactElement<typeof FooterNavBar>[] | ReactElement<typeof FooterNavBar> | ReactElement<typeof FooterAddress> | ReactElement<typeof FooterSmall>};
export const Footer:React.FC<Footer> = ({backgroundColor,children}) => {
  return (
    <footer id='footer' aria-label='footer' className={`${styles.footer}`} style={{ '--bg-Color': backgroundColor } as React.CSSProperties}>
      {children}
    </footer>
  );
}


const alignItemsMap = {
  left: `${styles.itemsAlignLeft}`,
  center: `${styles.itemAlignCenter}`,
  right: `${styles.itemsAlignRight}`,
};
/* ce ne può essere più di una */ 
type FooterNavBar={title:{size?:string,family?:string,content:string}, links:{size?:string,family?:string,content:{linkText: string; linkPath: string}[]}, align: "left" | "center" | "right"};
export const FooterNavBar:React.FC<FooterNavBar> = ({title, links,align}) => {
  return (
  <nav className={`${styles.nav} ${alignItemsMap[align]}`}>
    <h2 className={`${styles.footerNavTitle}`} style={{ '--fontSize-Title': title.size,'--fontFamily-Title':title.family } as React.CSSProperties}>{title.content}</h2>
    <ul className={`${styles.ul} ${alignItemsMap[align]} ${styles.footerNavBarLInk}`} style={{ '--fontSize-link': links.size, '--fontFamily-link':links.family } as React.CSSProperties}>
      {links.content.map((link,index) => (
        <li key={index}> <a className={styles.enableHover} href={`${link.linkPath}`}>{link.linkText}</a> </li>
      ))}
    </ul>
  </nav>
  )
}

type FooterAddress={name:string, street?:string, CAP?:number, city?:string, state?:string, phone?:string, email?:string, website?:string};
export const FooterAddress:React.FC<FooterAddress> = ({name,CAP,street,city,phone,email,website}) => {
  return (
    <address>
      {name && <div>{name}</div>}
      <div>{street && <div>{street}</div>} {CAP && <div>{CAP}</div>} {city && <div>{city}</div>}</div>
      {phone && <div>Tel: +<a href={`tel:+${phone}`}>{phone}</a></div>}
      {email && <div>Email: <a href ={`mailto:${email}`}>{email}</a></div>}
      {website && <div> <a href ={`${website}`}>{website}</a></div>}
    </address>
  )
}


type FooterSmall = {};
export const FooterSmall:React.FC<FooterSmall> = ({}) => {
  return (
    <small>&copy; 2025 Tutti i diritti riservati</small>
  )
}


type FooterContainer = {
  direction?: FlexDirection,
  wrap?: FlexWrap,
  alignContent?: AlignContent,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems,
  children: ReactNode
}
export const FooterContainer:React.FC<FooterContainer> = ({direction, wrap, alignContent, justifyContent, alignItems, children}) => {
  return (
    <div className={styles.footerFlexContainer} style={{ '--footer-flex-direction': direction, '--footer-flex-wrap': wrap, '--footer-align-content': alignContent, '--footer-justify-content': justifyContent, '--footer-align-items': alignItems } as React.CSSProperties}>
      {children}
    </div>
  )
}