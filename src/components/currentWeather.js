import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WeatherWrapper = styled(Container)`
    margin: auto;
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

function CurrentWeather(props) {

    const sunrise = new Date(props.weather.sys.sunrise * 1000);
    const sunset = new Date(props.weather.sys.sunset * 1000);
    const dayTime = new Date(props.weather.dt * 1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const degree = String.fromCharCode(176);
    const imgurl = 'https://openweathermap.org/img/wn/';

    return(
        <WeatherWrapper>
            <Row className="centerRow space">
                <h1>Current Weather in {props.weather.name}</h1>
            </Row>
            <hr></hr>
            <Row className="centerRow">
            <h2>{days[dayTime.getDay()]}, {months[dayTime.getMonth()]} {dayTime.getDate()}</h2>
            </Row>
            <Row>
                <Col>
                    <img src={`${imgurl}${props.weather.weather[0].icon}@4x.png`} alt="Weather Pic"/>
                </Col>
                <Col>
                    <Row className="space">
                        <h4>Temperature</h4>
                    </Row>
                    <Row className="space">
                        <Col><h5>Current: </h5></Col>
                        <Col><h5>{Math.round(props.weather.main.temp)}{degree}</h5></Col>
                    </Row>
                    <Row className="space">
                        <Col><h5>Feels Like:</h5></Col>
                        <Col><h5>{Math.round(props.weather.main.feels_like)}{degree}</h5></Col>
                    </Row>

                </Col>
            </Row>
            <Row className="space">
                <Col>
                    <Row>
                        <Col>
                            <h5>Max Temp: </h5>
                        </Col>
                        <Col>
                            <h5>{props.weather.main.temp_max}{degree}</h5>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h5>Min Temp: </h5>
                        </Col>
                        <Col>
                            <h5>{props.weather.main.temp_max}{degree}</h5>
                        </Col>
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
                            <h5>{props.weather.weather[0].description}</h5>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h5>Humidity: </h5>
                        </Col>
                        <Col>
                            <h5>{props.weather.main.humidity}%</h5>
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
                            <h5>{props.weather.wind.speed} mph</h5>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h5>Pressure: </h5>
                        </Col>
                        <Col>
                            <h5>{props.weather.main.pressure} hPa</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="space spacebottom">
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
        </WeatherWrapper>
    )
}

export default CurrentWeather;