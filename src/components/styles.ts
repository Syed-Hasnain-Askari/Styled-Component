import styled from  'styled-components';
import image from '../images/mp02.png';
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
    padding:30px 40px 0px 40px;
`
export const Logo = styled.div`
    display: flex;
    // margin-top:50px;
    // margin-left:50px;
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
    font-family:Roc Grotesk;
    color:#ffffff;
`
export const Button = styled.div`
    width:176px;
    height:61px;
    background-color:#BF5757;
    color:white;
    padding-top:20px;
    font-family:Roc Grotesk;
    text-align:center;
    font-size:12px;
`
export const Section = styled.div`
    margin-top:70px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`
