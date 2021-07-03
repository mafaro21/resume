import React from 'react'
import { Row, Col, Card, Carousel } from 'antd';
import twitclone from '../images/twitclone.png'
import twit2 from '../images/twit2.png'
import twit3 from '../images/twit3.png'
import twit4 from '../images/twit4.png'

export default function Projects() {



    return (
        <div style={{ marginTop: '30px' }} className="">
            <h1>Projects</h1>

            <p >Twitclone</p>
            <Row>

                <Col xs={24} xl={12}>
                    <Carousel autoplay >
                        <div>
                            <img src={twitclone}
                                alt='test'
                                className="projects-img"
                            />
                        </div>
                        <div>
                            <img src={twit2}
                                alt='test'
                                className="projects-img"
                            />
                        </div>
                        <div>
                            <img src={twit3}
                                alt='test'
                                className="projects-img"
                            />
                        </div>
                        <div>
                            <img src={twit4}
                                alt='test'
                                className="projects-img"
                            />
                        </div>
                    </Carousel>

                    {/* <img src={twitclone}
                        alt='test'
                        className="projects-img"
                    /> */}
                </Col>
                <Col xs={24} xl={12}>
                    <div style={{ textAlign: 'left' }}>
                        <p>TwitClone is a social media web-app based on the site 'Twitter'</p>
                    </div>

                </Col>
            </Row>
        </div>
    )
}
