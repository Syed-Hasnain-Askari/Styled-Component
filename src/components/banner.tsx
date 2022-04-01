import React from "react";
import {
  Wrapper,
  GradientBackground,
  BannerTitle,
  BottomInfoRow,
} from "./stylecomponent/styles";
import InfoTile from "./InfoTile";
import union from "../images/Union.png";
import union2 from "../images/union2.png";
import union3 from "../images/union3.png";
import union4 from "../images/Union4.png";
import Header from "./header";

export const Banner: React.FC = () => {
  return (
    <Wrapper>
      <GradientBackground>
        <Header />
      </GradientBackground>
      <BannerTitle>
        Wellness apartmány <br />v podhůří Jeseníků
      </BannerTitle>
      <BottomInfoRow>
        <InfoTile tileImage={union} info="PRIVÁTNÍ WELLNESS" />
        <InfoTile tileImage={union2} info="7 APARTMÁNŮ" />
        <InfoTile tileImage={union3} info="UBYTOVÁNÍ V HORÁCH" />
        <InfoTile tileImage={union4} info="MODERNÍ TECHNOLOGIE" />
      </BottomInfoRow>
    </Wrapper>
  );
};
