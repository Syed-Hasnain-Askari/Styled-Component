import * as React from "react";
import { Title, Heading } from "./stylecomponent/styles";
import styled from "styled-components";
import InfoTile from "./InfoTile";
import union1 from "../images/Union 4.svg";
import union2 from "../images/Union 5.svg";
import union3 from "../images/Union 6.svg";
import union4 from "../images/Union 7.svg";

const main: any = {
  maxHeight: "1000px",
  paddingBottom: "100px",
  paddingTop: "70px",
  background: "#F0E8D9",

}

const MyIcon = styled.img`
  
`;

MyIcon.defaultProps = {
  src: [union1, union2, union3, union4],
};

export const Section3 = () => {
  return (
    <main style={main}>
      <div className="container">
        <div className="row mt-5">
          <Heading color={"black"} className="mt-5">Další vybavení</Heading>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex align-item-center justify-content-center mt-5">
              <MyIcon src={union1} className="mt-5" />
              <Heading color={"black"} fontSize={"15px"} className="mt-5 pt-3">LYŽÁRNA</Heading>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex align-item-center justify-content-center mt-5">
              <MyIcon src={union1} className="mt-5" />
              <Heading color={"black"} fontSize={"15px"} className="mt-5 pt-3">SPOLEČENSKÁ</Heading>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex align-item-center justify-content-center mt-5">
              <MyIcon src={union1} className="mt-5" />
              <Heading color={"black"} fontSize={"15px"} className="mt-5 pt-3 ">PARKOVACÍ MÍSTO</Heading>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex align-item-center justify-content-center mt-5">
              <MyIcon src={union1} className="mt-5" />
              <Heading color={"black"} fontSize={"15px"} className="mt-5 pt-3">CHYTRÁ DOMÁCNOST</Heading>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
