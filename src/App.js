import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./components/menuComponent";
import './App.css';

function App() {
  return (
    <div>
     <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand href="/">17restorante</NavbarBrand>
       </div>
     </Navbar>
     <Menu/>
    </div>
  );
}

export default App;
