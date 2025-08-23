import React, { ReactElement,ReactNode } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from 'Header.module.css';

// nomi dei componenti dopo const sempre maiuscoli

const alignMap = {
  left: `${styles.justifyLeft}`,
  center: `${styles.justifyCenter}`,
  right: `${styles.justifyRight}`,
};

type NavBar ={menuData:{pageTitle: string; pagePath: string}[],align:'left'|'center'|'right', componetGrow?:number};
export const NavBar:React.FC<NavBar> = ({menuData,align,componetGrow})=>{

  return(
    <nav id ="navbar" role="navigation" aria-label="Navigazione principale" style={{ '--componet-Grow': componetGrow } as React.CSSProperties} className={styles.navbar}>
      <ul className={`${styles.alignComponent} ${alignMap[align]} `} style={{ '--componet-Grow': componetGrow } as React.CSSProperties}>
        {menuData.map((page, index) => (
          <li className={`${styles.il} ${index < menuData.length - 1 ? styles.borderRight : 'no_borderRight'}`} key={index} >
            <a href={`${page.pagePath}`}>
              {page.pageTitle}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

type NavbarIcon = {
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
  componetGrow?:number
};
export const NavBarIcon:React.FC<NavbarIcon> = ({iconList,align,componetGrow})=>{
  return (
    <div id="social_icon" aria-label="icone social" className={`${styles.alignComponent} ${alignMap[align]}`} style={{ '--componet-Grow': componetGrow } as React.CSSProperties}> 
      {iconList.facebook &&
        <a href={iconList.facebook.link} aria-label="Facebook" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-facebook fa-2x"></i>
        </a>
      }
      {iconList.instagram &&
        <a href={iconList.instagram.link} aria-label="Instagram" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      }
      {iconList.twitter &&
        <a href={iconList.twitter.link} aria-label="Twitter" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      }
      {iconList.linkedin &&
        <a href={iconList.linkedin.link} aria-label="LinkedIn" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      }
      {iconList.youtube &&
        <a href={iconList.youtube.link} aria-label="YouTube" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-youtube"></i>
        </a>
      }
      {iconList.tiktok &&
        <a href={iconList.tiktok.link} aria-label="TikTok" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-tiktok"></i>
        </a>
      }
      {iconList.snapchat &&
        <a href={iconList.snapchat.link} aria-label="Snapchat" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-snapchat-ghost"></i>
        </a>
      }
      {iconList.pinterest &&
        <a href={iconList.pinterest.link} aria-label="Pinterest" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-pinterest"></i>
        </a>
      }
      {iconList.reddit &&
        <a href={iconList.reddit.link} aria-label="Reddit" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-reddit"></i>
        </a>
      }
      {iconList.discord &&
        <a href={iconList.discord.link} aria-label="Discord" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-discord"></i>
        </a>
      }
      {iconList.telegram &&
        <a href={iconList.telegram.link} aria-label="Telegram" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-telegram"></i>
        </a>
      }
      {iconList.whatsapp &&
        <a href={iconList.whatsapp.link} aria-label="WhatsApp" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-whatsapp"></i>
        </a>
      }
      {iconList.github &&
        <a href={iconList.github.link} aria-label="GitHub" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-github fa-2x"></i>
        </a>
      }
      {iconList.twitch &&
        <a href={iconList.twitch.link} aria-label="Twitch" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-twitch fa-2x"></i>
        </a>
      }
      {iconList.behance &&
        <a href={iconList.behance.link} aria-label="Behance" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-behance"></i>
        </a>
      }
      {iconList.dribbble &&
        <a href={iconList.dribbble.link} aria-label="Dribbble" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-dribbble"></i>
        </a>
      }
      {iconList.medium &&
        <a href={iconList.medium.link} aria-label="Medium" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-medium"></i>
        </a>
      }
      {iconList.vimeo &&
        <a href={iconList.vimeo.link} aria-label="Vimeo" rel="noopener noreferrer" target="_blank" className={`${styles.touchTarget}`}>
          <i className="fab fa-vimeo"></i>
        </a>
      }
    </div>
  )
}

type NavBarLogo = {urlImage:string,align:'left'|'center'|'right',componetGrow?:number} 
export const NavBarLogo:React.FC<NavBarLogo> = ({urlImage,align,componetGrow})=>{
  return (
    <div id="logo_image" aria-label="immagine logo" className={`${styles.alignComponent} ${alignMap[align]}`} style={{ '--componet-Grow': componetGrow } as React.CSSProperties}> 
      <a href="/" aria-label="Homepage">
        <img src={`${urlImage}`} alt="Logo azienda" width={50} height={25}/>
      </a>
    </div>
  )
}



type AllowedChild = ReactElement<typeof NavBarLogo | typeof NavBar | typeof NavBarIcon>;

type HeaderProps = {
  backGroundColor: string;
  fixed?: boolean;
  children: AllowedChild | AllowedChild[];
};

export const Header: React.FC<HeaderProps> = ({ backGroundColor, fixed, children }) => {
  const positionClass = fixed ? styles.fixed : 'no_fixed';

  return (
    <header role="banner" style={{ '--bg-color': backGroundColor } as React.CSSProperties} className={`${styles.header} ${positionClass}` }>
      {children}
    </header>
  );
};