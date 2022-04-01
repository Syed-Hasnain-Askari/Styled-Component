import React from "react";
import {
  NewWrapper,
  NewButton,
  Title,
  Paragraph,
  Heading
} from "./stylecomponent/styles";
export const Section2: React.FC = () => {
  return (
    <NewWrapper>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center mt-5">
          <Heading color={"white"}>
            Nostalgické kouzl
          </Heading>
          <Heading color={"white"}>
            hrubého Jeseníku
          </Heading>
        </div>

        <div className="row d-flex justify-content-center">
          <Paragraph color={"white"} className="link-light text-center">
            Hrubý Jeseník je druhým největším pohořím České republiky. Na rozdíl
            od Krkonoš a Šumavy není ale tak turisticky navštěvovaný, což má své
            velké výhody. Úchvatný ráz krajiny ještě nestihla pozměnit ruka
            člověka a zdejší neposkvrněná příroda má v sobě léčivou sílu.
            Nadechněte se a objevujte čistou krásu jesenických hor. Záleží jen
            na vás, zda pěšky, na kole či na lyžích.
          </Paragraph>
          <div className="row d-flex justify-content-center">
            <NewButton>VÍCE O OKOLÍ</NewButton>
          </div>
        </div>
      </div>
    </NewWrapper>
  );
};
