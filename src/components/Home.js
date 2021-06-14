import React from 'react';
import Menu from './Menu';
import Background from '../assets/images/backgroundimage.jpg';
import BackgroundPills from '../assets/images/pills.jpg';
import Pharmacy from '../assets/images/pharmacy.jpg';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills, faPhone,  } from '@fortawesome/fontawesome-free-solid';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function Home() {
  return (
    <div>
      <Menu></Menu>
      <div className="shadow-sm p-3" style={{ backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '65vh', 
        backgroundImage: "url(" + Background + ")" }}>
            <Container>
                <Row>
                    <Col style={{ marginTop: "15%" }}> 
                    <h1 style={{ fontWeight: "bold", fontSize: 65 }}>Apteka Online</h1>
                    <div style={{ marginTop: 15, fontSize: 22 }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut
                            labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed.
                            Nulla pellentesque dignissim enim sit amet venenatis. </p>
                    </div>
                    <div style={{ marginTop: 25 }}>
                        <Button href="#login" variant="danger" size="lg">Zaloguj się</Button>
                        <Button href="#signup" style={{ marginLeft: 15 }} variant="outline-danger" size="lg">Zarejestruj się</Button>
                    </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
      </div>
      <div style={{ height: "45vh" }} align="center">
        <Container style={{ marginTop: "5%" }}>
          <Row>
            <Col style={{ marginLeft: "5%", marginRight: "5%" }}>
              <FontAwesomeIcon icon={faPills} size="4x"/>
              <h2 style={{ color: "red", marginTop: "10%" }}>Leki</h2>
              <p style={{ marginTop: "10%" }}>Suspendisse ultrices gravida dictum fusce. Eget dolor morbi non arcu.
                Bibendum arcu vitae elementum curabitur vitae nunc sed.
                Vestibulum mattis ullamcorper velit sed ullamcorper morbi. </p>
            </Col>
            <Col style={{ marginLeft: "5%", marginRight: "5%"}}>
              <FontAwesomeIcon icon={faStarOfLife} size="4x"/>
              <h2 style={{ color: "red", marginTop: "10%" }}>Sprzęt</h2>
              <p style={{ marginTop: "10%" }}>Venenatis urna cursus eget nunc scelerisque viverra.
                 Posuere lorem ipsum dolor sit. Fames ac turpis egestas integer eget. 
                 Nisl vel pretium lectus quam id leo in vitae turpis.</p>
            </Col>
            <Col style={{ marginLeft: "5%", marginRight: "5%" }}>
              <FontAwesomeIcon icon={faPhone} size="4x"/>
              <h2 style={{ color: "red", marginTop: "10%" }}>Teleporada</h2>
              <p style={{ marginTop: "10%" }}>Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. 
                Aliquam id diam maecenas ultricies mi eget mauris. 
                Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="shadow-sm p-3" style={{ backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '75vh', 
        opacity: "80%",
        backgroundImage: "url(" + Pharmacy + ")" }}>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h1 style={{ marginTop: "15%", fontWeight: "bold" }}>Usługi</h1>
              <ul style={{ marginTop: "15%", listStyle: "none"}}>
                <li style={{ display: "flex" }}><BiRightArrowAlt style={{ width: 25, height: 25, color: "red" }}/><p>Cursus risus at ultrices mi tempus imperdiet nulla malesuada.</p></li>
                <li style={{ display: "flex" }}><BiRightArrowAlt style={{ width: 25, height: 25, color: "red" }}/><p>Mattis pellentesque id nibh tortor id aliquet. Odio ut sem nulla pharetra.</p></li>
                <li style={{ display: "flex" }}><BiRightArrowAlt style={{ width: 25, height: 25, color: "red" }}/><p>Varius quam quisque id diam vel quam elementum.</p></li>
                <li style={{ display: "flex" }}><BiRightArrowAlt style={{ width: 25, height: 25, color: "red" }}/><p>Ornare massa eget egestas purus.</p></li>
                <li style={{ display: "flex" }}><BiRightArrowAlt style={{ width: 25, height: 25, color: "red" }}/><p>Pretium aenean pharetra magna ac placerat vestibulum lectus.</p></li>
                <li style={{ display: "flex" }}><BiRightArrowAlt style={{ width: 25, height: 25, color: "red" }}/><p>Ut enim blandit volutpat maecenas.</p></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="shadow-sm p-3" align="center" style={{ backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh', 
        backgroundImage: "url(" + BackgroundPills + ")" }}>
        <Container>
          <h1 style={{ color: "red", marginTop: "15%" }}>Kim jesteśmy?</h1>
          <p style={{ marginTop: "3%", fontSize: 20 }}>Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. 
            Et malesuada fames ac turpis egestas maecenas pharetra convallis.
            Ultrices sagittis orci a scelerisque purus semper eget. 
            In hac habitasse platea dictumst quisque sagittis purus sit. 
            Nunc consequat interdum varius sit amet.
            Vivamus arcu felis bibendum ut tristique et egestas. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. 
            Feugiat scelerisque varius morbi enim nunc faucibus a.</p>
            <Button style={{ marginTop: "2%" }} size="lg" variant="outline-danger">Dowiedz się więcej</Button>
        </Container>
      </div>
    </div>
  );
}