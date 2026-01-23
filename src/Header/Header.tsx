import React, { ReactElement,ReactNode,useState,useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Header.module.css';
import {CSSLength} from '../types'
import {Padding,Margin} from '../types'
import {FlexDirection, FlexWrap, AlignContent, JustifyContent, AlignItems} from '../types';
import {defaultImg} from './index';



type descriptionMap={
  [key:string]:{nav:string, button:string, logo:string, alt:string, social:string},
}
const description: descriptionMap ={
  it:{nav:'Navigazione principale', button:'Apri menu mobile', logo:'Immagine logo', alt:'Logo azienda', social:'icone social'},
  en:{nav:'Primary navigation', button:'Open menu mobile', logo:'Logo image', alt:'Company logo', social:'social icons'}
};

const alignMap = {
  left: `${styles.justifyLeft}`,
  center: `${styles.justifyCenter}`,
  right: `${styles.justifyRight}`,
};


type Header = {
  backGroundColor?: string,
  padding?: {all?:Padding} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding},
  fixed?: boolean,
  hoverColor?:string,
  children: ReactNode
};
export const Header: React.FC<Header> = ({ children, backGroundColor, padding, fixed, hoverColor }) => {

  let positionStyle;
  let paddingStyle;
  let backGroundStyle;
  let hoverColorStyle;
  
  if(fixed){

    positionStyle = {'--header-fixed':'fixed'};

    useEffect(() => {

      const onResize = () => {

        const header = document.querySelector('header');

        const main = document.querySelector('main')
        if(header && main){ 
          const headerHeight = header.clientHeight;
          main.style.setProperty('--container-margin-top', `${headerHeight}px`);
        }

        const mobileMenu = document.getElementById('mobile_menu');
        if(mobileMenu && header){
          const headerHeight = header.clientHeight;
          mobileMenu.style.setProperty('--mobile-menu-top', `${headerHeight}px`);
        }

      };

      window.addEventListener("resize", onResize);
      
      return () => window.removeEventListener("resize", onResize);

    }, []);

  }

  useEffect(() => {

    const onResize = () => {
      const header = document.querySelector('header');
      const mobileMenu = document.getElementById('mobile_menu');
      if(mobileMenu && header){
        const headerHeight = header.clientHeight;
        mobileMenu.style.setProperty('--mobile-menu-top', `${headerHeight}px`);
      }
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
      
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if(padding){
    if('all' in padding) {
      paddingStyle = {'--hero-section-padding-top': padding.all,'--hero-section-padding-bottom': padding.all,'--hero-section-padding-right': padding.all,'--hero-section-padding-left': padding.all}
    } 
    else if ('top' in padding || 'bottom' in padding || 'right' in padding || 'left' in padding) {
      paddingStyle = {'--hero-section-padding-top': padding.top,'--hero-section-padding-bottom': padding.bottom,'--hero-section-padding-right': padding.right,'--hero-section-padding-left': padding.left}
    }
  }

  if(backGroundColor){
    backGroundStyle={'--header-background-color':backGroundColor}
  }

  if(hoverColor){
    hoverColorStyle = {'--header-hover-color':hoverColor}
  }

  let headerStyle={
    ...positionStyle,
    ...paddingStyle,
    ...backGroundStyle,
    ...hoverColorStyle
  } as React.CSSProperties
  
  return (
    <header role="banner" style={headerStyle} className={`${styles.header}`}>
      {children}
    </header>
  );
};


type HeaderNavBar ={
  menuData:{pageTitle: string; pagePath: string}[],
  enableHover?:boolean,
  nav?:{componetGrow?:number, text?:{size:CSSLength, family:string}},
  desktopMenu?:{align?:JustifyContent}
  mobileMenu?:{align?:JustifyContent}
};
export const HeaderNavBar:React.FC<HeaderNavBar> = ({menuData,nav,enableHover,desktopMenu,mobileMenu})=>{

  const [isVisible, setIsVisible] = useState(false);
  

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsVisible(!isVisible);
  };

  const [lang, setLang] = useState('');
  useEffect(() => {
    const htmlLang = document.documentElement.getAttribute('lang') || 'it';
    setLang(htmlLang);
  }, []);

  let navStyle;
  let menuDesktopStyle;
  let menuMobileStyle;
  const enableHoverClass = enableHover ? styles.hoverEnabled: 'no_hover';


  if(nav){
    let grow;
    let text;

    if(nav.componetGrow){
      grow={'--navbar-component-Grow': nav.componetGrow}
    }

    if(nav.text){
      text={'--navbar-font-size':nav.text.size, '--navbar-font-family':nav.text.family}
    }

    navStyle={
      ...grow,
      ...text
    } as React.CSSProperties;
  }

  if(desktopMenu){

    let align;

    if(desktopMenu.align){
      align={'--navbar-desktop-menu-align': desktopMenu.align}
    }

    menuDesktopStyle={
      ...align
    } as React.CSSProperties;
  }


  let align;
  let view

  if(mobileMenu){

    if(mobileMenu.align){
      align={'--navbar-mobile-menu-align': mobileMenu.align }
    }
    
  }

  view ={'--menu-display': isVisible ? 'flex' : 'none'}

  menuMobileStyle={
    ...align,
    ...view
  } as React.CSSProperties;
  
  return(
    <nav id ="navbar" role="navigation" aria-label={description[lang]?.nav?? 'undefined'} style={navStyle} className={styles.navbar}>
      <button aria-label={description[lang]?.button?? 'undefined'} className={`${styles.menuMobileBottom}`} onClick={handleClick}>
        {isVisible ? <i className="fas fa-times fa-2x"></i> : <i className="fas fa-bars fa-2x"></i>}
      </button>
      <ul id="desktop_menu" className={`${styles.desktopMenu}`} style={menuDesktopStyle}>
        {menuData.map((page, index) => (
          <li key={index} >
            {/* creare un variabile per l'inserimeto di colori con contrasti che funzionano universalmente */}
            <a href={`${page.pagePath}`} className={`${enableHoverClass}`}>
              <p >{page.pageTitle}</p>
            </a>
          </li>
        ))}
      </ul>
      {/* trovare un modo per inserire la classe "menuMobileStyle" nel tag style*/ }
      <ul id="mobile_menu" className={`${styles.mobileMenu}`} style={menuMobileStyle}>
        {menuData.map((page, index) => (
          <li className={` ${index < menuData.length - 1 ? styles.borderBottom : 'no_borderRight'}`} key={index} >
            <a href={`${page.pagePath} `} className={`${enableHoverClass}`}>
              <p >{page.pageTitle}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const iconSizeMap ={
  small: 'fa-sm',
  medium: 'fa-lg',
  large: 'fa-2x'
}

type HeaderSocialIcons = {
  iconList:{facebook?: { link: string };
  instagram?: { link: string };
  twitter?: { link: string };
  linkedin?: { link: string };
  youtube?: { link: string };
  tiktok?: { link: string };
  snapchat?: { link: string };
  pinterest?: { link: string };
  reddit?: { link: string };
  tumblr?: { link: string };
  threads?: { link: string };
  whatsapp?: { link: string };
  telegram?: { link: string };
  discord?: { link: string };
  twitch?: { link: string };
  github?: { link: string };
  behance?: { link: string };
  dribbble?: { link: string };
  vimeo?: { link: string };
  medium?: { link: string };
  mastodon?: { link: string };
  soundcloud?: { link: string };
  spotify?: { link: string };
  wechat?: { link: string };
  qq?: { link: string };
  vk?: { link: string };
  line?: { link: string };},
  align?:JustifyContent,
  sizeIcon?:string,
  componetGrow?:number,
  enableHover?:boolean,
};
export const HeaderSocialIcons:React.FC<HeaderSocialIcons> = ({enableHover,componetGrow,sizeIcon,align,iconList})=>{

  const [lang, setLang] = useState('');
  useEffect(() => {
    const htmlLang = document.documentElement.getAttribute('lang') || 'it';
    setLang(htmlLang);
  }, []);

  const enableHoverClass = enableHover ? styles.hoverEnabled: 'no_hover';

  let headersocalsIconsGrow;
  let headersocalsIconsSize;
  let headerSocialIconsAlign;

  if(componetGrow){
    headersocalsIconsGrow={'--header-social-icons-grow': componetGrow}
  }

  if(sizeIcon){
    headersocalsIconsSize={'--header-social-icons-size':sizeIcon}
  }

  if(align){
    headerSocialIconsAlign = {'--header-social-icons-align':align}
  }

  let headerSocialsIconsStyle={
    ...headersocalsIconsGrow,
    ...headersocalsIconsSize,
    ...headerSocialIconsAlign
  } as React.CSSProperties;

  return (
    <div id="social_icon" aria-label={description[lang]?.social?? 'undefined'} className={styles.socialIconsContainer} style={headerSocialsIconsStyle}> 
      {iconList.facebook &&
        <a
          href={iconList.facebook.link}
          aria-label="Facebook"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-facebook fa-lg`}></i>
          <span className={styles.screen_reader_only}>Facebook</span>
        </a>
      }
      {iconList.instagram &&
        <a
          href={iconList.instagram.link}
          aria-label="Instagram"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}

        >
          <i className={`fab fa-instagram fa-lg`}></i>
          <span className={styles.screen_reader_only}>Instagram</span>
        </a>
      }
      {iconList.twitter &&
        <a
          href={iconList.twitter.link}
          aria-label="Twitter"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}

        >
          <i className={`fab fa-twitter fa-lg`}></i>
          <span className={styles.screen_reader_only}>Twitter</span>
        </a>
      }
      {iconList.linkedin &&
        <a
          href={iconList.linkedin.link}
          aria-label="linkedin"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-linkedin fa-lg`}></i>
          <span className={styles.screen_reader_only}>LinkedIn</span>
        </a>
      }
      {iconList.youtube &&
        <a
          href={iconList.youtube.link}
          aria-label="YouTube"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-youtube fa-lg`}></i>
          <span className={styles.screen_reader_only}>YouTube</span>
        </a>
      }
      {iconList.tiktok &&
        <a
          href={iconList.tiktok.link}
          aria-label="TikTok"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-tiktok fa-lg`}></i>
          <span className={styles.screen_reader_only}>TikTok</span>
        </a>
      }
      {iconList.snapchat &&
        <a
          href={iconList.snapchat.link}
          aria-label="Snapchat"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-snapchat-ghost fa-lg`}></i>
          <span className={styles.screen_reader_only}>snapchat</span>
        </a>
      }
      {iconList.pinterest &&
        <a
          href={iconList.pinterest.link}
          aria-label="Pinterest"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-pinterest fa-lg`}></i>
          <span className={styles.screen_reader_only}>pinterest</span>
        </a>
      }
      {iconList.reddit &&
        <a
          href={iconList.reddit.link}
          aria-label="Reddit"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-reddit fa-lg`}></i>
          <span className={styles.screen_reader_only}>Reddit</span>
        </a>
      }
      {iconList.discord &&
        <a
          href={iconList.discord.link}
          aria-label="Discord"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-discord fa-lg`}></i>
          <span className={styles.screen_reader_only}>Discord</span>
        </a>
      }
      {iconList.telegram &&
        <a
          href={iconList.telegram.link}
          aria-label="Telegram"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-telegram fa-lg`}></i>
          <span className={styles.screen_reader_only}>Telegram</span>
        </a>
      }
      {iconList.whatsapp &&
        <a
          href={iconList.whatsapp.link}
          aria-label="WhatsApp"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-whatsapp fa-lg`}></i>
          <span className={styles.screen_reader_only}>whatsapp</span>
        </a>
      }
      {iconList.github &&
        <a
          href={iconList.github.link}
          aria-label="GitHub"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-github fa-lg`}></i>
          <span className={styles.screen_reader_only}>GitHub</span>
        </a>
      }
      {iconList.twitch &&
        <a
          href={iconList.twitch.link}
          aria-label="Twitch"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-twitch fa-lg`}></i>
          <span className={styles.screen_reader_only}>twitch</span>
        </a>
      }
      {iconList.behance &&
        <a
          href={iconList.behance.link}
          aria-label="Behance"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-behance fa-lg`}></i>
          <span className={styles.screen_reader_only}>behance</span>
        </a>
      }
      {iconList.dribbble &&
        <a
          href={iconList.dribbble.link}
          aria-label="Dribbble"
          rel="noopener noreferrer"
          target="_blank"
          className={` ${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-dribbble fa-lg`}></i>
          <span className={styles.screen_reader_only}>dribbble</span>
        </a>
      }
      {iconList.medium &&
        <a
          href={iconList.medium.link}
          aria-label="Medium"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-medium fa-lg`}></i>
          <span className={styles.screen_reader_only}>medium</span>
        </a>
      }
      {iconList.vimeo &&
        <a
          href={iconList.vimeo.link}
          aria-label="Vimeo"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.socialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-vimeo fa-lg`}></i>
          <span className={styles.screen_reader_only}>vimeo</span>
        </a>
      }

    </div>
  )
}

type HeaderImageLogo = {
  urlImage?:string,
  align?:JustifyContent, 
  componetGrow?:number
}
export const HeaderImageLogo:React.FC<HeaderImageLogo> = ({urlImage,align,componetGrow})=>{

  const [lang, setLang] = useState('');
  useEffect(() => {
    const htmlLang = document.documentElement.getAttribute('lang') || 'it';
    setLang(htmlLang);
  }, []);

  let headerImageLogoGrow;
  let headerImageLogoAlign;
  let headerUrlImage;

  if(urlImage){
    headerUrlImage = urlImage;
  } else {
    headerUrlImage = defaultImg;
  }

  if(align){
    headerImageLogoAlign = {'--header-image-logo-align':align}
  }

  if(componetGrow){
    headerImageLogoGrow={'--header-image-logo-grow': componetGrow}
  }

  let headerImageLogoStyle ={
    ...headerImageLogoAlign,
    ...headerImageLogoGrow
  } as React.CSSProperties;

  return (
    <div id="logo_image" aria-label={description[lang]?.logo?? 'undefined'} className={`${styles.headerImageLogo}`} style={headerImageLogoStyle}> 
      <a href="/" aria-label="Homepage">
        <img src={`${headerUrlImage}`} alt={description[lang]?.alt?? 'undefined'} loading='eager' title='logo image' width={50} height={25}/>
      </a>
    </div>
  )
}



type HeaderHeading = {
  text?:{size?:string,family?:string, color?:string},
  align?:JustifyContent, 
  componetGrow?:number,
  children:ReactNode
};
export const HeaderHeading: React.FC<HeaderHeading> = ({ text, align, componetGrow, children}) => {

  let textStyle;
  let alignStyle;
  let componetGrowStyle;

  if(text){
    textStyle = {'--header-heading-size': text.size,'--header-heading-family':text.family, '--header-heading-color':text.color};
  }

  if(align){
    alignStyle = {'--header-heading-align':align};
  }

  if(componetGrow){
    componetGrowStyle = {'--header-heading-grow':componetGrow};
  }
  
  const headingStyle = {
    ...textStyle,
    ...alignStyle,
    ...componetGrowStyle
  } as React.CSSProperties;

  return(
    <h1 style={headingStyle} className={`${styles.HeaderHeading}`}> {children} </h1>
  )

}