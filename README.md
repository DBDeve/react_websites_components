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
import {HeaderNavBar,HeaderSocialIcons,HeaderImageLogo,HeaderHeading,Header} from 'react_websites_components/Header'
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
  <HeaderHeading> titolo </HeaderHeading>
</Header>

```
- header component attr
  - backGroundColor(string): set the background color of the component header. if it isn't insert the value is transparent.
  - fixed?(boolean): if it is insert the header component is fixed.
  - hoverColor(string): set the hover event color.
  - padding? ({all?:Padding} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding}): set the top, bottom, right and left padding.

- HeaderNavBar component attr
  - nav?:{componetGrow?:number, text?:{size:CSSLength, family:string}},
  - desktopMenu?:{align?:JustifyContent}
  - mobileMenu?:{align?:JustifyContent}
  - enableHover(boolean): enable the hover event.
  - menuData({pageTitle:string,pagePath:string}[]): every json in the array contained the title of menu and the corresponding link.

- HeaderSocialIcons component attr
  - sizeIcon(string): set the icons size.
  - enableHover(boolean): enable the hover event.
  - iconList(json array): every json in the array contained the type of social icon and the link.
  - align?(JustifyContent): set the alignment of the icon group. accepted values are left, center, right.
  - componetGrow(number): sets the space occupied by the component in relation to the others.

- HeaderHeading component attr
  text?({size?:string,family?:string, color?:string}).
  align?(JustifyContent). 
  componetGrow?(number).

- HeaderImageLogo component attr
  - urlImage(string): this path is inserted in the src of the image.
  - align(JustifyContent): set the alignment of the logo. accepted values are left, center, right.
  - componetGrow(number): sets the space occupied by the component in relation to the others.

### Footer component
```jsx
import {Footer,FooterFlexContent,FooterNavBar} from 'react_websites_components/Footer'
```
```jsx

  <Footer backgroundColor="#666666ff">
    <FooterContainer direction="column">
      <FooterContainer justifyContent="center">
        <FooterNavBar 
          title={{content:'Company'}} 
          list={{ content:[{linkText:'About Us', linkPath:'/about'},{linkText:'Careers', linkPath:'/careers'},{linkText:'Press', linkPath:'/press'}]}}
          flexStyle={{alignItems:'flex-start'}}
        />
        <FooterNavBar 
          title={{content:'support'}} 
          list={{content:[{linkText:'Help Center', linkPath:'/help'},{linkText:'Contact Us', linkPath:'/contact'},{linkText:'Privacy Policy', linkPath:'/privacy'}]}}/>
        <FooterNavBar 
          title={{content:'seeeeeeeee'}} 
          list={{ content:[{linkText:'Consulting', linkPath:'/consulting'},{linkText:'Sales', linkPath:'/sales'},{linkText:'Training', linkPath:'/training'}]}}
          flexStyle={{alignItems:'flex-end'}}
        />
      </FooterContainer>
      <FooterContainer justifyContent="flex-end">
        <FooterNavBar 
          list={{ content:[{linkText:'Consul', linkPath:'/consulting'},{linkText:'Sales', linkPath:'/sales'},{linkText:'Training', linkPath:'/training'}]}}
          flexStyle={{direction:'row'}}
        />
      </FooterContainer>
    </FooterContainer>
  </Footer>

```
- Footer component attr
  - backgroundColor(string): set background color component.

- FooterContainer component attr
  - direction? (FlexDirection): set the direction inside fotter component
  - wrap? (FlexWrap): set the value of wrap
  - alignContent? (AlignContent):
  - justifyContent? (JustifyContent):
  - alignItems? (AlignItems): 

- FooterNavBar component attr
  - title? ({size?:string,family?:string,content:string}): set the title of the navBar. you can set the size and the family font.
  - list ({size?:string, family?:string, content:{linkText: string; linkPath: string}[]}): set the content with relative link. you can set the size and the family font.
  - flexStyle? ({direction?: FlexDirection, justifyContent?: JustifyContent, alignItems?: AlignItems}): set the flexstyle of footer.


### HeroSection component
```jsx
import {HeroSection,HeroHeading,HeroButton,HeroParagraph,HeroContainer} from 'react_websites_components/HeroSection'
```
```jsx
<HeroSection backGround={{image:"/p1.jpg"}}>
  <HeroContainer flexSetting={{direction:"column",alignItems: "flex-start"}}>
    <HeroHeading> titolo di prova </HeroHeading>
    <HeroParagraph> paragrafo di prova lupus </HeroParagraph>
    <HeroContainer flexSetting={{direction:"row", justifyContent: "flex-start"}}>
      <HeroButton> bottone di prova </HeroButton>
      <HeroButton> bottone di prova </HeroButton>
    </HeroContainer>
  </HeroContainer>
