import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function createNavBar(navBar) {
    const alignMap = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end',
    };
    const ReactComponent = ({ menuData, socialIcon, logoImage }) => {
        console.log(menuData);
        console.log("navbar", navBar);
        return (_jsxs("div", { style: Object.assign(Object.assign(Object.assign({ display: 'inline-flex', width: '100%' }, (navBar.fixed === true ? { position: 'fixed' } : {})), { padding: '10px' }), (navBar.backGRoundColor === undefined ? {} : { backgroundColor: navBar.backGRoundColor })), children: [_jsx("div", { id: "menu", style: { flex: '2', display: 'inline-flex', justifyContent: alignMap[navBar.menu.align] }, children: menuData.map((page, index) => (_jsx("span", { style: { padding: '0.9%', borderRight: index < menuData.length - 1 ? '1px solid gray' : 'none', }, children: _jsx("a", { href: `${page.pagePath}`, style: { textDecoration: 'none', color: 'inherit' }, children: page.pageTitle }) }, index))) }), 'social' in navBar && (_jsx("div", { id: "social", style: {
                        flex: '1',
                        display: 'inline-flex',
                        justifyContent: alignMap[navBar.social.align]
                    }, children: "social" })), _jsx("div", { id: "logo", style: { flex: '1', textAlign: 'center' }, children: " logo " })] }));
    };
    return ReactComponent;
}
export function createNavBarFactory1(options) {
    const { menu, logo, social, fixed, backGRoundColor } = options;
    if (logo && social) {
        const navbar = { menu, logo, social, fixed, backGRoundColor };
        return createNavBar(navbar);
    }
    else if (logo) {
        const navbar = { menu, logo, fixed, backGRoundColor };
        return createNavBar(navbar);
    }
    else if (social) {
        const navbar = { menu, social, fixed, backGRoundColor };
        return createNavBar(navbar);
    }
    else {
        const navbar = { menu, fixed, backGRoundColor };
        return createNavBar(navbar);
    }
}
