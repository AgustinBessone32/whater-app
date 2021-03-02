import React from 'react';
import './Cards.css';
import {ImSmile} from 'react-icons/im'
import Card from './Card.jsx';

export default function Cards({cities, onClose ,obt}) {
  return (
    <>
    {obt.length ?    
      <div className='cards'>
        {cities.map(c => <Card
            id ={c.id}
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id , c.name)}
          /> )}
      </div> : 
      <div className='msj'> 
        <h5>Puedes buscar el clima de la ciudad que desees <ImSmile /> </h5>
      </div>
      
      }
    </>
  );
}
