import React from 'react'
import {Wrapper,Button,Title,Paragraph} from './stylecomponent/styles'
export const Section2:React.FC = () => { 
  return (
    <Wrapper>
        <div className='container mt-5'>
          <div className="row d-flex justify-content-center mt-5">
              <Title color={"white"} fontSize={"3rem"}>
                  Nostalgické kouzl
              </Title>
              <Title color={"white"} fontSize={"3rem"}>
                hrubého Jeseníku
              </Title>
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
            <div className='row d-flex justify-content-center'>
              <Button>VÍCE O OKOLÍ</Button>
            </div>
          </div>
        </div>
      </Wrapper>
  )
}
