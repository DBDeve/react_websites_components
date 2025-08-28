# React_websites_components

A react library created for developing SEO-friendly websites, compatibile con React 16.8+ e FontAwesome 7.

## 🚀 Installation
```bash
npm install react_websites_components
```

## 📦 Dependencies
This library requires your project to have the following dependencies already installed:

react >= 16.8.0
react-dom >= 16.8.0
@fortawesome/fontawesome-free >= 7.0.0

If you use older versions, you may encounter errors such as useState is not a function.

## 🧪 Esempio di utilizzo
### Header component
```jsx
import {Header,NavBar,NavBarIcon,NavBarLogo} from 'react_websites_components/Header'

function App() {
    <Header backGroundColor="white" fixed>
        <NavBar menuData={[{pageTitle:'page1',pagePath:'/page1'}, {pageTitle:'page2',pagePath:'/page2'},{pageTitle:'page3',pagePath:'/page3'}]} align="left" componetGrow={3} />
        <NavBarIcon iconList={{facebook:{link:'https://facebbok'},twitch:{link:'https://twitch'},instagram:{link:'https://twitch'}}} align={'center'} />
        <NavBarLogo urlImage="/file.svg" align={'right'}/>
    </Header>
}
```
- header component
  - backGroundColor(string): set the background color of the component header. if it isn't insert the value is transparent
  - fixed(boolean): if it'is insert the header component is fixed
