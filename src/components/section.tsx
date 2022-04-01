import React from "react";
// import {H1} from '../components/headings';
import { Paragraph, Title, Heading } from "./stylecomponent/styles";

const main = {
  paddingBottom: "100px",
  paddingTop: "100px",
};
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
    <main style={main}>
      <div className="container">
        <div className="row mt-5">
          <Heading style={heading} className="mt-5">
            Intimní atmosféra
          </Heading>
          <Heading style={heading}>prvorepublikové vily</Heading>
        </div>
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
        <div className="row mt-5">
          <Heading style={heading} className="mt-5">
            Staletá lázeňská historie
          </Heading>
          <Heading style={heading} className="mt-3">
            Velkých Losin
          </Heading>
        </div>
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
    </main>
  );
};
