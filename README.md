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

<Header backGroundColor="red" fixed hoverColor="blue" padding="1px">
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

```
- header component attr
  - backGroundColor(string): set the background color of the component header. if it isn't insert the value is transparent.
  - fixed?(boolean): if it is insert the header component is fixed.
  - hoverColor(string): set the hover event color.
  - padding? (string): set the top, bottom, right and left padding.

- HeaderNavBar component attr
  - text({size:string,family:string}): set the size and the family of the navBar.
  - enableHover(boolean): enable the hover event.
  - menuData({pageTitle:string,pagePath:string}[]): every json in the array contained the title of menu and the corresponding link.
  - align(string): set the horizontal alignment of the NavBar component. accepted values are left, center, right.
  - componentGrow(number): sets the space occupied by the component in relation to the others.
  - enableBorderRight(boolean): enables an effect that splits the various components of the menu.

- HeaderSocialIcons component attr
  - sizeIcon(string): set the icons size.
  - enableHover: enable the hover event.
  - iconList(json array): every json in the array contained the type of social icon and the link.
  - align(string): set the alignment of the icon group. accepted values are left, center, right.
  - componetGrow(number): sets the space occupied by the component in relation to the others.

- HeaderImageLogo component attr
  - urlImage(string): this path is inserted in the src of the image.
  - align(string): set the alignment of the logo. accepted values are left, center, right.
  - componetGrow(number): sets the space occupied by the component in relation to the others.

### Footer component
```jsx
import {Footer,FooterFlexContent,FooterNavBar} from 'react_websites_components/Footer'
```
```jsx

  <Footer backgroundColor="#666666ff">
    <FooterFlexContent direction="column">
      <FooterFlexContent direction="row">
        <FooterNavBar title={{size:'25px',content:'Company'}} align='center' links={{size:'20px',content:[{linkText:'About Us', linkPath:'/about'},{linkText:'Careers', linkPath:'/careers'},{linkText:'Press', linkPath:'/press'}]}}/>
        <FooterNavBar title={{size:'25px',content:'support'}} align='right' links={{size:'20px',content:[{linkText:'Help Center', linkPath:'/help'},{linkText:'Contact Us', linkPath:'/contact'},{linkText:'Privacy Policy', linkPath:'/privacy'}]}}/>
      </FooterFlexContent>
      <FooterFlexContent>
        <FooterNavBar title={{size:'25px',content:'services'}} align='left' links={{size:'20px',content:[{linkText:'Consulting', linkPath:'/consulting'},{linkText:'Sales', linkPath:'/sales'},{linkText:'Training', linkPath:'/training'}]}}/>
      </FooterFlexContent>
    </FooterFlexContent>
  </Footer>

```
- Footer component attr
  - backgroundColor(string): set background color component.

- FooterFlexContent component attr
  - direction? (FlexDirection): set the direction inside fotter component
  - wrap? (FlexWrap): set the value of wrap
  - alignContent? (AlignContent):
  - justifyContent? (JustifyContent):
  - alignItems? (AlignItems): 

- FooterNavBar component attr
  - title({size?:string,family?:string,content:string}): set the title of the navBar. you can set the size and the family font.
  - align(string): align the content of foterNavBar.
  - links({size?:string,family?:string,content:{linkText: string; linkPath: string}[]}): set the content with relative link. you can set the size and the family font.


### HeroSection component
```jsx
import {HeroSection,HeroHeading,HeroButton,HeroParagraph} from 'react_websites_components/HeroSection'
```
```jsx
<HeroSection mediaType={{type:'image', src:'/p1.jpg'}}>
  <HeroHeading> titolo di prova </HeroHeading>
  <HeroParagraph text={{color:rgba(28, 85, 1, 0.5)}}> paragrafo di <a href="hh">prova</a> </HeroParagraph>
  <HeroButton margin={'20px'}> bottone di prova </HeroButton>
</HeroSection>
```

- HeroSection component attr
  - mediaType({type:string, src:string}): 

- HeroHeading component attr
  - text? ({size?:string, family?:string, color?:string}):
  - margin? (Margin | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin}):

- HeroParagraph component attr
  - text? ({size?:string,family?:string, color?:string}):
  - margin? (Margin | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin}):
  - anchor? ({color?:string}):

- HeroButton component attr
  - padding? ({width?:Padding, color?:string}): 
  - border? ({width?:string, type?:'solid', color?:string, radius?:string}):
  - margin? (Margin | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin}):
  - text? ({size?:string, family?:string, color?:string}):

### Base component
```jsx
import {Button,Paragraph,Heading,Container,Image,Separator,Spacing} from 'react_websites_components/Base'
```
```jsx
<Container type='section' backGround={{color:'green'}} display={{type:'flex', direction:'row', wrap:'wrap', alignItems:'center',justifyContent:'center'}}>
  <Button margin={{width:'20px'}}> bot one di pro </Button>
  <Heading type='h1' margin={{width:'20px'}}> ciao </Heading>
  <Paragraph
    anchor={{color:'red',textDecoration:{line:'underline',color:'red',style:'solid', thickness:'1%'}}} 
    anchorHover={{color:'green',textDecoration:{line:'underline',color:'green',style:'solid', thickness:'1%'}}}>
      paragrafo di <a href="f">prova</a>
  </Paragraph>
