import React from 'react';
// import {H1} from '../components/headings';
import styled from 'styled-components';
import { Container,device,Paragraph,Heading } from './styles';
import image from '../images/section.png'
    const container = {
        height:"200vh",
        maxWidth:"100%",
        border:"1px solid black",
        
    }
    const H1:any = {
        marginTop:"80px",
        textAlign:"center",
        color:"#262B3B",
        fontSize:"60px",
        fontStyle:"bold",
        fontFamily: "roc-grotesk, sans-serif",
        
            
    }
    const section = {
        margin: "50px 40px 0px 40px",
        display:"flex",
        fkexDirection:"column",
        justifyContent:"space-around",
    }
    const subsection = {
        
        padding:"40px",
    }
    const para:any = {
        marginLeft:"40px",
        textAlign:"center",
        fontSize:"18px",
        lineHeight:"30px",
        color:"#262B3B",
        fontFamily: "roc-grotesk, sans-serif",
        fontStyle: "normal",
        paddingTop:"180px",
  }

export default function Section()
{
    return(
        <>
        <h1 style={H1}>Intimní atmosféra <br></br> prvorepublikové vily</h1>
        <div style={container}>
            <div style={section}>
                <div style={subsection}><img src={image} width="550px" height="480px"></img></div>
                <div>
                    <Paragraph style={para}>
                        Vila Republika na vás dýchne lázeňskou historií. Luxusní ubytování předčí všechna vaše očekávání. Moderní interiéry jednotlivých apartmánů mají společný jednotící prvek – prvorepublikové elementy. Ať už jsou to repasované dveře, původní parkety, dřevěná obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden estetický celek.
                        Důraz na kvalitní vybavení je zárukou nebeského pohodlí.
                    </Paragraph>
                </div>
            </div>
            <div style={section}>
                <div>
                    <Paragraph style={para}>
                        Vila Republika na vás dýchne lázeňskou historií. Luxusní ubytování předčí všechna vaše očekávání. Moderní interiéry jednotlivých apartmánů mají společný jednotící prvek – prvorepublikové elementy. Ať už jsou to repasované dveře, původní parkety, dřevěná obložení nebo citlivě vybrané designové doplňky – vše ladí v jeden estetický celek.
                        Důraz na kvalitní vybavení je zárukou nebeského pohodlí.
                    </Paragraph>
                </div>
                
                <div style={subsection}><img src={image} width="550px" height="480px"></img></div>
               
            </div>
        </div>
        </>
        
    )
}