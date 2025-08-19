import React from "react";
type completeNav = {
    menu: {
        align: "left" | "center" | "right";
    };
    logo: {
        align: "left" | "center" | "right";
    };
    social: {
        align: "left" | "center" | "right";
    };
    backGRoundColor?: string;
    fixed: boolean;
};
type completeNav1 = {
    menu: {
        align: "left" | "center" | "right";
    };
    social: {
        align: "left" | "center" | "right";
    };
    backGRoundColor?: string;
    fixed: boolean;
};
type completeNav2 = {
    menu: {
        align: "left" | "center" | "right";
    };
    logo: {
        align: "left" | "center" | "right";
    };
    backGRoundColor?: string;
    fixed: boolean;
};
type completeNav3 = {
    menu: {
        align: "left" | "center" | "right";
    };
    backGRoundColor?: string;
    fixed: boolean;
};
type BaseProps = {
    menuData: {
        pageTitle: string;
        pagePath: string;
    }[];
};
export declare function createNavBarFactory1(options: completeNav): React.FC<BaseProps & {
    logoImage: {};
    socialIcon: {};
}>;
export declare function createNavBarFactory1(options: completeNav2): React.FC<BaseProps & {
    logoImage: {};
}>;
export declare function createNavBarFactory1(options: completeNav1): React.FC<BaseProps & {
    socialIcon: {};
}>;
export declare function createNavBarFactory1(options: completeNav3): React.FC<BaseProps>;
export {};
