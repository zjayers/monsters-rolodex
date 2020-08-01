import React from "react";
import { Monster } from "./../../types/data-types";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

interface Props {
  monsters: Array<Monster>;
}

export const CardList = (props: Props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
