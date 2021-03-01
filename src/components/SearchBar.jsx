import React, { useState } from "react";
import './SearchBar.css'
import {BiSearchAlt2} from 'react-icons/bi'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <div className='search-cont'>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        e.target.reset()
      }}>
        <BiSearchAlt2 className='icon-search' />
        <input
          type="text"
          placeholder="Buscar..."
          className='search'
          onChange={e => setCity(e.target.value)} 
        />
      </form>
    </div>
  );
}
