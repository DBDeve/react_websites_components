"use client";

import React, { ReactElement,ReactNode,useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Header.module.css';

// nomi dei componenti dopo const sempre maiuscoli

const alignMap = {
  left: `${styles.justifyLeft}`,
  center: `${styles.justifyCenter}`,
  right: `${styles.justifyRight}`,
};

type NavBar ={
  menuData:{pageTitle: string; pagePath: string}[],
  align:'left'|'center'|'right',
  textSize?:string,
  componetGrow?:number,
  enableHover?:boolean,
  enableBorderRight?:boolean
};
export const NavBar:React.FC<NavBar> = ({menuData,align, textSize,componetGrow,enableHover,enableBorderRight})=>{
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsVisible(!isVisible);
  };
  const enableHoverClass = enableHover ? styles.hoverEnabled: 'no_hover';

  return(
    <nav id ="navbar" role="navigation" aria-label="Navigazione principale" style={{ '--componet-Grow': componetGrow,'--font-size':textSize } as React.CSSProperties} className={styles.navbar}>
      <button aria-label="Apri menu mobile" className={`${styles.menuMobileBottom}`} onClick={handleClick}>
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

type SocialIcons = {
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
  iconsSize:"small" | "medium" | "large",
  componetGrow?:number,
  enableHover?:boolean,
};
export const SocialIcons:React.FC<SocialIcons> = ({iconList,align,iconsSize,componetGrow,enableHover})=>{

  const enableHoverClass = enableHover ? styles.hoverEnabled: 'no_hover';

  return (
    <div id="social_icon" aria-label="icone social" className={`${styles.alignComponent} ${alignMap[align]}`} style={{ '--componet-Grow': componetGrow } as React.CSSProperties}> 
      {iconList.facebook &&
        <a
          href={iconList.facebook.link}
          aria-label="Facebook"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-facebook ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-instagram ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-twitter ${iconSizeMap[iconsSize]}`}></i>
        </a>
      }
      {iconList.linkedin &&
        <a
          href={iconList.linkedin.link}
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
          className={`${styles.touchTarget} ${styles.alignSocialIcon} ${enableHoverClass}`}
        >
          <i className={`fab fa-linkedin ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-youtube ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-tiktok ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-snapchat-ghost ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-pinterest ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-reddit ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-discord ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-telegram ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-whatsapp ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-github ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-twitch ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-behance ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-dribbble ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-medium ${iconSizeMap[iconsSize]}`}></i>
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
          <i className={`fab fa-vimeo ${iconSizeMap[iconsSize]}`}></i>
        </a>
      }

    </div>
  )
}

type NavBarLogo = {urlImage:string,align:'left'|'center'|'right',componetGrow?:number} // GUARDARE IL TAG IMG E CAPIRE PERCHè NON FUNZIONA
export const NavBarLogo:React.FC<NavBarLogo> = ({urlImage,align,componetGrow})=>{
  return (
    <div id="logo_image" aria-label="immagine logo" className={`${styles.alignComponent} ${alignMap[align]}`} style={{ '--componet-Grow': componetGrow } as React.CSSProperties}> 
      <a href="/" aria-label="Homepage">
        <img src={`${urlImage}`} alt="Logo azienda" width={50} height={25}/>
      </a>
    </div>
  )
}



type AllowedChild = ReactElement<typeof NavBarLogo | typeof NavBar | typeof SocialIcons>;

type HeaderProps = {
  children: AllowedChild | AllowedChild[],
  backGroundColor: string,
  padding?: string,
  fixed?: boolean,
  hoverColor?:string
};

export const Header: React.FC<HeaderProps> = ({ children, backGroundColor, padding, fixed, hoverColor }) => {
  
  const positionClass = fixed ? styles.fixed : 'no_fixed';

  return (
    <header role="banner" style={{ '--bg-color': backGroundColor,'--hover-color': hoverColor,'--padding':padding } as React.CSSProperties} className={`${styles.header} ${positionClass}` }>
      {children}
    </header>
  );
};