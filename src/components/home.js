import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {StyledOrganizer} from '../App.styles'
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";

const HomeOrganizer = styled(StyledOrganizer)`
    background-image: url(${`${process.env.PUBLIC_URL}/media/Y_mountain2.JPG`});
`

const TitleContainer = styled.div`
    flex: 1 1 50%;
`

const CityContainer = styled.div`
    flex: 1 1 50%;
`

const Title = styled.div`
    margin: auto;
    margin-top: 2.5em;
    padding: 1em;
    max-width: 500px;
    border-radius: 20px;
    line-height: 2;
    font-size: xx-large;
    background-color: rgba(255, 255, 255, 0.35);
    text-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

const CityForm = styled(Form)`
    background-color: rgb(40, 44, 52, 0.9); //#282c34;
    color: white;
    padding: 1em 1em 1em;
    max-width: 300px;
    min-width: fit-content;
    margin: auto;
    margin-top: 5em;
    margin-bottom: 1em;
    border-radius: 25px;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

const Divider = styled.div`
    .separator {
        display: flex;
        align-items: center;
        text-align: center;
    }
    .separator::before,
    .separator::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #FFF;
    }
    .separator:not(:empty)::before {
        margin-right: .25em;
    }
    .separator:not(:empty)::after {
        margin-left: .25em;
    }
`

function Home(props) {
    const history = useHistory();

    function isValidUSZip(sZip) {
        return /^\d{5}(-\d{4})?$/.test(sZip);
    }

    const validateZip = (zip) => {
        if (isValidUSZip(zip)) {
            props.setZipcode(zip);
        } else {
            alert("Please Enter Valid Zip")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let zip = e.target[0].value;
        if (isValidUSZip(zip)) {
            props.setZipcode(zip);
            history.replace(`/current/${zip}`);
        } else {
            alert("Please Enter Valid Zip")
        }
    };

    return(
        <HomeOrganizer>
            <TitleContainer>
                <Title>
                    <p><strong>Weather You Like it or Not You NEED to Know the Weather!</strong></p>
                </Title>
            </TitleContainer>
            <CityContainer>
                <CityForm onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="zip">Enter a Zipcode:</Form.Label>
                        <Form.Control
                            name="zip"
                            type='number'
                            placeholder="Enter Zipcode"
                            onBlur={e => validateZip(e.target.value)}
                            minLength='5'
                            maxLength='5'
                        />
                    </Form.Group>
                    <Divider className="separator">
                        <h5>Or</h5>
                    </Divider>
                    <Form.Group>
                        <Form.Label htmlFor="city">Choose a City:</Form.Label>
                        <Form.Control as="select" name="city" onChange={e => props.setZipcode(e.target.value)}>
                            <option value='84604'>Provo</option>
                            <option value='84088'>West Jordan</option>
                            <option value='84770'>St. George</option>
                            <option value='84103'>Salt Lake City</option>
                            <option value='96816'>Honolulu</option>
                            <option value='99501'>Anchorage</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Link className='btn btn-outline-info' to={`/current/${props.zipcode}`}>Get Current Weather</Link>
                    </Form.Group>
                    <Form.Group>
                        <Link className='btn btn-outline-info' to={`/forecast/${props.zipcode}`}>Get Forecasted Weather</Link>
                    </Form.Group>
                </CityForm>
            </CityContainer>
        </HomeOrganizer>
    )
}

export default Home;