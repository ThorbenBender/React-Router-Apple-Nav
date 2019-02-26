import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SubNav from './SubNav';
import { Route } from 'react-router-dom';

const StyledNavWrapper = styled.div`
  width: 50%;
  color: white;
  height: 44px;
  display: flex;
  justify-content: space-between;
  /* padding: 10px; */
  font-size: 14px;
  margin: 0 auto;
`;

const StyledNavWrapperContainer = styled.div`
    width: 100%;
    background-color: #323232;
    position: fixed;
    top: 0;
    left: 0;

`
const NavWrapper = props => {
  return (
    <div>
        <StyledNavWrapperContainer>
        <StyledNavWrapper>
            {props.data.map(d => (
            <Nav name={d.name} subLinks={d.subLinks} />
            ))}
        </StyledNavWrapper>
        </StyledNavWrapperContainer>
        {props.data.map((d, idx) => (
        <Route path={`/${d.name}`} render={props => <SubNav key={idx} {...props} subLinks={d.subLinks} />} />
        ))}
    </div>
    );
};

export default NavWrapper;
