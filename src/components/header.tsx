import React from 'react'
import styled from 'styled-components'
import { Main,Button, Container,Logo,Menu,MenuItem,Section} from './styles';
import logo from '../images/logo.svg';
import union from '../images/Union.png';
import union2 from '../images/union2.png';
import union3 from '../images/union3.png';
import Union4 from '../images/Union4.png'
const h1:any = {
  marginLeft:"50px",
  fontFamily: "roc-grotesk, sans-serif",
  textAlign:"left",
  lineHeight:"73px",
  textShadow: "0px 3px 18px #262B3B",
  color:"white",
  fontSize:"73px",
  marginTop:"120px",
}
const p = {
  color:"white",
}

export const Header:React.FC = () => {
  return (
        <Main>
          <Container>
          <Logo>
            <img src={logo} />
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
          <h1 style={h1}>Wellness apartmány <br></br><span>v podhůří Jeseníků</span></h1>
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
