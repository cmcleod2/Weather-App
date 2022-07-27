import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    width: 10rem;
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 20px;
    margin: 1em;
    max-height: 17.5rem;
    cursor: pointer;
    box-shadow: 0 0 11px rgba(33,33,33,.2);

    :hover {
        background-color: rgba(255, 255, 255, 0.50);
        box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
    }

    .card-header {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .card-footer {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`

function ForecastCard(props) {

    const day = new Date(props.day.dt * 1000);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const imgurl = 'https://openweathermap.org/img/wn/';

    const degree = String.fromCharCode(176);

    return(
        <StyledCard onClick={() => props.changeDay(props.daynum)}>
            <Card.Header as="h5">{days[day.getDay()]}<br></br>{months[day.getMonth()]} {day.getDate()}</Card.Header>
            <Card.Img src={`${imgurl}${props.day.weather[0].icon}@4x.png`}/>
            <Card.Footer>
                {Math.round(props.day.temp.max)}{degree} | {Math.round(props.day.temp.min)}{degree}
            </Card.Footer>
        </StyledCard>
    )
}

export default ForecastCard;