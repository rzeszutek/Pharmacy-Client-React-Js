import React from 'react';
import './Home.css';
import Background from '../assets/images/backgroundimage.jpg';
import Pharmacy from '../assets/images/pharmacy.jpg';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills, faPhone,  } from '@fortawesome/fontawesome-free-solid';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function Home() {
  return (
    <div>
      <Container fluid style={{
        paddingLeft: "0em",
        paddingRight: "0em"
      }}>
      <div style={{
              backgroundImage: `url(${Background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "500px"
            }}>
        <Row style={{
          paddingTop: "100px"
        }}>
          <Col sm={8} style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
          }}> 
            <div>
              <h1 style={{ fontWeight: "bold" }}>Apteka Online</h1>
              <p style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, <br /> 
                  consectetur adipiscing elit, sed do <br /> 
                  eiusmod tempor incididunt ut labore <br /> 
                  et dolore magna aliqua.
              </p>
              <Button className="loginButton" href="/login" variant="danger" size="lg" style={{ 
                marginRight: "20px"
               }}>Zaloguj się</Button>
              <Button href="/signup" variant="outline-danger" size="lg">Zarejestruj się</Button>
            </div>
            </Col>
        </Row>
      </div>  
      <div style={{
        padding: "100px",
        textAlign: "center"
      }}>
          <Row style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Col sm={8} md={4}>
              <FontAwesomeIcon icon={faPills} size="3x" className="label-icon"/>
              <h5 className="label-header">Leki</h5>
              <p className="label-text">Suspendisse ultrices gravida dictum fusce.
                  Eget dolor morbi non arcu. Bibendum arcu vitae
                  elementum curabitur vitae nunc sed. </p>
                 <Button className="btn btn-danger">Więcej</Button>
            </Col>
            <Col sm={8} md={4}>
              <FontAwesomeIcon icon={faStarOfLife} size="3x" className="label-icon"/>
              <h5 className="label-header">Sprzęt</h5>
              <p className="label-text">Venenatis urna cursus eget nuncscelerisque
                viverra. Posuere lorem ipsum dolor sit. Fames
                ac turpis egestas integer eget.  </p>
                <Button className="btn btn-danger">Więcej</Button>
            </Col>
            <Col sm={8} md={4}>
              <FontAwesomeIcon icon={faPhone} size="3x" className="label-icon"/>
              <h5 className="label-header">Teleporada</h5>
              <p className="label-text">Nulla facilisi cras fermentum odio eu feugiat
                 pretium nibh ipsum. Aliquam id diam maecenas
                 ultricies mi eget mauris. </p>
                <Button className="btn btn-danger">Więcej</Button>
            </Col>
          </Row>
      </div>
      <div className="shadow-sm p-3">
          <Row>
            <Col md={3} sm={6} xs={6}></Col>
            <Col md={3} sm={6} xs={6}>
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
      </div>
      <div className="shadow-sm p-3" align="center" >
          <h1 style={{ color: "red", marginTop: "15%" }}>Kim jesteśmy?</h1>
          <p style={{ marginTop: "3%", fontSize: 20 }}>Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. 
            Et malesuada fames ac turpis egestas maecenas pharetra convallis.
            Ultrices sagittis orci a scelerisque purus semper eget. 
            In hac habitasse platea dictumst quisque sagittis purus sit. 
            Nunc consequat interdum varius sit amet.
            Vivamus arcu felis bibendum ut tristique et egestas. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. 
            Feugiat scelerisque varius morbi enim nunc faucibus a.</p>
            <Button style={{ marginTop: "2%" }} size="lg" variant="outline-danger">Dowiedz się więcej</Button>
            <hr style={{ marginTop: "21%", borderColor: "red", }}></hr>
        </div>
      </Container>
    </div>
  );
}