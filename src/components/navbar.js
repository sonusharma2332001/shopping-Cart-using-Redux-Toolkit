import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



export default function Navbar() {

  const {cart} = useSelector((state)=>state.Allcarts)
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand>Navbar</MDBNavbarBrand>
      <span>  <Link to="/">ALL Products</Link></span>
      <Link to="/cartt"><MDBBtn color="dark">Cart({cart.length})</MDBBtn></Link>
      </MDBContainer>
    </MDBNavbar>
  );
}