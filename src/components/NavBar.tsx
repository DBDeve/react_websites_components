//da compilare

import React from "react";

type completeNav ={
  menu: { align: "left" | "center" | "right" },       // obbligatorio
  logo: { align: "left" | "center" | "right" }   // obbligatorio
  social: { align: "left" | "center" | "right" },     // opzionale
  backGRoundColor?: string,                     // opzionale
  fixed: boolean 
}

type completeNav1 ={
  menu: { align: "left" | "center" | "right" },       // obbligatorio
  social: { align: "left" | "center" | "right" },     // opzionale
  backGRoundColor?: string,                     // opzionale
  fixed: boolean 
}

type completeNav2 ={
  menu: { align: "left" | "center" | "right" },       // obbligatorio
  logo: { align: "left" | "center" | "right" },   // obbligatorio
  backGRoundColor?: string,                     // opzionale
  fixed: boolean 
}

type completeNav3 ={
  menu: { align: "left" | "center" | "right" },       // obbligatorio
  backGRoundColor?: string,                     // opzionale
  fixed: boolean 
}

type NavBarOptions = {
  menu: { align: "left" | "center" | "right" };         // obbligatorio
  logo?: { align: "left" | "center" | "right" };         // obbligatorio
  social?: { align: "left" | "center" | "right" };      // opzionale
  backGRoundColor?: string;                             // opzionale
  fixed: boolean;                                      // opzionale
}

type BaseProps = {menuData:{pageTitle: string; pagePath: string}[]};//array di oggetti
type createNavBarProps = {socialIcon:{},logoImage:{}}; 
type NavBarProps<T extends Partial<createNavBarProps>> = BaseProps & T;


function createNavBar<T extends Partial<createNavBarProps>>(navBar:completeNav|completeNav1|completeNav2|completeNav3): React.FC<NavBarProps<T>>{

    const alignMap = {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end',
    };
    
    
    const ReactComponent:React.FC<NavBarProps<T>>  = ({ menuData,socialIcon,logoImage }) => {
      console.log(menuData)
      console.log("navbar",navBar)
      return (
        <div style={{
          display:'inline-flex',
          width:'100%',
          ...(navBar.fixed===true ? { position: 'fixed' } : {}),
          padding:'10px',
          ...(navBar.backGRoundColor===undefined? {}:{backgroundColor: navBar.backGRoundColor})
          }}
        >
          <div id ="menu" style={{flex:'2', display:'inline-flex', justifyContent:alignMap[navBar.menu.align]}}>
            {menuData.map((page, index) => (
              <span style={{ padding: '0.9%', borderRight: index < menuData.length - 1 ? '1px solid gray' : 'none',}} key={index} >
                <a href={`${page.pagePath}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.pageTitle}
                </a>
              </span>
            ))}
          </div>
          {'social' in navBar && (
            <div id="social" style={{
              flex: '1',
              display: 'inline-flex',
              justifyContent: alignMap[navBar.social.align]
            }}>
              social
            </div>
            )}
          <div id="logo" style={{flex:'1', textAlign:'center'}} > logo </div>
        </div>
      )
    }

    return ReactComponent

}

export function createNavBarFactory1(options: completeNav): React.FC<BaseProps & { logoImage: {}; socialIcon: {} }>;
export function createNavBarFactory1(options: completeNav2): React.FC<BaseProps & { logoImage: {} }>;
export function createNavBarFactory1(options: completeNav1): React.FC<BaseProps & { socialIcon: {} }>;
export function createNavBarFactory1(options: completeNav3): React.FC<BaseProps>;

export function createNavBarFactory1(options: NavBarOptions) {
  const { menu, logo, social, fixed, backGRoundColor } = options;

  if (logo && social) {
    
    const navbar: completeNav = { menu, logo, social,fixed, backGRoundColor };
    return createNavBar<{ logoImage: {}; socialIcon: {} }>(navbar);
  } else if (logo) {
    const navbar: completeNav2 = { menu, logo,fixed, backGRoundColor };
    return createNavBar<{ logoImage: {} }>(navbar);
  } else if (social) {
    const navbar: completeNav1 = { menu, social,fixed, backGRoundColor };
    return createNavBar<{ socialIcon: {} }>(navbar);
  } else {
    const navbar: completeNav3 = { menu,fixed, backGRoundColor };
    return createNavBar<{}>(navbar);
  }
}