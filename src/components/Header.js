import React from "react";
// import { Link } from "react-router-dom";
import styled from 'styled-components';
// import dreamImage from "./../img/dream.png";

const DreamJournalHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
`;

const StyledWrapper = styled.section`
  background-color: lightblue;
`;

function Header(){
  return (
    <StyledWrapper>
      <DreamJournalHeader>
        Dream Journal
        {/* <img src={dreamImage} alt="An image of " /> */}
      </DreamJournalHeader>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul> */}
      </StyledWrapper>
  );
}

export default Header;