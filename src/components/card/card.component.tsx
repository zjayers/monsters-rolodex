import * as React from 'react';
import { Monster } from '../../types/data-types';
import './card.styles.css';

interface Props {
  monster: Monster;
}

export function Card(props: Props) {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt='monster avatar'
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
}
