import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HourlyContainer = styled(Card)`
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.45);

    .cursor {
        cursor: pointer;
    }

    .spacing {
        display: flex;
        justify-content: space-between;
    }
    .makerow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .colspace {
        margin-top: 1.5em;
        padding-right: 0.5em;
        padding-left: 0.5em;
    }
    .nopad {
        padding: 0;
    }
    .textleft {
        text-align: left;
    }
    .textright {
        text-align: right;
    }
`

function HourlyWeather(props) {
    const dayTime = new Date(props.hour.dt * 1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const imgurl = 'https://openweathermap.org/img/wn/';
    const degree = String.fromCharCode(176);

    return (
        <HourlyContainer>
            <Accordion.Toggle className="cursor" as={Card.Header} eventKey={props.idx + 1}>
                <div className="spacing">
                    <h5>{dayTime.toLocaleTimeString([], {timeStyle: 'short'})}</h5>
                    <img src={`${imgurl}${props.hour.weather[0].icon}.png`} alt="weatherpic"/>
                    <h5>{days[dayTime.getDay()]}, {months[dayTime.getMonth()]} {dayTime.getDate()}</h5>
                </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.idx + 1}>
                <Container className="nopad">
                    <Row noGutters>
                        <Col className="nopad">
                            <img src={`${imgurl}${props.hour.weather[0].icon}@4x.png`} alt="weatherpic"/>
                            <div>
                                <h5>{props.hour.weather[0].main}</h5>
                            </div>
                        </Col>
                        <Col>
                            <Col className="colspace">
                                <Row>
                                    <Col md="auto" className="textleft"><h5>Temp: </h5></Col>
                                    <Col className="textright"><h5>{Math.round(props.hour.temp)}{degree}</h5></Col>
                                </Row>
                            </Col>
                            <Col className="colspace">
                                <Row>
                                    <Col md="auto" className="textleft"><h5>Expect: </h5></Col>
                                    <Col className="textright"><h5>{props.hour.weather[0].description}</h5></Col>
                                </Row>
                            </Col>
                            <Col className="colspace">
                                <Row>
                                    <Col md="auto" className="textleft"><h5>UV Index: </h5></Col>
                                    <Col className="textright"><h5>{props.hour.uvi}</h5></Col>
                                </Row>
                            </Col>
                        </Col>
                        <Col>
                            <Col className="colspace">
                                <Row>
                                    <Col md="auto" className="textleft"><h5>Feels Like: </h5></Col>
                                    <Col className="textright"><h5>{Math.round(props.hour.feels_like)}{degree}</h5></Col>
                                </Row>
                            </Col>
                            <Col className="colspace">
                                <Row>
                                    <Col md="auto" className="textleft"><h5>Humidity: </h5></Col>
                                    <Col className="textright"><h5>{props.hour.humidity}%</h5></Col>
                                </Row>
                            </Col>
                            <Col className="colspace">
                                <Row>
                                    <Col md="auto" className="textleft"><h5>Wind Speed: </h5></Col>
                                    <Col className="textright"><h5>{props.hour.wind_speed} mph</h5></Col>
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </Accordion.Collapse>
        </HourlyContainer>
    )
}

export default HourlyWeather;