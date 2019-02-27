import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SubNav from './SubNav';
import { Route } from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedNav from './Nav';
import AnimatedSubNav from './SubNav';

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
let firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

const NavWrapper = props => {
  return (
    <div>
        <StyledNavWrapperContainer>
        <StyledNavWrapper>
            {props.data.map(d => (
            <AnimatedNav name={d.name} subLinks={d.subLinks} />
            ))}
        </StyledNavWrapper>
        </StyledNavWrapperContainer>
        {props.data.map((d, idx) => (
        <Route path={`/${d.name}`} render={props => <SubNav {...props} subLinks={d.subLinks} />} />
        ))}
    </div>
    );
};

export default NavWrapper;
