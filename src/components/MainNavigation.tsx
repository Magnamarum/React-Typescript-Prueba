import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  background: #00179b;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NavItem = styled(NavLink)`
  margin: 0 1rem;
  display: block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;
  &:hover {
    background: white;
    color: #00179b;
    text-decoration: none;
  }
`;

/** This component implements the navigation of the App */
const mainNavigation = props => (
  <Header>
    <Nav>
      <NavItem to="/"> Products</NavItem>
      <NavItem to="/cart">Cart ({props.cartItemNumber})</NavItem>
    </Nav>
  </Header>
);

export default mainNavigation;
