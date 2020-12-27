import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container, NavItem, NavLink } from 'reactstrap';
import './Footer.css'
import nike1 from './image/logo-nike.png'




const styles= {
    copy:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:"1500",
      borderTop:"1px solid  rgb(218, 207, 207)",
      paddingTop:"10px"
    },
    copy1:{
      display:"flex",
      flexDirection:"row"
    }
}

const Footer = () => {
    return (
      <div className="footer">
      <Container>
    <MDBFooter className="font pt-4 mt-4">
      <MDBContainer fluid className="text-md-center">
        <MDBRow >
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <NavLink disabled href="#!">Main</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">Shop</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">About</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">Buy new</NavLink>
              </li>
    
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <NavLink disabled href="#!">+1 435-345-3455</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">nike@normal.com</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">29 BROADWAY NEW</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">YORK, NY 1002, USA</NavLink>
              </li>
              <img src={nike1} alt=""/>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <NavLink disabled href="#!">Contact</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">FAQ</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">Shoping</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">Stock</NavLink>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Container>

      <MDBContainer>
        <MDBRow style={styles.copy}>
        <div style={styles.copy1}>
          <li className="list-unstyled">
                <NavLink disabled href="#!">Terms</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">Privacy</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink disabled href="#!">License</NavLink>
              </li>
        </div>
        <div>
          <NavLink disabled>
          &copy; {new Date().getFullYear()} Copyright NIKE - All Right Reserved
          </NavLink>
        </div>
        <div style={styles.copy1}>
          <NavLink disabled>
          <i className="fab fa-twitter"></i>
          </NavLink>
          <NavLink disabled>
          <i className="fab fa-pinterest-p"></i>
          </NavLink>
          <NavLink disabled>
          <i className="fab fa-instagram"></i>
          </NavLink>
          <NavLink disabled>
          <i className="fab fa-facebook"></i>
          </NavLink>
        </div>
        </MDBRow>
      </MDBContainer>
      </Container>
    </MDBFooter>
        </Container>
        </div>
    );
};

export default Footer;