import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: #282c34;
    color: white;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    text-align: center;
    position: absolute;
    left:0;
    bottom:0;
    right:0;
`

function Footer() {
    return (
        <StyledFooter>
            <div>Weather App {'\u00A9'} Chris McLeod</div>
        </StyledFooter>
    )
}

export default Footer;