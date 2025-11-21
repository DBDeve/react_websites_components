"use client";

import React, { ReactElement,ReactNode,useState,useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Header.module.css';
import {CSSLength} from '../types'


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


type HeaderNavBar ={
  menuData:{pageTitle: string; pagePath: string}[],
  align:'left'|'center'|'right',
  text?:{size:CSSLength, family:string}
  componetGrow?:number,
  enableHover?:boolean,
  enableBorderRight?:boolean
};
export const HeaderNavBar:React.FC<HeaderNavBar> = ({menuData,align,text,componetGrow,enableHover,enableBorderRight})=>{

  const [isVisible, setIsVisible] = useState(false);
  

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsVisible(!isVisible);
  };

  const [lang, setLang] = useState('');
  useEffect(() => {
    const htmlLang = document.documentElement.getAttribute('lang') || 'it';
    setLang(htmlLang);
  }, []);

  const enableHoverClass = enableHover ? styles.hoverEnabled: 'no_hover';

  return(
    <nav id ="navbar" role="navigation" aria-label={description[lang]?.nav?? 'undefined'} style={{ '--componet-Grow': componetGrow,'--font-size':text?.size, '--font-family':text?.family} as React.CSSProperties} className={styles.navbar}>
      <button aria-label={description[lang]?.button?? 'undefined'} className={`${styles.menuMobileBottom}`} onClick={handleClick}>
        {isVisible ? <i className="fas fa-times fa-2x"></i> : <i className="fas fa-bars fa-2x"></i>}
      </button>
      <ul id="desktop_menu" className={`${styles.alignComponent} ${alignMap[align]} ${styles.ul}`} style={{ '--componet-Grow': componetGrow} as React.CSSProperties}>
        {menuData.map((page, index) => (
          <li className={`${styles.il} ${index < menuData.length - 1 && enableBorderRight? styles.borderRight : 'no_borderRight'}`} key={index} >
            {/* creare un variabile per l'inserimeto di colori con contrasti che funzionano universalmente */}
            <a href={`${page.pagePath}`} className={`${enableHoverClass}`}>
              <p className={styles.menuText}>{page.pageTitle}</p>
            </a>
          </li>
        ))}
      </ul>
      <ul id="mobile_menu" className={`${styles.mobileMenu}`} style={{ '--componet-Grow': componetGrow, '--menu-display': isVisible ? 'inherit' : 'none'} as React.CSSProperties}>
        {menuData.map((page, index) => (
          <li className={`${styles.il} ${index < menuData.length - 1 ? styles.borderBottom : 'no_borderRight'}`} key={index} >
            <a href={`${page.pagePath} `} className={`${enableHoverClass}`}>
              <p className={styles.menuText}>{page.pageTitle}</p>
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
  align:'left'|'center'|'right', 
  sizeIcon:string,
  componetGrow?:number,
  enableHover?:boolean,
};
export const HeaderSocialIcons:React.FC<HeaderSocialIcons> = ({iconList,align,componetGrow,enableHover,sizeIcon})=>{

  const [lang, setLang] = useState('');
  useEffect(() => {
    const htmlLang = document.documentElement.getAttribute('lang') || 'it';
    setLang(htmlLang);
  }, []);

  const enableHoverClass = enableHover ? styles.hoverEnabled: 'no_hover';

  return (
    <div id="social_icon" aria-label={description[lang]?.social?? 'undefined'} className={`${styles.alignComponent} ${alignMap[align]}`} style={{ '--componet-Grow': componetGrow,'--icons-size':sizeIcon } as React.CSSProperties}> 
      {iconList.facebook &&
        <a
          href={iconList.facebook.link}
          aria-label="Facebook"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}

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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}

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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
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
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-vimeo fa-lg`}></i>
          <span className={styles.screen_reader_only}>vimeo</span>
        </a>
      }

    </div>
  )
}

type HeaderImageLogo = {urlImage:string,align:'left'|'center'|'right',componetGrow?:number} // GUARDARE IL TAG IMG E CAPIRE PERCHè NON FUNZIONA
export const HeaderImageLogo:React.FC<HeaderImageLogo> = ({urlImage,align,componetGrow})=>{

  const [lang, setLang] = useState('');
  useEffect(() => {
    const htmlLang = document.documentElement.getAttribute('lang') || 'it';
    setLang(htmlLang);
  }, []);

  return (
    <div id="logo_image" aria-label={description[lang]?.logo?? 'undefined'} className={`${styles.alignComponent} ${alignMap[align]}`} style={{ '--componet-Grow': componetGrow } as React.CSSProperties}> 
      <a href="/" aria-label="Homepage">
        <img src={`${urlImage}`} alt={description[lang]?.alt?? 'undefined'} loading='eager' title='logo image' width={50} height={25}/>
      </a>
    </div>
  )
}



type AllowedChild = ReactElement<typeof HeaderImageLogo | typeof HeaderNavBar | typeof HeaderSocialIcons>;

type HeaderProps = {
  children: AllowedChild | AllowedChild[],
  backGroundColor: string,
  padding?: string,
  fixed?: boolean,
  hoverColor?:string
};

export const Header: React.FC<HeaderProps> = ({ children, backGroundColor, padding, fixed, hoverColor }) => {
  
  const positionClass = fixed ? styles.fixed : 'no_fixed';
  /*if (fixed){
    const header = document.querySelector('header');
    const main = document.querySelector('main')
    if(header && main){
      const headerHeight = header.clientHeight;
      header.style.setProperty('--header-height', `${headerHeight}px`);
    }
  }*/

  return (
    <header role="banner" style={{ '--bg-color': backGroundColor,'--hover-color': hoverColor,'--padding':padding } as React.CSSProperties} className={`${styles.header} ${positionClass}` }>
      {children}
    </header>
  );
};