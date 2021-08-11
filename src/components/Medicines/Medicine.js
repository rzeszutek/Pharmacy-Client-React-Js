import React from 'react';
import './Medicine.css';
import CardData from '../../CardData.js';
import { Card, Col, Form, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

export default function Medicine() {
    return (
        <div className="medicines-container">
            <div className="medicine-search">
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Wpisz nazwę leku"
                    aria-label="Medicine's name"
                    aria-describedby="Medicine's name"
                    />
                    <Button variant="danger" id="button">
                    Szukaj
                    </Button>
                </InputGroup>  
            </div>
            <Row>      
                <Col sm={3}>

                </Col>
                <Col sm={9}>
                    
                    <Row className="medicine-wrapper">
                        {CardData.map((props)=>{
                            return(
                                    <Card border="danger" style={{ width: '18em' }}>
                                        <Card.Img variant="top" src={props.img}/>
                                        <Card.Body>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Card.Title>{props.title}</Card.Title>
                                            <Card.Title>{props.price}</Card.Title>
                                        </div>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <Button variant="outline-danger center">Do koszyka</Button>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                );
                            }
                        )
                    }
                    </Row>      
                </Col>
            </Row>
            
        </div>
    );
}