import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyledDay = styled(Container)`
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 20px;
    margin-top: 2em;
    margin-bottom: 2em;
    max-width: 600px;
    min-width: 250px;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

    .centerRow {
        justify-content: center;
    }

    .space {
        padding-top: 1em;
    }

    .spacebottom {
        padding-bottom: 1em;
    }
`

function Dayinfo(props) {
    const day = props.weather.daily[props.daytracker];
    const degree = String.fromCharCode(176);
    const dayTime = new Date(day.dt * 1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const sunrise = new Date(day.sunrise * 1000);
    const sunset = new Date(day.sunset * 1000);
    const moonrise = new Date(day.moonrise * 1000);
    const moonset = new Date(day.moonset * 1000);
    const imgurl = 'https://openweathermap.org/img/wn/';

    return (
        <StyledDay>
            <Row className="centerRow space">
                <h1>Forecasted Weather in {props.city}</h1>
            </Row>
            <hr></hr>
            <Row className="centerRow">
                <h2>{days[dayTime.getDay()]}, {months[dayTime.getMonth()]} {dayTime.getDate()}</h2>
            </Row>
            <Row>
                <Col>
                    <img src={`${imgurl}${day.weather[0].icon}@4x.png`} alt="Weather Pic"/>
                </Col>
                <Col>
                    <Row className="space">
                        <h4>Temperature</h4>
                    </Row>
                    <Row className="space">
                        <Col><h5>High: </h5></Col>
                        <Col><h5>{Math.round(day.temp.max)}{degree}</h5></Col>
                    </Row>
                    <Row className="space">
                        <Col><h5>Low:</h5></Col>
                        <Col><h5>{Math.round(day.temp.min)}{degree}</h5></Col>
                    </Row>

                </Col>
            </Row>
            <Row className="space">
                <Col>
                    <Row>
                        <Col>
                            <h5>Expect: </h5>
                        </Col>
                        <Col>
                            <h5>{day.weather[0].description}</h5>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h5>Humidity: </h5>
                        </Col>
                        <Col>
                            <h5>{day.humidity}%</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="space">
                <Col>
                    <Row>
                        <Col>
                            <h5>Wind Speed: </h5>
                        </Col>
                        <Col>
                            <h5>{day.wind_speed} mph</h5>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h5>UV Index: </h5>
                        </Col>
                        <Col>
                            <h5>{day.uvi} mph</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="space">
                <Col>
                    <Row>
                        <Col>
                            <h5>Sunrise: </h5>
                        </Col>
                        <Col>
                            <h5>{sunrise.toLocaleTimeString([], {timeStyle: 'short'})}</h5>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h5>Sunset: </h5>
                        </Col>
                        <Col>
                            <h5>{sunset.toLocaleTimeString([], {timeStyle: 'short'})}</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="space spacebottom">
                <Col>
                    <Row>
                        <Col>
                            <h5>Moonrise: </h5>
                        </Col>
                        <Col>
                            <h5>{moonrise.toLocaleTimeString([], {timeStyle: 'short'})}</h5>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h5>Moonset: </h5>
                        </Col>
                        <Col>
                            <h5>{moonset.toLocaleTimeString([], {timeStyle: 'short'})}</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </StyledDay>
    )
}

export default Dayinfo;
