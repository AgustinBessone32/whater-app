import React, { useState } from 'react';
import {Route , HashRouter as Router} from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import Ciudad from '../components/Ciudad.jsx';
import swal from 'sweetalert' 
import Home from '../components/Home';
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  const [obt , setObt] = useState([]);
  
  function onClose(id , name) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
    setObt(oldObt => oldObt.filter(nam => nam !== name))
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          if(obt.includes(recurso.name)) {swal({
            title:'Error',
            text: 'Ya has ingresado este pais o ciudad',
            icon: 'error',
            timer:'2000',
          })}
          else{
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
            setObt(oldObt => [...oldObt , recurso.name])
          }

        } else {
          swal({
            title:'Error',
            text: 'No se encontro la ciudad o pais ingresado',
            icon: 'error',
            timer:'2000',
          })
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className='contenido'>
      <Router>
          <Route
              exact path='/'
              render = {() => <Home />}
          />
          
          <Route
              path='/busqueda'
              render={() => 
              <Nav onSearch={onSearch} />}
          />
          <Route exact path='/busqueda'
                render={() =>
                <Cards cities={cities} onClose={onClose} obt={obt} />}
          />
          <Route
              exact
              path='/ciudad/:id'
              render={({match}) => <Ciudad city={onFilter(match.params.id)} />}
          />
      </Router>
    </div>
  );
}



export default App;
