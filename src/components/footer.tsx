import React from "react";
import {
  FooterButton,
  Button,
  MenuItem,
  Title,
  Text,
  Heading,
  Paragraph,
} from "../components/stylecomponent/styles";
import personAvatar from "../images/footerimage.png";
import footerlogo from "../images/footerlogo.svg";
import footerlogo2 from "../images/footerlogo2.svg";
import footerlogo3 from "../images/Union 12.svg";
import styled from 'styled-components'
const main = {

  background: "#262b3b",
  paddingBottom: "70px",

}

const MyIcon = styled.img`
  
`;

MyIcon.defaultProps = {
  src: [personAvatar, footerlogo, footerlogo2, footerlogo3],
};
export const Footer: React.FC = () => {
  return (
    <main style={main}>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-4 col-sm-12 pt-3">
            <Heading color={"white"} textAlign={"left"} fontSize={"34px"} className="lh-1">
              Rezervujte
            </Heading>
            <Heading color={"white"} textAlign={"left"} fontSize={"34px"} className="lh-1">
              si apartmán
            </Heading>
            <Heading color={"white"} textAlign={"left"} fontSize={"34px"} className="lh-1">
              v Jeseníkách
            </Heading>
          </div>
          <div className="col-md-4 col-sm-12 pt-3">
            <Paragraph color={"white"} fontSize={"18px"} align={"left"}>
              Apartmány nabízíme v různých velikostech. Pro jednotlivce, páry i
              rozvětvenou rodinu. Zarezervovat si můžete také celou vilu – na
              oslavu narozenin či dovolenou s přáteli. V okolí budete mít
              desítky kilometrů sjezdovek, cyklostezek a turistických tras,
              termální lázně na dosah. Ozvěte se!
            </Paragraph>
          </div>
          <div className="d-flex justify-content-center col-md-4 col-sm-12 pt-3">
            <FooterButton className="text-center pt-3">REZERVACE</FooterButton>
          </div>
        </div>
        <div className="border-bottom mt-5"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3 mt-5">
            <Title color={"white"} fontSize={"14px"}>
              VILA REPUBLIKA
            </Title>
            <ul className="list-unstyled">
              <li className="text-center text-uppercase">
                <Title fontSize={"10px"} color={"#F0E8D9"}>
                  APARTMÁNY
                </Title>
              </li>
              <li className="text-center text-uppercase mt-2">
                <Title fontSize={"10px"} color={"#F0E8D9"}>
                  WELLNESS
                </Title>
              </li>
              <li className="text-center text-uppercase mt-2">
                <Title fontSize={"10px"} color={"#F0E8D9"}>
                  OKOLÍ
                </Title>
              </li>
              <li className="text-center text-uppercase mt-2">
                <Title fontSize={"10px"} color={"#F0E8D9"}>
                  BISTRO
                </Title>
              </li>
              <li className="text-center text-uppercase mt-2">
                <Title fontSize={"10px"} color={"#F0E8D9"}>
                  DÁRKOVÉ POUKAZY
                </Title>
              </li>
              <li className="text-center text-uppercase mt-2">
                <Title fontSize={"10px"} color={"#F0E8D9"}>
                  VILA REPUBLIKA
                </Title>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-lg-3  mt-5">
            <Title color={"white"} fontSize={"14px"}>
              KONTAKT
            </Title>
            <div className="d-flex justify-content-center">
              <div>
                <MyIcon src={personAvatar} />
              </div>
              <div className="mt-4">
                <Title color={"white"} fontSize={"14px"} className="text-light text-capitalize lh-1">Petr Morong
                </Title>
                <Title color={"white"} fontSize={"14px"} className="text-light text-capitalize lh-1">
                  +420 123 456 789
                </Title>
                <Title color={"white"} fontSize={"14px"} className="text-light lh-1">info@vilarepublika.cz</Title>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3  mt-5">
            <Title color={"white"} fontSize={"14px"}>
              KDE NÁS NAJDETE?
            </Title>
            <div className="mt-4 m-lg-4">
              <div className="">
                <div>
                  <Title fontSize={"12px"} className="text-light text-center text-capitalize lh-sm">
                    Osvobození 354,
                  </Title>
                  <Title fontSize={"12px"} className="text-light text-center lh-sm">
                    Velké Losiny, 788 15
                  </Title>
                  <Title fontSize={"12px"} className="text-light text-center lh-sm">Zobrazit na mapě</Title>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 mt-5">
            <Title color={"white"} fontSize={"14px"}>
              SLEDUJTE NÁS
            </Title>
            <div className="d-flex justify-content-center mt-4">
              <div>
                <MyIcon src={footerlogo} />
              </div>
              <div className="p-2">
                <Title color={"white"} fontSize={"10px"} className="lh-1 mt-2">
                  VILA REPUBLIKA
                </Title>
                <Title color={"white"} fontSize={"10px"} className="lh-1 mt-2">
                  NA FACEBOOKU
                </Title>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <div>
                <MyIcon src={footerlogo2} />
              </div>
              <div className="p-2">
                <Title color={"white"} fontSize={"10px"} className="lh-1 mt-2">
                  VILA REPUBLIKA
                </Title>
                <Title color={"white"} fontSize={"10px"} className="lh-1 mt-2">
                  NA INSTAGRAMU
                </Title>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <MyIcon src={footerlogo3} />
          </div>
        </div>
      </div>
    </main>
  );
};
