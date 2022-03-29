import React from 'react'
import { Main,Button, Container,Logo,Menu,MenuItem,Section} from './styles';
import logo from '../images/logo.svg';
import union from '../images/Union.png';
import union2 from '../images/union2.png';
import union3 from '../images/union3.png';
import Union4 from '../images/Union4.png'
const h1 = {
  marginLeft:"50px",
  fontFamily:"Roc Grotesk, Wide Medium",
  textAlign:"left",
  lineHeight:"73px",
  textShadow: "0px 3px 18px #262B3B",
  color:"white",
  fontSize:"73px",
  marginTop:"120px"
}
const p = {
  color:"white",
}
export default function Header() {
  return (
        <Main>
          <Container>
          <Logo>
            <img src={logo}></img>
          </Logo>
            <Menu>
              <MenuItem>APARTMÁNY</MenuItem>
              <MenuItem>APARTMÁNY</MenuItem>
              <MenuItem>OKOLÍ</MenuItem>
              <MenuItem>BISTRO</MenuItem>
              <MenuItem>BISTRO</MenuItem>
              <MenuItem>DÁRKOVÉ POUKAZY</MenuItem>
              <MenuItem>DÁRKOVÉ POUKAZY</MenuItem>
              <MenuItem>FOTOGALERIE</MenuItem>
              <MenuItem>KONTAKT</MenuItem>
            </Menu>
            <Button>Hey</Button>
        </Container>
          <h1 style={h1}>Wellness apartmány <br></br><span style={{color:"#F0E8D9"}}>v podhůří Jeseníků</span></h1>
          <Section>
            <div>
            <img src={union}></img>
            <p style={p}>asdsdsd</p>
            </div>
            <div>
            <img src={union2}></img>
            <p style={p}>asdsdsd</p>
            </div>
            <div>
            <img src={union3} width="49px" height="65px"></img>
            <p style={p}>asdsdsd</p>
            </div>
            <div>
            <span><img src={Union4}></img></span>
            <span style={p}><p>asdsdsd</p></span>
            </div>
          </Section>
        </Main>
  )
}
