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



/* ce ne può essere più di una */ 
type FooterNavBar={
  title?:{size?:string,family?:string,content:string}, 
  list:{size?:string, family?:string, content:{linkText: string; linkPath: string}[]},
  flexStyle?:{direction?: FlexDirection, justifyContent?: JustifyContent, alignItems?: AlignItems}
};
export const FooterNavBar:React.FC<FooterNavBar> = ({title, list, flexStyle}) => {

  let navStyle;
  let titleStyle;
  let listStyle;

  if(title){
    titleStyle= {'--footer-navbar-title-fontSize': title.size,'--footer-navbar-title-family':title.family} as React.CSSProperties;
  }

  if(list){
    listStyle = {'--fontSize-link':list.size, '--fontFamily-link':list.family} as React.CSSProperties;
  }

  if(flexStyle){
    navStyle ={'--footer-navBar-container-justifyContent': flexStyle.alignItems} as React.CSSProperties;
    listStyle = {...listStyle, '--footer-navbar-list-direction':flexStyle.direction, '--footer-navbar-list-justifyContent':flexStyle.justifyContent, '--footer-navbar-list-itemsAlign':flexStyle.alignItems} as React.CSSProperties
  }

  return (
    <nav className={`${styles.footerNav}`} style={navStyle}>
      { title && <h2 className={`${styles.footerNavTitle}`} style={titleStyle}> {title.content} </h2>}
      <ul className={`${styles.footerNavList}`} style={listStyle}>
        {list.content.map((link,index) => (
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
    <div className={styles.footerContainer} style={{ '--footer-flex-direction': direction, '--footer-flex-wrap': wrap, '--footer-align-content': alignContent, '--footer-justify-content': justifyContent, '--footer-align-items': alignItems } as React.CSSProperties}>
      {children}
    </div>
  )
}