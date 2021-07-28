import React from 'react';
import './Footer.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from '@material-ui/core';
import { FaHeartbeat } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { BsBootstrapFill } from 'react-icons/bs';
import BackgroundPills from '../assets/images/pills.jpg';

export default function Footer() {
    return(
        <div className="footer" style={{ overflowX: "hidden", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh', 
        backgroundImage: "url(" + BackgroundPills + ")" }}>
            <Row style={{ marginTop: "12%" }}>
                <Col className="column-class">
                    <h2 className="header-class">
                        <FaHeartbeat className="icons-class"/>
                        Apteka Online
                    </h2>
                    <p className="text-class">All copyrights reserved 2021.</p>
                </Col>
                <Col className="column-class">
                    <h2 className="header-class">Kontakt</h2>
                    <p className="text-class">
                        <FiMapPin className="icons-class"/>
                        Tarnów, ul. Gumniska 94 <br />
                        <AiOutlineMail className="icons-class"/>
                        kontakt@apteka.online.pl <br /> 
                        <AiOutlinePhone className="icons-class"/>
                        692 721 022 
                    </p>
                </Col>
                <Col className="column-class">
                    <h2 className="header-class">Aplikacja</h2>
                    <p className="text-class">
                        <FaReact className="icons-class"/>
                        React.js
                        <br />
                        <BsBootstrapFill className="icons-class"></BsBootstrapFill>
                        Bootstrap
                        <br />
                    </p>
                </Col>
                <Col className="column-class">
                    <Link className="links" to=""><FaFacebookSquare className="icons-class"/></Link>
                    <Link className="links" to=""><FaTwitter className="icons-class"/></Link>
                </Col>
            </Row>
        </div>
    );
}