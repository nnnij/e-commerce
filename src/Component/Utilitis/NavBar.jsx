import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useData } from "../Hooks/useData";
const NavBar = () => {


  const {navbar} = useData()

  return (
    <Navbar style={{direction:"ltr"}} expand="lg" className="nav py-0 my-0">
      <Navbar.Brand href="/" className="link">
        <div className="d-flex align-items-center">
          <div className="title-font">{navbar.name}</div>
          <div className="container-icon d-flex mx-2">
            <i class="fas fa-store icon-nav"></i>
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex w-50 m-auto" style={{ position: "relative" }}>
          <Form.Control
            type="search"
            placeholder={navbar.Placeholder}
            className="nav-form text-center"
            aria-label="Search"
          />
          <i class="fas fa-search search-icon"></i>
        </Form>
        <Nav className="ms-auto d-flex align-items-end gap-4">
          <NavLink href="/cart" className="link">
            <div className="d-flex align-items-center gap-1">
              <div className="font-nav">{navbar.card}</div>
              <div style={{ position: "relative" }}>
                <div className="cart-number">3</div>
                <i class="fa-solid fa-cart-shopping nav-icons"></i>
              </div>
            </div>
          </NavLink>
          <NavLink href="/favorites" className="link">
            <div className="d-flex align-items-center gap-1">
              <div className="font-nav">{navbar.favorite}</div>
              <i class="fa-regular fa-heart nav-icons mx-1"></i>
            </div>
          </NavLink>
          <div className="d-flex align-items-center">
            <NavLink href="logon" className="link">
              <div className="font-nav"> {navbar.logon} /</div>
            </NavLink>
            <NavLink href='login' className="link d-flex">
              <div className="font-nav">{navbar.login}</div>
              <i class="fa-regular fa-user nav-icons text-center mx-1"></i>
            </NavLink>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
