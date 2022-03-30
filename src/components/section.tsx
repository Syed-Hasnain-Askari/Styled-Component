import React from 'react';
// import {H1} from '../components/headings';
import styled from 'styled-components';
import { Container,device,Paragraph,Title} from './styles';

    const heading:any = {
        lineHeight:"30px",
        textAlign:"center",        
    }
    const para:any = {
        textAlign:"center",
        fontSize:"18px",
        lineHeight:"30px",
        color:"#262B3B",
        fontFamily: "roc-grotesk, sans-serif",
        fontStyle: "normal",
        padding:"50px",
  }
  
export default function Section()
{
    return(
        <>
        <div className="container">
            <Title style={heading} className="mt-5">Intimní atmosféra</Title>
            <Title style={heading}>prvorepublikové vily</Title>
            <div className="row d-flex flex-row align-items-center gx-5 mt-5">
                <div className='col-md-6 col-lg-6 col-sm-12 col-xs-12'>
                <img src="https://res.cloudinary.com/hasnainaskari32/image/upload/v1648654351/section_hx4zc6.png" width="500px" height="480px"></img>
                    
                </div>
                <div  className="col-md-6 col-lg-6 col-sm-12 col-xs-12 border">
                   <Paragraph style={para}>
                        Vila Republika na vás dýchne lázeňskou historií. Luxusní ubytování předčí všechna vaše očekávání. Moderní interiéry jednotlivých apartmánů mají společný jednotící prvek – prvorepublikové elementy. Ať už jsou to repasované dveře, původní parkety, dřevěná obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden estetický celek.
                        Důraz na kvalitní vybavení je zárukou nebeského pohodlí.
                    </Paragraph> 
                </div>
            </div>
            <Title style={heading} className="mt-5">Intimní atmosféra</Title>
            <Title style={heading} className="mt-3">prvorepublikové vily</Title>
            <div className="row d-flex align-items-center flex-row flex-row-reverse gx-5 mt-5 pb-5">
                <div className='col-md-6 col-lg-6'>
                    
                    <img src="https://res.cloudinary.com/hasnainaskari32/image/upload/v1648654926/_06A8153_fkfspp.png" width="500px" height="480px"></img>
                </div>
                <div  className="col-md-6 col-lg-6 col-sm-12 border">
                   <Paragraph style={para}>
                        Vila Republika na vás dýchne lázeňskou historií. Luxusní ubytování předčí všechna vaše očekávání. Moderní interiéry jednotlivých apartmánů mají společný jednotící prvek – prvorepublikové elementy. Ať už jsou to repasované dveře, původní parkety, dřevěná obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden estetický celek.
                        Důraz na kvalitní vybavení je zárukou nebeského pohodlí.
                    </Paragraph> 
                </div>
            </div>
            <div className='row' style={{backgroundColor:"red"}}>

            </div>
           
        </div>
        </>
        
    )
}