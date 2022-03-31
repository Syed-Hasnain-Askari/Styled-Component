import * as React from "react"
import section from '../images/section4.png';
import {Section2} from "../components/section2";
import styled from "styled-components";
import {Section} from "../components/section";
// import GloblaStyle from '../global'
import { Footer } from '../components/footer';
import "../components/footer.css";
import { Banner } from "../components/banner";


// markup
const Wrapper:any = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent url(${section})  0% 0% no-repeat padding-box ;
  opacity: 1;
 
`
const IndexPage:React.FC = () => {
  return (
    <main>
      {/* <GloblaStyle/> */}
      <Banner/>
      <Section />
      <Section2/>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage
