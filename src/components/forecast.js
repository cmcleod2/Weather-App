import React , {useState, useEffect} from 'react';
import { useRouteMatch } from 'react-router';
import ForecastCard from './forecastCard';
import DayInfo from './dayinfo';
import Loading from './loading';
import {StyledOrganizer} from '../App.styles';
import styled from 'styled-components';

const ForecastOrganizer = styled(StyledOrganizer)`
    background-image: url(${`${process.env.PUBLIC_URL}/media/Y_mountain2.JPG`});
`
const InfoContainer = styled.div`
    flex: 1 1 50%;
    flex-grow: 1;
    margin: auto;
    width: 50%;

    @media (max-width: 900px) {
        width: 75%;
    }
`
const ForecastWrapper = styled.div`
    flex: 1 1 50%;
    flex-grow: 1;
    opacity: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1em 0 0 0;
    overflow: auto;

    @media (max-width: 900px) {
        overflow: visible;
    }
`

const APIkey = `121cea1337eef132d8705ca95fe98a38`;
const url = 'https://api.openweathermap.org/data/2.5/';

function Forecast() {
    const [units, setUnits] = useState('imperial');
    const [isLoading, setIsLoading] = useState(true);
    const [fiveDayHourWeather, setFiveDayHourWeather] = useState();
    const [fiveDayWeather, setFiveDayWeather] = useState();
    const [latitude, setLatitude] = useState(40.2338);
    const [longitude, setLongitude] = useState(-111.6585);
    const [daytracker, setDayTracker] = useState(0);
    let match = useRouteMatch('/forecast/:zip');


    useEffect(() => {
        fetch(`${url}forecast?zip=${match.params.zip},us&units=${units}&appid=${APIkey}`)
            .then(res => res.json())
            .then(response => {
                setFiveDayHourWeather(response);
                setLatitude(response.city.coord.lat);
                setLongitude(response.city.coord.lon);
                fetch(`${url}onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${APIkey}`)
                    .then(res => res.json())
                    .then(response => {
                        setFiveDayWeather(response);
                        setIsLoading(false);
                    })
            })
            .catch(error => console.log(error));
    }, [latitude, longitude, match.params.zip, units]);


    return(
        <ForecastOrganizer>
            {isLoading && <Loading />}
            <InfoContainer>
                {isLoading || <DayInfo city={fiveDayHourWeather.city.name} daytracker={daytracker} weather={fiveDayWeather}/>}
            </InfoContainer>
            <ForecastWrapper>
                {isLoading ||
                    fiveDayWeather.daily.map((day, idx) =>
                    <ForecastCard
                        key={idx}
                        day={day}
                        daynum={idx}
                        changeUnits={setUnits}
                        changeDay={setDayTracker}
                    />)}
            </ForecastWrapper>
        </ForecastOrganizer>
    )
}

export default Forecast;