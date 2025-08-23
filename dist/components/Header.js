import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Header.module.css';
// nomi dei componenti dopo const sempre maiuscoli
const alignMap = {
    left: `${styles.justifyLeft}`,
    center: `${styles.justifyCenter}`,
    right: `${styles.justifyRight}`,
};
export const NavBar = ({ menuData, align, componetGrow }) => {
    return (_jsx("nav", { id: "navbar", role: "navigation", "aria-label": "Navigazione principale", style: { '--componet-Grow': componetGrow }, className: styles.navbar, children: _jsx("ul", { className: `${styles.alignComponent} ${alignMap[align]} `, style: { '--componet-Grow': componetGrow }, children: menuData.map((page, index) => (_jsx("li", { className: `${styles.il} ${index < menuData.length - 1 ? styles.borderRight : 'no_borderRight'}`, children: _jsx("a", { href: `${page.pagePath}`, children: page.pageTitle }) }, index))) }) }));
};
export const NavBarIcon = ({ iconList, align, componetGrow }) => {
    return (_jsxs("div", { id: "social_icon", "aria-label": "icone social", className: `${styles.alignComponent} ${alignMap[align]}`, style: { '--componet-Grow': componetGrow }, children: [iconList.facebook &&
                _jsx("a", { href: iconList.facebook.link, "aria-label": "Facebook", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-facebook fa-2x" }) }), iconList.instagram &&
                _jsx("a", { href: iconList.instagram.link, "aria-label": "Instagram", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-instagram fa-2x" }) }), iconList.twitter &&
                _jsx("a", { href: iconList.twitter.link, "aria-label": "Twitter", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-twitter fa-2x" }) }), iconList.linkedin &&
                _jsx("a", { href: iconList.linkedin.link, "aria-label": "LinkedIn", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-linkedin fa-2x" }) }), iconList.youtube &&
                _jsx("a", { href: iconList.youtube.link, "aria-label": "YouTube", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-youtube" }) }), iconList.tiktok &&
                _jsx("a", { href: iconList.tiktok.link, "aria-label": "TikTok", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-tiktok" }) }), iconList.snapchat &&
                _jsx("a", { href: iconList.snapchat.link, "aria-label": "Snapchat", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-snapchat-ghost" }) }), iconList.pinterest &&
                _jsx("a", { href: iconList.pinterest.link, "aria-label": "Pinterest", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-pinterest" }) }), iconList.reddit &&
                _jsx("a", { href: iconList.reddit.link, "aria-label": "Reddit", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-reddit" }) }), iconList.discord &&
                _jsx("a", { href: iconList.discord.link, "aria-label": "Discord", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-discord" }) }), iconList.telegram &&
                _jsx("a", { href: iconList.telegram.link, "aria-label": "Telegram", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-telegram" }) }), iconList.whatsapp &&
                _jsx("a", { href: iconList.whatsapp.link, "aria-label": "WhatsApp", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-whatsapp" }) }), iconList.github &&
                _jsx("a", { href: iconList.github.link, "aria-label": "GitHub", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-github fa-2x" }) }), iconList.twitch &&
                _jsx("a", { href: iconList.twitch.link, "aria-label": "Twitch", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-twitch fa-2x" }) }), iconList.behance &&
                _jsx("a", { href: iconList.behance.link, "aria-label": "Behance", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-behance" }) }), iconList.dribbble &&
                _jsx("a", { href: iconList.dribbble.link, "aria-label": "Dribbble", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-dribbble" }) }), iconList.medium &&
                _jsx("a", { href: iconList.medium.link, "aria-label": "Medium", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-medium" }) }), iconList.vimeo &&
                _jsx("a", { href: iconList.vimeo.link, "aria-label": "Vimeo", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: _jsx("i", { className: "fab fa-vimeo" }) })] }));
};
export const NavBarLogo = ({ urlImage, align, componetGrow }) => {
    return (_jsx("div", { id: "logo_image", "aria-label": "immagine logo", className: `${styles.alignComponent} ${alignMap[align]}`, style: { '--componet-Grow': componetGrow }, children: _jsx("a", { href: "/", "aria-label": "Homepage", children: _jsx("img", { src: `${urlImage}`, alt: "Logo azienda", width: 50, height: 25 }) }) }));
};
export const Header = ({ backGroundColor, fixed, children }) => {
    const positionClass = fixed ? styles.fixed : 'no_fixed';
    return (_jsx("header", { role: "banner", style: { '--bg-color': backGroundColor }, className: `${styles.header} ${positionClass}`, children: children }));
};
