import styled from 'styled-components';

const StyledOrganizer = styled.div`
    flex-grow: 1;
    text-align: center;
    background-size: cover;
    background-position: center;
    padding-bottom: 2.5em;

    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    align-content: stretch;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`

export {StyledOrganizer};