# React_websites_components

A react library created for developing SEO-friendly websites, compatibile con React 16.8+ e FontAwesome 7.

## 🚀 Installation
```bash
npm install react_websites_components
```

## 📦 Dependencies
This library requires your project to have the following dependencies installed:

- react >= 16.8.0
- react-dom >= 16.8.0
- @fortawesome/fontawesome-free >= 7.0.0

If you use older versions, you may encounter errors such as useState is not a function.

## 🧪 examples of use
### Header component
```jsx
import {HeaderNavBar,HeaderSocialIcons,HeaderImageLogo,Header} from 'react_websites_components/Header'
```
```jsx
function App() {
  <Header backGroundColor="red" fixed hoverColor="blue">
    <HeaderNavBar
      text={{size:'20px',family:"Open Sans, sans-serif"}}
      enableHover
      menuData={[{pageTitle:'home',pagePath:'/page1'},{pageTitle:'about us',pagePath:'/page2'},{pageTitle:'work',pagePath:'/page3'}]}
      align="left"
      componetGrow={3}
    />
    <HeaderSocialIcons 
      enableHover
      sizeIcon="18px"
      iconList={{facebook:{link:'https://facebbok'},twitch:{link:'https://twitch'},instagram:{link:'https://twitch'}}}
      align={'center'}
    />
    <HeaderImageLogo urlImage="/file.svg" align={'right'}/>
  </Header>
}
```
- header component
  - hoverColor(string): set the hover event color.
  - backGroundColor(string): set the background color of the component header. if it isn't insert the value is transparent
  - fixed(boolean): if it is insert the header component is fixed

- NavBar component
  - text({size:string,family:string}): set the size and the family of the navBar.
  - enableHover(boolean): enable the hover event.
  - menuData(json array): every json in the array contained the title of menu and the corresponding link.
  - align(string): set the horizontal alignment of the NavBar component. accepted values are left, center, right.
  - componentGrow(number): sets the space occupied by the component in relation to the others.

- NavBarIcon
  - sizeIcon(string): set the icons size.
  - enableHover: enable the hover event.
  - iconList(json array): every json in the array contained the type of social icon and the link
  - align(string): set the alignment of the icon group. accepted values are left, center, right

- NavBarLogo
  - urlImage(string): this path is inserted in the src of the image
  - align(string): set the alignment of the logo. accepted values are left, center, right

### Footer component
```jsx
import {Footer,FooterNavBar,FooterRow} from 'react_websites_components/Footer'
```
```jsx
function App() {
  <Footer backgroundColor="#666666ff">
    <FooterRow align="center">
      <FooterNavBar title={{content:'Company'}} align='center' links={{content:[{linkText:'About Us', linkPath:'/about'},{linkText:'Careers', linkPath:'/careers'},{linkText:'Press', linkPath:'/press'}]}}/>
      <FooterNavBar title={{content:'support'}} align='right' links={{content:[{linkText:'Help Center', linkPath:'/help'},{linkText:'Contact Us', linkPath:'/contact'},{linkText:'Privacy Policy', linkPath:'/privacy'}]}}/>
    </FooterRow>
    <FooterRow align="left">
      <FooterNavBar title={{content:'services'}} align='left' links={{content:[{linkText:'Consulting', linkPath:'/consulting'},{linkText:'Sales', linkPath:'/sales'},{linkText:'Training', linkPath:'/training'}]}}/>
    </FooterRow>
  </Footer>
}
```
- Footer component
  - backgroundColor(string): set background color component.

- FooterRow component
  - align(string): set the row align

- FooterNavBar component
  - title({size?:string,family?:string,content:string}): set the title of the navBar. you can set the size and the family font.
  - align(string): align the content of foterNavBar.
  - links({size?:string,family?:string,content:{linkText: string; linkPath: string}[]}): set the content with relative link. you can set the size and the family font.