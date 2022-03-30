import styled from  'styled-components';
import image from '../images/mp02.png';
import logo from '../images/logo.svg';
export const Main = styled.div`
    width:100%;
    height:584px;
    background:no-repeat padding-box transparent linear-gradient(180deg, #001044 0%, #00145300 100%);
    background-image:url(${image});
    background-size:cover;
    opacity:1;
`
export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items: center;
    padding:30px 40px 0px 40px;
`
export const Logo = styled.div`
    display: flex;
    width:206px;
    height:72px;
`
export const Menu = styled.div`
    display: flex;
    justify-content:flex-end;
`
export const MenuItem = styled.div`
    margin-top:20px;
    list-style: none;
    padding:10px;
    transform:upper-case;
    font-size:12px;
    fontFamily: "roc-grotesk, sans-serif",
    color:white;
`
export const Button = styled.div`
    width:176px;
    height:61px;
    background-color:#BF5757;
    color:white;
    padding-top:20px;
    fontFamily: "roc-grotesk, sans-serif",
    text-align:center;
    font-size:12px;
`
export const Section = styled.div`
    margin-top:70px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
export const Paragraph: any = styled.p`
    marginLeft:"40px",
    textAlign:"center",
    fontSize:"18px",
    lineHeight:"30px",
`
export const Heading: any = styled.h1`
    marginTop:"80px",
    textAlign:"center",
    color:"#262B3B",
    fontSize:"60px",
    fontStyle:"bold",
    fontFamily: "roc-grotesk, sans-serif",
`
        

