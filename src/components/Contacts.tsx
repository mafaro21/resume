import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { Row, Col } from 'antd';

export default function Contacts() {
    return (
        <div className="contact-bg">
            <h1 className="text">Contact Details</h1>
            {/* <FontAwesomeIcon icon={faGithub} size="2x" />
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <FontAwesomeIcon icon={faEnvelope} size="2x" /> */}

            <Row justify="space-around">
                <Col xs={24} sm={4} md={6} className="contact" >
                    <a href="https://github.com/mafaro21" target="_blank" rel="noreferrer" className="contact">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                        <div>github.com/mafaro21</div>
                    </a>
                </Col>

                <Col xs={24} sm={4} md={6} className="contact">
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                    <div>(+86) 155 0406 4929</div>
                </Col>

                <Col xs={24} sm={4} md={6} className="contact">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    <div>mafaro2105@gmail.com</div>
                </Col>
            </Row>


        </div>
    )
}
