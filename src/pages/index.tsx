import * as React from "react";
import { Section2 } from "../components/section2";
import { Section } from "../components/section";
import { Section3 } from "../components/section3";
import { Footer } from "../components/footer";
import { Banner } from "../components/banner";
import InfoGrid from "../components/InfoGrid";


const IndexPage: React.FC = () => {
  return (
    <main>
      <Banner />
      <InfoGrid />
      <Section />
      <Section3 />
      <Section2 />
      <Footer />
    </main>
  );
};

export default IndexPage;
