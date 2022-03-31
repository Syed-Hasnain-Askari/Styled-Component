import styled from  'styled-components';
import image from '../../images/mp02.png';
import section from '../../images/section4.png';
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

export const NewButton:any = styled.div`
    border:2px solid white;
    width:200px;
    height:61px;
    color:white;
    padding-top:20px;
    fontFamily: "roc-grotesk, sans-serif";
    text-align:center;
    font-size:12px;
`
export const Section = styled.div`
    margin-top:70px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`

interface Paragraph {
    fontSize: string,
    color: string,
    align:String
  }
export const Paragraph: any = styled.p`
    fontFamily: "roc-grotesk, sans-serif";
    text-align: ${(props:Paragraph)=>props.align ? props.align  : "center"};
    font-size:"18px";
    line-height:"30px";
    font-weight:90px;
    color: ${(props:Paragraph)=>props.color ? props.color  : "#262B3B"};
    @media (max-width: 768px) {
        font-size:18px
      }
`
interface Props {
    fontSize: string,
    color: string,
    align:String
  }
export const Title:any = styled.h1`
font-size:${(props:Props)=>props.fontSize ? props.fontSize : "40px"};
text-align:${(props:Props)=>props.align ? props.align : "center"};
opacity:1;
line-height:34px;
// font-weight:bold;
color: ${(props:Props)=>props.color ? props.color  : "#262B3B"};
font-family: "roc-grotesk, sans-serif",
@media (max-width: 768px) {
     font-size:14px
   }
   @media (max-width: 425px) {
     font-size:14px
   }
`
export const NewWrapper:any = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent url(${`https://res.cloudinary.com/morireality/image/upload/v1648721110/HomePage/section4_mhkupv.png`})  0% 0% no-repeat padding-box ;
    opacity: 1;
`
  export const Wrapper = styled.div`
  width:100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-image:url(${`https://res.cloudinary.com/morireality/image/upload/v1648721114/HomePage/mp02_sfhuut.png`});
  background-size: cover;
  object-fit: contain;
  @media (max-width: 700px) {
      background-position: center center;
  }
`
export const GradientBackground = styled.div`
  width: 100%;
  height: 55vh;
  background: transparent linear-gradient(180deg, #001044 0%, #00145300 100%) 0% 0% no-repeat padding-box;
`
export const BannerTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 4rem;
  color: #fff;
  padding: 0 6rem;
  font-Family: "Roc-Grotesk";
  margin-top: -8rem;
  line-height: 70px;
  position: relative;
  @media (max-width: 1070px) {
      padding: 0 3rem;
      font-size: 3.5rem;
      margin-top: -7.6rem;
      line-height: 60px;       
  }
  @media (max-width: 900px) {
      font-size: 3rem;
      margin-top: -6.5rem;
      line-height: 50px;        
  }
  @media (max-width: 500px) {
      font-size: 2.5rem;        
  }
  @media (max-width: 400px) {
      font-size: 2rem;        
  }
`
export const BottomInfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  @media (max-width: 1070px) {
      padding: 0 3rem;        
  }
  @media (max-width: 900px) {
      bottom: 2rem;        
  }
  @media (max-width: 700px) {
      bottom: 1.5rem;        
  }
  @media (max-width: 500px) {
      bottom: 1rem;        
  }
  @media (max-width: 400px) {
      bottom: .5rem;        
  }
`
export const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem 1rem 0;
`
export const Info = styled.span`
  text-transform: uppercase;
  margin-left: 7px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`
export const TileImage = styled.img`
  height: 54.9px;
  width: 40.04px;
`
export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* background: #F0E8D9; */
  padding: 1rem 6rem;
  @media (max-width: 1070px) {
      padding: 1rem 3rem;
  }
  @media (max-width: 500px) {
      padding: 1rem 1.5rem;
  }
`
export const Logo = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
  @media (max-width: 700px) {
      width: 120px;
      height: 45px;
  }
  @media (max-width: 500px) {
      width: 100px;
      height: 40px;
  }
`

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-family: "roc-grotesk, sans-serif",
  color: #fff;
  @media (max-width: 1070px) {
      display: none;
  }
`
interface MenuItem {
  fontSize: String,
  color: String,
  align:String
}
export const MenuItem = styled.li`
  text-transform: uppercase;
  letter-spacing: 0px;
  margin: 0 13px;
  font-size: ${(props:MenuItem)=>props.fontSize ? props.fontSize : "1rem"};
  font-weight: 600;
  // color: ${(props:MenuItem)=>props.color ? props.fontSize : "#F0E8D9"};
  color: #fff;
  @media (max-width:786px) {
    font-size:14px
  }
`
export const ButtonWrapper = styled.div`
  color: #fff;
`
export const Button = styled.div`
  color: #fff;
  background: #BF5757;
  padding: .55rem 2rem;
  border-radius: 3px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
      padding: .45rem 1.8rem;
  }
  @media (max-width: 500px) {
      padding: .35rem 1rem;
  }
`
export const FooterButton = styled.div`
  color: #fff;
  background: #BF5757;
  border: none;
  outline: none;
  width:176px;
  height:61px;

`
export const ToggleButton = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  margin-right: 2rem; 
  
  @media (max-width: 1070px) {
      display: flex;
  }
`
// sidebar
export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: #fff;
  transition: .5s ease-in-out;
`
export const SidebarMenu = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`
export const CloseToggleButton = styled.div`
  position: relative;
  top: 20px;
  left: 3rem;
`
export const SidebarLogo = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SidebarLogoIcon = styled.img`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: invert(1);
`
export const SidebarLinks = styled.div`
  position: relative;
  margin: 4rem auto 0 auto;
  width: fit-content;
  text-align: center;
`
export const SidebarUL = styled.ul`
  list-style: none;
  text-transform: capitalize;
`
export const SidebarLink = styled.li`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 20px 0;
  width: fit-content;
  color: #000;
  position: relative;
`
