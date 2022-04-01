import React from "react";
import { Tile, Info, TileImage } from "./stylecomponent/styles";

function InfoTile(props: any) {
  return (
    <Tile>
      <TileImage src={props.tileImage} alt="" />
      <Info fontSize="16px" textAlign="start" color="black">
        {" "}
        {props.info}{" "}
      </Info>
    </Tile>
  );
}

export default InfoTile;
