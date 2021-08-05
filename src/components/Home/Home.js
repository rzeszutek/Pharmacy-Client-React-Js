import React from 'react';
import './Home.css';
import ScrollButton from '../ScrollButton/ScrollButton';
import Background from '../../assets/images/backgroundimage.jpg';
import Pharmacy from '../../assets/images/pharmacy.jpg';
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
                height: "450px"
              }}>
          <Row style={{
            paddingTop: "100px"
          }}>
            <Col sm={8} style={{
              display: "flex",
              justifyContent: "center"
            }}> 
              <div>
                <h1 style={{ fontWeight: "bold" }}>Apteka Online</h1>
                <p style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, <br /> 
                    consectetur adipiscing elit. 
                </p>
                <Button className="loginButton" href="/login" variant="danger" size="md" style={{ 
                  marginRight: "20px"
                }}>Zaloguj się</Button>
                <Button href="/signup" variant="outline-danger" size="md">Zarejestruj się</Button>
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
            justifyContent: "center",
          }}>
            <Col sm={8} md={4} style={{ width: "350px"}}>
              <FontAwesomeIcon icon={faPills} size="3x" className="label-icon"/>
              <h5 className="label-header">Leki</h5>
              <p className="label-text">Suspendisse ultrices gravida dictum fusce.
                  Eget dolor morbi non arcu. Bibendum arcu vitae
                  elementum curabitur vitae nunc sed. </p>
                  <Button className="btn btn-danger">Więcej</Button>
            </Col>
            <Col sm={8} md={4} style={{ width: "350px"}}>
              <FontAwesomeIcon icon={faStarOfLife} size="3x" className="label-icon"/>
              <h5 className="label-header">Sprzęt</h5>
              <p className="label-text">Venenatis urna cursus eget nuncscelerisque
                viverra. Posuere lorem ipsum dolor sit. Fames
                ac turpis egestas integer eget.  </p>
                <Button className="btn btn-danger">Więcej</Button>
            </Col>
            <Col sm={8} md={4} style={{ width: "350px"}}> 
              <FontAwesomeIcon icon={faPhone} size="3x" className="label-icon"/>
              <h5 className="label-header">Teleporada</h5>
              <p className="label-text">Nulla facilisi cras fermentum odio eu feugiat
                  pretium nibh ipsum. Aliquam id diam maecenas
                  ultricies mi eget mauris. </p>
                <Button className="btn btn-danger">Więcej</Button>
            </Col>
          </Row>
        </div>
        <div>
          <Row style={{
              backgroundImage: `url(${Pharmacy})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#ADD8E6",
              height: "600px"
            }}>
            <Col style={{
              marginTop: "50px"
            }}>
              <div className="services-wrapper">
              <h1 style={{ fontWeight: "bold"}}>Usługi</h1>
              <ul className="list-wrapper">
                <li><BiRightArrowAlt className="list-element"/><a className="a-wrapper">Cursus risus at ultrices.</a></li>
                <li><BiRightArrowAlt className="list-element"/><a className="a-wrapper">Mattis pellentesque id nibh tortor id aliquet.</a></li>
                <li><BiRightArrowAlt className="list-element"/><a className="a-wrapper">Varius quam quisque id diam vel quam elementum.</a></li>
                <li><BiRightArrowAlt className="list-element"/><a className="a-wrapper">Ornare massa eget egestas purus.</a></li>
                <li><BiRightArrowAlt className="list-element"/><a className="a-wrapper">Pretium aenean pharetra.</a></li>
              </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="who-wrapper">
          <div>
            <h1 style={{ color: "red", paddingTop: "100px" }}>Kim jesteśmy?</h1>
            <span className="span-wrapper"></span>
            <p style={{ fontWeight: "500", lineHeight: "30px" }}>Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. 
              Et malesuada fames ac turpis egestas maecenas pharetra convallis.
              Ultrices sagittis orci a scelerisque purus semper eget. 
              In hac habitasse platea dictumst quisque sagittis purus sit. 
              Nunc consequat interdum varius sit amet.
              Vivamus arcu felis bibendum ut tristique et egestas.</p>
            <span className="span-wrapper"></span>
            <Button size="lg" variant="outline-danger">Dowiedz się więcej</Button>
          </div>  
        </div>
      </Container>
      <ScrollButton></ScrollButton>
    </div>
  );
}