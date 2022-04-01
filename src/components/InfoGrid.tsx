import React from 'react'
import { InforGridWrapper, Heading, Text, Grid, GridTile, ImageGradient, InfoWrap, TileTitle, InfoText,Box } from './stylecomponent/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GridTileImage from '../images/o01.png'
import GridTileImage2 from '../images/suana2.png'

function InfoGrid() {
    return (
        <InforGridWrapper>
            <Heading>vila republika</Heading>
            <Text>
                Apartmánový dům Vila Republika leží pod svahy Hrubého Jeseníku v lázeňské obci Velké Losiny. Původní stavba z 30. let minulého století je citlivě zrekonstruována, krásné prvorepublikové prvky zachovány. Moderně pojaté, komfortní ubytování uspokojí i nejnár
            </Text>
            <Grid>
                <GridTile img={GridTileImage}>
                    <ImageGradient className="image_grd">
                        <InfoWrap className="info_wrap">
                            <Box>
                                <TileTitle>Designové apartmány</TileTitle>
                                <InfoText>
                                    Zcela unikátní vyznění a jiné barevné ladění. Každý z našich apartmánů je originál, navrhoval ho jiný architekt. Vždy je to ale minimalismus s poctou k prvorepublikové architektuře. Vyberte si styl, který vám sedne.
                                </InfoText>
                            </Box>
                            <ChevronRightIcon/>
                        </InfoWrap>
                    </ImageGradient>
                </GridTile>
                <GridTile img={GridTileImage2}>
                    <ImageGradient className="image_grd">
                    <InfoWrap className="info_wrap">
                            <Box>
                                <TileTitle>Designové apartmány</TileTitle>
                                <InfoText>
                                    Zcela unikátní vyznění a jiné barevné ladění. Každý z našich apartmánů je originál, navrhoval ho jiný architekt. Vždy je to ale minimalismus s poctou k prvorepublikové architektuře. Vyberte si styl, který vám sedne.
                                </InfoText>
                            </Box>
                            <ChevronRightIcon/>
                        </InfoWrap>
                    </ImageGradient>
                </GridTile>
            </Grid>
        </InforGridWrapper>
    )
}

export default InfoGrid 