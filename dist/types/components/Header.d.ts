import React, { ReactElement } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
type NavBar = {
    menuData: {
        pageTitle: string;
        pagePath: string;
    }[];
    align: 'left' | 'center' | 'right';
    componetGrow?: number;
};
export declare const NavBar: React.FC<NavBar>;
type NavbarIcon = {
    iconList: {
        facebook?: {
            link: string;
        };
        instagram?: {
            link: string;
        };
        twitter?: {
            link: string;
        };
        linkedin?: {
            link: string;
        };
        youtube?: {
            link: string;
        };
        tiktok?: {
            link: string;
        };
        snapchat?: {
            link: string;
        };
        pinterest?: {
            link: string;
        };
        reddit?: {
            link: string;
        };
        tumblr?: {
            link: string;
        };
        threads?: {
            link: string;
        };
        whatsapp?: {
            link: string;
        };
        telegram?: {
            link: string;
        };
        discord?: {
            link: string;
        };
        twitch?: {
            link: string;
        };
        github?: {
            link: string;
        };
        behance?: {
            link: string;
        };
        dribbble?: {
            link: string;
        };
        vimeo?: {
            link: string;
        };
        medium?: {
            link: string;
        };
        mastodon?: {
            link: string;
        };
        soundcloud?: {
            link: string;
        };
        spotify?: {
            link: string;
        };
        wechat?: {
            link: string;
        };
        qq?: {
            link: string;
        };
        vk?: {
            link: string;
        };
        line?: {
            link: string;
        };
    };
    align: 'left' | 'center' | 'right';
    componetGrow?: number;
};
export declare const NavBarIcon: React.FC<NavbarIcon>;
type NavBarLogo = {
    urlImage: string;
    align: 'left' | 'center' | 'right';
    componetGrow?: number;
};
export declare const NavBarLogo: React.FC<NavBarLogo>;
type AllowedChild = ReactElement<typeof NavBarLogo | typeof NavBar | typeof NavBarIcon>;
type HeaderProps = {
    backGroundColor: string;
    fixed?: boolean;
    children: AllowedChild | AllowedChild[];
};
export declare const Header: React.FC<HeaderProps>;
export {};
