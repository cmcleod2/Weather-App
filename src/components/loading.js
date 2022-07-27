import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

const LoadingWrapper =styled.div`
    position: absolute;
    width: 100%;

    .contentwrap {
        background-color: rgba(255, 255, 255, 0.45);
        border-radius: 20px;
        padding: 2em;
        max-height: 200px;
        max-width: 400px;
        margin: auto;
        margin-top: 3em;
        box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
    }

    .loading-text {
        padding: 2em;
        font-size: large;
    }
`

function Loading() {
    return (
        <LoadingWrapper>
            <div className="contentwrap">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <div className="loading-text"><strong>Getting Weather Information</strong></div>
            </div>
        </LoadingWrapper>
    )
}

export default Loading;
