import React from 'react'
import { Row, Col, Carousel, Image, Divider, Progress } from 'antd';
import twitclone from '../images/twitclone.png'
import twit2 from '../images/twit2.png'
import twit3 from '../images/twit3.png'
import twit4 from '../images/twit4.png'
import real1 from '../images/real1.png'
import real2 from '../images/real2.png'
import real3 from '../images/real3.png'
import real4 from '../images/real4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';

export default function Projects() {


    let project = [
        {
            title: 'TwitClone',
            link: 'https://twitclone.netlify.app',
            progress: 86,
            img: twitclone,
            img2: twit2,
            img3: twit3,
            img4: twit4,
            desc1: 'TwitClone is a social media web-app based on the site Twitter. \nThe main purpose is for people to connect with friends and or family and catch up on what is going on in their lives.',
            desc2: 'A bonus is to give people the chance to meet someone completely new or a friend of a friend.',
            built: 'React, Express, Node and MongoDB.',
            features: 'following/unfollowing, tweeting, liking, retweeting.'
        },
        {
            title: 'RealEstate (Ongoing)',
            progress: 77,
            img: real1,
            img2: real2,
            img3: real3,
            img4: real4,
            desc1: 'RealEstate is a real estate, e-commerce web system which looks to help users find houses/apartments for either rent or sale',
            desc2: 'Users can view property and get into contact with agents',
            built: 'PHP, MySQL and StripeAPI',
            features: 'adding to cart'
        },
        {
            title: 'Wedemy (Ongoing)',
            progress: 6,
            img: twitclone,
            desc1: 'Wedemy is a clone of the e-learning site Udemy.',
            desc2: 'The site is currently being developed',
            built: 'Vue, Java Springboot and MySQL',
            features: '.....'
        }
    ]

    return (
        <div style={{ marginTop: '30px' }} className="wrapper">
            <h1 className="text">Projects</h1>

            {project.map((item) => (
                <>

                    <a href={item.link} target="_blank" rel="noreferrer" >
                        <h2 style={{ textDecoration: 'underline' }} className="text project-link">{item.title}
                            {item.title === 'TwitClone' ? <FontAwesomeIcon icon={faExternalLinkAlt} /> : null}
                        </h2>
                    </a>


                    <Row>
                        <Col xs={24} xl={12}>
                            <Image.PreviewGroup>
                                <Carousel autoplay>
                                    <div>
                                        <Image src={item.img}
                                            alt='project-preview-1'
                                            className="projects-img"
                                        />
                                    </div>
                                    <div>
                                        <Image src={item.img2}
                                            alt='project-preview-2'
                                            className="projects-img"
                                        />
                                    </div>
                                    <div>
                                        <Image src={item.img3}
                                            alt='project-preview-3'
                                            className="projects-img"
                                        />
                                    </div>
                                    <div>
                                        <Image src={item.img4}
                                            alt='project-preview-4'
                                            className="projects-img"
                                        />
                                    </div>

                                </Carousel>
                            </Image.PreviewGroup>

                        </Col>
                        <Col xs={24} xl={12}>
                            <div className="project-detail p-3" >
                                <p>{item.desc1}</p>
                                <p>{item.desc2}</p>
                                <p style={{ width: '50%', fontWeight: 700, display: 'flex' }}>
                                    <span style={{ paddingRight: '10px' }}>Status: </span>
                                    <Progress percent={item.progress} />
                                </p>
                                <p><span style={{ fontWeight: 700 }}>Built with: </span> {item.built}</p>
                                <p><span style={{ fontWeight: 700 }}>Features include: </span>{item.features} </p>
                            </div>

                        </Col>
                    </Row>
                    <Divider />
                </>
            ))}

        </div>
    )
}
