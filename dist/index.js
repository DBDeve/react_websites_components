import { jsx, jsxs } from 'react/jsx-runtime';

var styles = {"header":"Header-module_header__t8Q7Q","fixed":"Header-module_fixed__wrDcx","navbar":"Header-module_navbar__HYXZF","alignComponent":"Header-module_alignComponent__NTGVP","justifyLeft":"Header-module_justifyLeft__Dwmru","justifyCenter":"Header-module_justifyCenter__G-MUM","justifyRight":"Header-module_justifyRight__X5AdI","il":"Header-module_il__4UTfC","borderRight":"Header-module_borderRight__nxy2X","touchTarget":"Header-module_touchTarget__6AsQz"};

// nomi dei componenti dopo const sempre maiuscoli
const alignMap = {
    left: `${styles.justifyLeft}`,
    center: `${styles.justifyCenter}`,
    right: `${styles.justifyRight}`,
};
const NavBar = ({ menuData, align, componetGrow }) => {
    return (jsx("nav", { id: "navbar", role: "navigation", "aria-label": "Navigazione principale", style: { '--componet-Grow': componetGrow }, className: styles.navbar, children: jsx("ul", { className: `${styles.alignComponent} ${alignMap[align]} `, style: { '--componet-Grow': componetGrow }, children: menuData.map((page, index) => (jsx("li", { className: `${styles.il} ${index < menuData.length - 1 ? styles.borderRight : 'no_borderRight'}`, children: jsx("a", { href: `${page.pagePath}`, children: page.pageTitle }) }, index))) }) }));
};
const NavBarIcon = ({ iconList, align, componetGrow }) => {
    return (jsxs("div", { id: "social_icon", "aria-label": "icone social", className: `${styles.alignComponent} ${alignMap[align]}`, style: { '--componet-Grow': componetGrow }, children: [iconList.facebook &&
                jsx("a", { href: iconList.facebook.link, "aria-label": "Facebook", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-facebook fa-2x" }) }), iconList.instagram &&
                jsx("a", { href: iconList.instagram.link, "aria-label": "Instagram", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-instagram fa-2x" }) }), iconList.twitter &&
                jsx("a", { href: iconList.twitter.link, "aria-label": "Twitter", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-twitter fa-2x" }) }), iconList.linkedin &&
                jsx("a", { href: iconList.linkedin.link, "aria-label": "LinkedIn", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-linkedin fa-2x" }) }), iconList.youtube &&
                jsx("a", { href: iconList.youtube.link, "aria-label": "YouTube", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-youtube" }) }), iconList.tiktok &&
                jsx("a", { href: iconList.tiktok.link, "aria-label": "TikTok", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-tiktok" }) }), iconList.snapchat &&
                jsx("a", { href: iconList.snapchat.link, "aria-label": "Snapchat", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-snapchat-ghost" }) }), iconList.pinterest &&
                jsx("a", { href: iconList.pinterest.link, "aria-label": "Pinterest", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-pinterest" }) }), iconList.reddit &&
                jsx("a", { href: iconList.reddit.link, "aria-label": "Reddit", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-reddit" }) }), iconList.discord &&
                jsx("a", { href: iconList.discord.link, "aria-label": "Discord", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-discord" }) }), iconList.telegram &&
                jsx("a", { href: iconList.telegram.link, "aria-label": "Telegram", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-telegram" }) }), iconList.whatsapp &&
                jsx("a", { href: iconList.whatsapp.link, "aria-label": "WhatsApp", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-whatsapp" }) }), iconList.github &&
                jsx("a", { href: iconList.github.link, "aria-label": "GitHub", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-github fa-2x" }) }), iconList.twitch &&
                jsx("a", { href: iconList.twitch.link, "aria-label": "Twitch", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-twitch fa-2x" }) }), iconList.behance &&
                jsx("a", { href: iconList.behance.link, "aria-label": "Behance", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-behance" }) }), iconList.dribbble &&
                jsx("a", { href: iconList.dribbble.link, "aria-label": "Dribbble", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-dribbble" }) }), iconList.medium &&
                jsx("a", { href: iconList.medium.link, "aria-label": "Medium", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-medium" }) }), iconList.vimeo &&
                jsx("a", { href: iconList.vimeo.link, "aria-label": "Vimeo", rel: "noopener noreferrer", target: "_blank", className: `${styles.touchTarget}`, children: jsx("i", { className: "fab fa-vimeo" }) })] }));
};
const NavBarLogo = ({ urlImage, align, componetGrow }) => {
    return (jsx("div", { id: "logo_image", "aria-label": "immagine logo", className: `${styles.alignComponent} ${alignMap[align]}`, style: { '--componet-Grow': componetGrow }, children: jsx("a", { href: "/", "aria-label": "Homepage", children: jsx("img", { src: `${urlImage}`, alt: "Logo azienda", width: 50, height: 25 }) }) }));
};
const Header = ({ backGroundColor, fixed, children }) => {
    const positionClass = fixed ? styles.fixed : 'no_fixed';
    return (jsx("header", { role: "banner", style: { '--bg-color': backGroundColor }, className: `${styles.header} ${positionClass}`, children: children }));
};

export { Header, NavBar, NavBarIcon, NavBarLogo };
//# sourceMappingURL=index.js.map
