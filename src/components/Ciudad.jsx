import React from "react";
import './Ciudad.css'
import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

export default function Ciudad({city}) {
    if(!city) return(
        <div>No se encuentra ninguna ciudad</div>
    )
    return (
        <>
            <Link to='/busqueda'> 
                <div className='last'>
                    <BsArrowLeft />
                </div>
             </Link>
            <div className="ciudad animate__animated animate__backInUp animate__delay-1s">
                    <div className="cont">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                </div>
        </div>
        </>
    )
}