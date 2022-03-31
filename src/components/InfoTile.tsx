import React from 'react'
import { Tile, Info, TileImage } from './stylecomponent/styles';

function InfoTile(props:any) {
  return (
      <Tile>
          <TileImage src={props.tileImage} alt="" />
          <Info> {props.info} </Info>
      </Tile>
  )
}

export default InfoTile