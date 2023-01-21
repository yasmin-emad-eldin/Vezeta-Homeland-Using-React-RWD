import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LanguageSwitcher from'./../LanguageSwitcher'
// import useState from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import './Navbar.css';
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbar1() {
  const { t } = useTranslation( );

    // const data=[1,2,3,4];
    // const [count, setCount] = useState(0);
//     let [c, setC] = useState(0);
// let count=0
//   const handleClick = () => {
//     setInterval(() => {
//         count++
//         if(count>3){
//             count =0
//         }

// c=data[count]
//     }, 700);
//   }
//   handleClick()
    return (
      <>
     {['lg'].map((expand) => (
        <Navbar key={expand}  expand={expand} className=" " variant="dark" style={{backgroundColor:"#0070cd",}}>
          <Container fluid>
            <Navbar.Brand href="#" className="NavLinkHeaderLogo"><img src={require('../Images/logo-vezeeta.jfif')}alt='logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5  NavLinkHeader text-nowrap " >
               

                  <Nav.Link href="#action1" active className=' border border-while ' id='NavLinkHeaderLinkSing'>Sing in</Nav.Link>
                  <Nav.Link href="#action1" active className='NavLinkHeaderLink '>|</Nav.Link>

                  <Nav.Link href="#action2"active className='NavLinkHeaderLink'>log in</Nav.Link> 
                  <Nav.Link href="#action1" active className='NavLinkHeaderLink' >|</Nav.Link>

                  <Nav.Link href="#action2"active className='NavLinkHeaderLink'>vezeeta For Doctors</Nav.Link>
                  <Nav.Link href="#action1" active className='NavLinkHeaderLink'>|</Nav.Link>

                  <Nav.Link href="#action1" active className='NavLinkHeaderLink'>{t("appsa")}</Nav.Link>
                  <Nav.Link href="#action1" active className='NavLinkHeaderLink'>|</Nav.Link>
                  <Nav.Link href="#action2"active className='NavLinkHeaderLink'>{t("app")}</Nav.Link>
                  <Nav.Link href="#action1" active className='NavLinkHeaderLink'>|</Nav.Link>
                  <Nav.Link href="#action1" active className='NavLinkHeaderLink'>|</Nav.Link>

                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    <LanguageSwitcher/>
                                        </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          
        </Navbar>

      ))}
  </>
    );
  }
  
  export default withTranslation()(Navbar1);
