import React from 'react'
import './Home.css'
import {NavLink} from 'react-router-dom'

const Home = () =>{

    return(
        <div className='inHome'>
            <div className='box-title animate__animated animate__backInLeft animate__delay-2s'>
                <h3 className='title'>
                    El clima del mundo en un solo lugar </h3>
                <div className='content-link'>
                    <NavLink to='/busqueda' className='link'>
                            Click aquí para entrar
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home