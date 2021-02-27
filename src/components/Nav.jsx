import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import About from './About'


function Nav({onSearch}) {
  return (
      <nav className="navbar navbar">
          <Link to='/'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwrphZt9rTIUP9B-hv3jdzEPLGjHdb0JfPg&usqp=CAU' width="30" height="30" className="d-inline-block align-top" alt="" />
            <span className="navbar-brand">
              Cilma AB
            </span>
          </Link>
          <SearchBar
            onSearch={onSearch}
          />
      </nav>
  );
};

export default Nav;
