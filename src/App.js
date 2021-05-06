import styled, {ThemeProvider} from "styled-components";
import profile from "./assets/profile.jpg";
import logo from "./assets/google.png";
import menu from "./assets/menu.PNG";
import search from "./assets/search.PNG";
import buttons from "./assets/button.PNG";
import { useState } from "react";

const Container = styled.div`
  background: ${props => props.theme.colors.bgColor};
  color: ${props => props.theme.colors.color};
  height:window-height;
  width:100%;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  height:50px;
  margin-top:3px;
`
const Button = styled.button`
  margin-right:10px;
  border: none;
  outline:none;
  background: ${props => props.theme.colors.bgColor};
  color: ${props => props.theme.colors.color};
`

const Image = styled.button`
  margin-right:10px;
  margin-top:10px;
  border: none;
  outline:none;
  background: ${props => props.theme.colors.bgColor};
`

const Center = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
  padding-bottom: 50vh;
`

const Logo = styled.image`
  width: 270px;
`

const Input = styled.div`
  border: 1px solid lightgray;
  border-radius: 15vw;
  width: 550px;
  margin-top: 3vh;
  padding:5px;
  background:white;
`

const InputConsol = styled.input`
  border: none;
  width:420px;
`

const Row = styled.div`
`

const GrayButton = styled.button`
  background-color: #f8f9fa;
  border:none;
  width:fit-content;
  height:fit-content;
  margin-left: 1vw;
  margin-top: 4vh;
  padding:1vw;
  border-radius: 5px;
`

const FooterWrapper = styled.div`
  display:flex;
  flex-direction:column;
  color:rgba(0,0,0,.54);
  background:#f2f2f2;
  bottom:0;
  position: fixed;
  width: 100%;
`

const Footer1 = styled.div`
  border-bottom:1px solid #dadce0;
  font-size:15px;
  padding: 15px 30px;
`

const Footer2 = styled.div`
  display:flex;
  padding:15px;
  font-size:15px;
  justify-content:space-between;
`

function App() {
  const darkTheme = {
    colors:{
      bgColor: 'black',
      color: 'white'
    }
  }
  const lightTheme = {
    colors: {
      bgColor: 'white',
      color: 'black'
    }
  }
  const [themeMode, setThemeMode] = useState('lightTheme');
  const theme = themeMode === 'lightTheme' ? lightTheme : darkTheme;
  const toggleTheme = () => setThemeMode(themeMode === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Header>
        <Button>Gmail</Button>
        <Button>이미지</Button>
        <Button><img src={menu} style={{ marginTop: "8px" }} /></Button>
        <Image><img src={profile} style={{ borderRadius: "50%" }} /></Image>
        <Button onClick={toggleTheme}>DARK</Button>
      </Header>
      <Center>
        <Logo>
          <img src={logo} />
        </Logo>
        <Input>
          <img src={search}></img>
          <InputConsol></InputConsol>
          <img src={buttons}></img>
        </Input>
        <Row>
          <GrayButton>Google 검색</GrayButton>
          <GrayButton>I'm Feeling Lucky</GrayButton>
        </Row>
      </Center>
      <FooterWrapper>
        <Footer1>대한민국</Footer1>
        <Footer2>
          <div>
            <a href="" style={ {textDecoration: 'none', color: 'gray', marginLeft:'1vw'} }>Google 정보</a>
            <a href="" style={ {textDecoration: 'none', color: 'gray', marginLeft:'3vw'} }>광고</a>
            <a href="" style={ {textDecoration: 'none', color: 'gray', marginLeft:'3vw'} }>비즈니스</a>
            <a href="" style={ {textDecoration: 'none', color: 'gray', marginLeft:'3vw'} }>검색의 원리</a>
          </div>
          <div>
            <a href="" style={ {textDecoration: 'none', color: 'gray', marginLeft:'3vw'} }>개인정보처리방침</a>
            <a href="" style={ {textDecoration: 'none', color: 'gray', marginLeft:'3vw'} }>약관</a>
            <a href="" style={ {textDecoration: 'none', color: 'gray', marginLeft:'3vw'} }>설정</a>
          </div>
        </Footer2>
      </FooterWrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
