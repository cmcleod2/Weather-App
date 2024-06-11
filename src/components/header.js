import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const StyledHeader = styled(Navbar)`
    color: white;
    background-color: #282c34;
    height: 50px;

    .bg-dark {
        background-color: #282c34;
    }
    .roundicon {
        border-radius: 7px;
    }
    .space {
        margin-right: 1em;
    }

`

function Header(props) {
    const history = useNavigate();

    function isValidUSZip(sZip) {
        return /^\d{5}(-\d{4})?$/.test(sZip);
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

    return (
        <StyledHeader className="darkbg" variant="dark" expand="lg">
            <Navbar.Brand href="#/">
                <img
                    src={`${process.env.PUBLIC_URL}/weather-icon.png`}
                    width="30"
                    height="30"
                    className="d-inline-block align-top roundicon"
                    alt="Weather App Icon"
                />
            </Navbar.Brand>
            <Navbar.Brand href="#/">Weather App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href={`#/current/${props.zipcode}`}>Current</Nav.Link>
                    <Nav.Link href={`#/forecast/${props.zipcode}`}>Forecast</Nav.Link>
                </Nav>
                <Form inline="true" onSubmit={handleSubmit}>
                    <Navbar.Text>
                        Current Zipcode: <a className="space" href={`#/current/${props.zipcode}`}>{props.zipcode}</a>
                    </Navbar.Text>
                    <Form.Control
                        type="number"
                        placeholder="Enter Zipcode"
                        className="mr-sm-2"
                        minLength='5'
                        maxLength='5' />
                    <Button type="submit" variant="outline-info">Get Weather</Button>
                </Form>
            </Navbar.Collapse>
        </StyledHeader>
    )
}

export default Header;