</Container>
```

- Container component attr
  - type ('main' | 'section' | 'body' | 'div'): set the type of the tag.
  - margin? ({width?:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin}):
  - border? ({width?:string, type?:'solid', color?:string, radius?:string}):
  - padding? ({width?:Padding} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding}):
  - backGround? ({color?:Color, image?:string, position?:string, size?:string, mode?:BackgroundBlendMode}):
  - display?(display):

- Heading component attr
  - type ('h1'|'h2'|'h3'|'h4'|'h5'|'h6'): set the type of the tag.
  - margin? ({width:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin})
  - font? ({style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string}),
  - color? (Color):

- Paragraph component attr
  - font? ({style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string})
  - anchor?:{
        color?:string,
        textDecoration?:{
            line:TextDecorationLine,
            color:Color,
            style:TextDecorationStyle,
            thickness:TextDecorationThickness
        }
    },
  - anchorHover?:{
        color?:string, 
        textDecoration?:{
            line:TextDecorationLine,
            color:Color,
            style:TextDecorationStyle,
            thickness:TextDecorationThickness
        }
    }, 

- Button component attr
  - href? (string): set href valur of the img tag. the default value is '#'.
  - padding? ({width?:Padding, color?:string} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding, color?:string}):
  - border? ({width?:string, type?:'solid', color?:string, radius?:string})
  - margin? ({width?:Margin} | {top?:string, bottom?:string, right?:string, left?:string})
  - fontText? ({style?:FontStyle, variant?:FontVariant, weight?:FontWeight, stretch?:FontStretch, size?:CSSLength, height?:LineHeight, family?:string, color?:string}):
  - boxShadow? ({offset:string,radius:string,color:string}):

- Image component attr
  - attr? ({src?:string, description?:string, title?:string, height?:number, width?:number}):
  - margin? ({width?:Margin} | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin}):

- separator component attr
  - color? (Color): 
  - margin? (Margin):
  - height? (string):

- spacing component attr
  - height:string

### example use
```jsx
<Container type='body'>

  <Header backGroundColor="red" fixed hoverColor="blue" padding="1px">
    <HeaderNavBar
      text={{size:'20px',family:"Open Sans, sans-serif"}}
      enableHover
      menuData={[{pageTitle:'home',pagePath:'/page1'},{pageTitle:'about us',pagePath:'/page2'},{pageTitle:'work',pagePath:'/page3'}]} 
      align="left"
      componetGrow={3}
    />
    <HeaderSocialIcons enableHover sizeIcon="18px" iconList={{facebook:{link:'https://facebbok'},twitch:{link:'https://twitch'},instagram:{link:'https://twitch'}}}  align={'center'} />
    <HeaderImageLogo urlImage="/file.svg" align='center'/>
  </Header>

  <Container type='main' >

    <HeroSection backGround={{image:"url('/image.jpg')"}}>
      <HeroHeading> titolo di prova </HeroHeading>
      <HeroParagraph text={{color:rgba(28, 85, 1, 0.5)}}> paragrafo di <a href="hh">prova</a> </HeroParagraph>
      <HeroButton margin={'20px'}> bottone di prova </HeroButton>
    </HeroSection>

    <Container type='section' backGround={{color:'green'}} display={{type:'flex', direction:'row', wrap:'wrap', alignItems:'center', justifyContent:'center'}}>
      <Button margin={{width:'20px'}}> bot one di pro </Button>
      <Heading type='h1' margin={{width:'20px'}}> ciao </Heading>
      <Paragraph
        anchor={{color:'red',textDecoration:{line:'underline',color:'red',style:'solid', thickness:'1%'}}} 
        anchorHover={{color:'green',textDecoration:{line:'underline',color:'green',style:'solid', thickness:'1%'}}}>
          paragrafo di <a href="f">prova</a>
      </Paragraph>
    </Container>
  </Container>

  <Footer backgroundColor="#666666ff">
    <FooterFlexContent direction="column">
      <FooterFlexContent direction="row">
        <FooterNavBar title={{content:'Company'}} align='center' links={{content:[{linkText:'About Us', linkPath:'/about'},{linkText:'Careers', linkPath:'/careers'},{linkText:'Press', linkPath:'/press'}]}}/>
        <FooterNavBar title={{content:'support'}} align='right' links={{content:[{linkText:'Help Center', linkPath:'/help'},{linkText:'Contact Us', linkPath:'/contact'},{linkText:'Privacy Policy', linkPath:'/privacy'}]}}/>
      </FooterFlexContent>
      <FooterFlexContent>
        <FooterNavBar title={{content:'services'}} align='left' links={{size:'20px',content:[{linkText:'Consulting', linkPath:'/consulting'},{linkText:'Sales', linkPath:'/sales'},{linkText:'Training', linkPath:'/training'}]}}/>
      </FooterFlexContent>
    </FooterFlexContent>
  </Footer>
</Container>
```