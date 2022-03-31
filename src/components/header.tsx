import React, { useState,useEffect } from 'react'
import { Navbar, Logo, LogoImage, Menu, MenuItem, ButtonWrapper, Button,ToggleButton, SideBar, SidebarMenu, CloseToggleButton, SidebarLogo, SidebarLogoIcon, SidebarLinks, SidebarUL,SidebarLink} from './stylecomponent/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../images/logo.svg';
import '../globalstyle.css'

function Header() {
  const [open, setOpen] = useState(false);
  
  const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 120) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);
  return (
    <>
      <Navbar className={`${show && 'nav__scroll'}`}>
          <Logo>
            <ToggleButton onClick={() => setOpen(!open)}>
              <MenuIcon></MenuIcon>
            </ToggleButton>
            <LogoImage src={logo} className="logo"/>
          </Logo>
          <Menu className="menu">
            <MenuItem>appartment</MenuItem>
            <MenuItem>wellness</MenuItem>
            <MenuItem>okila</MenuItem>
            <MenuItem>ahdy</MenuItem>
            <MenuItem>reservaton</MenuItem>
            <MenuItem>sffhsva</MenuItem>
            <MenuItem>hetye</MenuItem>
          </Menu>
          <ButtonWrapper>
            <Button>feasibility</Button>
          </ButtonWrapper>
        </Navbar>
        <SideBar style={{ left: open ? "0" : "-100%"}}>
          <SidebarMenu>
            <CloseToggleButton>
              <CloseIcon></CloseIcon>
            </CloseToggleButton>
            <SidebarLogo onClick={() => setOpen(false)}>
              <SidebarLogoIcon src={logo} />
            </SidebarLogo>
            <SidebarLinks>
              <SidebarUL>
                <SidebarLink>appartment</SidebarLink>
                <SidebarLink>appartment</SidebarLink>
                <SidebarLink>appartment</SidebarLink>
                <SidebarLink>appartment</SidebarLink>
                <SidebarLink>appartment</SidebarLink>
                <SidebarLink>appartment</SidebarLink>
                <SidebarLink>appartment</SidebarLink>
              </SidebarUL>
            </SidebarLinks>
          </SidebarMenu>
        </SideBar>
    </>
  )
}

export default Header