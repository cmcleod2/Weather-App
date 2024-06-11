import React , {useState, useEffect} from 'react';
import { useMatch } from 'react-router';
import CurrentWeather from './currentWeather';
import HourlyWeather from './hourlyweather';
import Loading from './loading';
import Accordion from 'react-bootstrap/Accordion';
import {StyledOrganizer} from '../App.styles';
import styled from 'styled-components';

const CurrentOrganizer = styled(StyledOrganizer)`
    background-image: url(${`${process.env.PUBLIC_URL}/media/Y_mountain2.JPG`});
`
const CurrentWrapper = styled.div`
    flex: 1 1 50%;
    margin: auto;
    width: 50%;

    @media (max-width: 900px) {
        width: 75%;
    }
`

const HourlyWrapper = styled.div`
    flex: 1 1 50%;
    height: 100%;
    overflow: auto;

    @media (max-width: 900px) {
        overflow: visible;
    }
`
const StyledAccordion = styled(Accordion)`
    margin: 1em;
    box-shadow: 0 0 11px rgba(33,33,33,.4);
    border-radius: 20px;
`

const APIkey = `121cea1337eef132d8705ca95fe98a38`;
const url = 'https://api.openweathermap.org/data/2.5/'

function Current() {
    //const [countryCode, setcountryCode] = useState('us');
    const [units, setUnits] = useState('imperial');
    const [isLoading, setIsLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState();
    const [hourlyWeather, setHourlyWeather] = useState();
    const [latitude, setLatitude] = useState(40.2338);
    const [longitude, setLongitude] = useState(-111.6585);
    let match = useMatch('/current/:zip');

    useEffect(() => {
        fetch(`${url}weather?zip=${match.params.zip},us&units=${units}&appid=${APIkey}`)
            .then(res => res.json())
            .then(response => {
                console.log('Current:', response);
                setCurrentWeather(response);
                setLatitude(response.coord.lat);
                setLongitude(response.coord.lon);
                fetch(`${url}onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${APIkey}`)
                    .then(res => res.json())
                    .then(response => {
                        console.log('All Info:', response);
                        setHourlyWeather(response);
                        setIsLoading(false);
                    })
            })
            .catch(error => console.log(error));
    }, [latitude, longitude, match.params.zip, units]);


    return(
        <CurrentOrganizer>
            {isLoading && <Loading />}
            <CurrentWrapper>
                {isLoading || <CurrentWeather weather={currentWeather} changeUnits={setUnits}/>}
            </CurrentWrapper>
            <HourlyWrapper>
                <StyledAccordion>
                    {isLoading ||
                        hourlyWeather.hourly.map((hour, idx) =>
                            <HourlyWeather
                                key={idx}
                                hour={hour}
                                idx={idx}
                                changeUnits={setUnits}
                            />
                        )
                    }
                </StyledAccordion>
            </HourlyWrapper>
        </CurrentOrganizer>
    )
}

export default Current;