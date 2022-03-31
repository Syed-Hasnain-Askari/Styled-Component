import React, { Children } from "react";
// import {H1} from '../components/headings';
import { Paragraph, Title } from "./stylecomponent/styles";

const heading: any = {
  lineHeight: "30px",
  textAlign: "center",
};
const para: any = {
  textAlign: "center",
  fontSize: "18px",
  lineHeight: "30px",
  fontStyle: "normal",
  padding: "50px",
};

export const Section: React.FC = () => {
  return (
    <>
      <div className="container">
        <Title style={heading} className="mt-5">
          Intimní atmosféra
        </Title>
        <div className="row d-flex flex-row align-items-center gx-5 mt-5">
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <img
              src="https://res.cloudinary.com/morireality/image/upload/v1648721110/HomePage/section_smr7op.png"
              width="500px"
              height="480px"
            ></img>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <Paragraph style={para}>
              Vila Republika na vás dýchne lázeňskou historií. Luxusní ubytování
              předčí všechna vaše očekávání. Moderní interiéry jednotlivých
              apartmánů mají společný jednotící prvek – prvorepublikové
              elementy. Ať už jsou to repasované dveře, původní parkety, dřevěná
              obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden
              estetický celek. Důraz na kvalitní vybavení je zárukou nebeského
              pohodlí.
            </Paragraph>
          </div>
        </div>
        <Title style={heading} className="mt-5">
          Intimní atmosféra
        </Title>
        <Title style={heading} className="mt-3">
          prvorepublikové vily
        </Title>
        <div className="row d-flex align-items-center flex-row flex-row-reverse gx-5 mt-5 pb-5">
          <div className="col-md-6 col-lg-6">
            <img
              src="https://res.cloudinary.com/morireality/image/upload/v1648721110/HomePage/section1_pcb3rt.png"
              width="500px"
              height="480px"
            ></img>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <Paragraph style={para}>
              Vila Republika na vás dýchne lázeňskou historií. Luxusní ubytování
              předčí všechna vaše očekávání. Moderní interiéry jednotlivých
              apartmánů mají společný jednotící prvek – prvorepublikové
              elementy. Ať už jsou to repasované dveře, původní parkety, dřevěná
              obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden
              estetický celek. Důraz na kvalitní vybavení je zárukou nebeského
              pohodlí.
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};