</HeroSection>
```

- HeroSection component attr
  - backGround?:{color?:Color, image?:string, position?:string, size?:string, mode?:BackgroundBlendMode},
  - padding?:{all?:Padding} | {top?:Padding, bottom?:Padding, right?:Padding, left?:Padding},
  - height?:{mobile?:CSSLength, desktop?:CSSLength},

- HeroHeading component attr
  - text? ({size?:string, family?:string, color?:string}):
  - margin? (margin?:Margin | {top?:Margin, bottom?:Margin, right?:Margin, left?:Margin}):

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
<Container type='section' display={{type:'flex', direction:'row'}} margin={{width:'20px'}}>
  <Image attr={{description:"prova", width:600, height:600}}/>
  <Container type='section' display={{type:'flex', gap:'0px', direction:'column', alignItems:'center'}}>
    <Heading type='h2' font={{size:'40px'}}> titolo di prova </Heading>
    <Paragraph
      anchor={{color:'red',textDecoration:{line:'underline',color:'red',style:'solid', thickness:'1%'}}} 
      anchorHover={{color:'green',textDecoration:{line:'underline',color:'green',style:'solid', thickness:'1%'}}}>
        Lorem <a href="link_prova"> ipsum </a>dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
    </Paragraph>
    <Button href="/provaaaa" margin={{width:'20px'}}> bottone di prova </Button>
  </Container>
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

  <Header hoverColor="red">
    <HeaderNavBar
      enableHover
      menuData={[{pageTitle:'home',pagePath:'/page1'},{pageTitle:'about us',pagePath:'/page2'},{pageTitle:'work',pagePath:'/page3'}]}
    />
    <HeaderSocialIcons iconList={{facebook:{link:'https://facebbok'},twitch:{link:'https://twitch'},instagram:{link:'https://twitch'}}} />
    <HeaderHeading> titolo </HeaderHeading>
    <HeaderImageLogo/>
  </Header>

  <Container type='main'>

    <HeroSection backGround={{image:"/p1.jpg"}}>
      <HeroContainer flexSetting={{direction:"column",alignItems: "flex-start"}}>
        <HeroHeading> Hello World </HeroHeading>
        <HeroParagraph> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet </HeroParagraph>
        <HeroContainer margin={{top:'15px'}} flexSetting={{direction:"row", justifyContent: "flex-start"}}>
          <HeroButton> first button </HeroButton>
          <HeroButton> second button </HeroButton>
        </HeroContainer>
      </HeroContainer>
    </HeroSection>

    <Container type='section' display={{type:'flex', direction:'row', wrap:'wrap', justifyContent:'center'}} margin={{width:'20px'}}>
      <Image attr={{description:"prova", width:600, height:600}}/>
      <Container type='section' display={{type:'flex', gap:'0px', direction:'column', wrap:'wrap', alignItems:'center'}}>
        <Heading type='h2' font={{size:'40px'}}> titolo di prova </Heading>
        <Paragraph
          anchor={{color:'red',textDecoration:{line:'underline',color:'red',style:'solid', thickness:'1%'}}}
          anchorHover={{color:'green',textDecoration:{line:'underline',color:'green',style:'solid', thickness:'1%'}}}>
            Lorem <a href="link_prova"> ipsum </a> dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
        </Paragraph>
        <Button href="/provaaaa" margin={{width:'20px'}}> bottone di prova </Button>
      </Container>
    </Container>
  </Container>

  <Footer backgroundColor="#666666ff">
    <FooterContainer direction="column">
      <FooterContainer justifyContent="center">
        <FooterNavBar 
          title={{content:'Company'}} 
          list={{ content:[{linkText:'About Us', linkPath:'/about'},{linkText:'Careers', linkPath:'/careers'},{linkText:'Press', linkPath:'/press'}]}}
          flexStyle={{alignItems:'flex-start'}}
        />
        <FooterNavBar 
          title={{content:'support'}} 
          list={{content:[{linkText:'Help Center', linkPath:'/help'},{linkText:'Contact Us', linkPath:'/contact'},{linkText:'Privacy Policy', linkPath:'/privacy'}]}}/>
        <FooterNavBar 
          title={{content:'about us'}} 
          list={{ content:[{linkText:'Consulting', linkPath:'/consulting'},{linkText:'Sales', linkPath:'/sales'},{linkText:'Training', linkPath:'/training'}]}}
          flexStyle={{alignItems:'flex-end'}}
        />
      </FooterContainer>
      <FooterContainer justifyContent="center">
        <FooterNavBar 
          list={{ content:[{linkText:'Our story', linkPath:'/Our story'},{linkText:'Partners', linkPath:'/Partners'},{linkText:'Team', linkPath:'/Team'}]}}
          flexStyle={{direction:'row'}}
        />
      </FooterContainer>
    </FooterContainer>
  </Footer>
</Container>
```