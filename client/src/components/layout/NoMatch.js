import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Styles = styled.div`
    .error-page {
        color: red;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`;

const NoMatch = () => {
    return (
        <Styles>
        <div>
        <h1 className="error-page">Error 404. Not Found</h1>
        <center><Link to="/">Return to Home Page</Link></center>
        </div>
        </Styles>
    )
  
}

export default NoMatch;
