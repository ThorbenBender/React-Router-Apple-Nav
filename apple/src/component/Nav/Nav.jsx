import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import AnimatedWrapper from "../AnimatedWrapper";

const StyledNav = styled(NavLink)`
	color: white;
	text-decoration: none;
	display: flex;
    align-items: center;
    &.active {
        color: grey;
    }
`;

const Nav = props => {
	return <StyledNav to={`/${props.name}`}>{props.name}</StyledNav>;
};

const AnimatedNav = AnimatedWrapper(Nav);

export default AnimatedNav;
