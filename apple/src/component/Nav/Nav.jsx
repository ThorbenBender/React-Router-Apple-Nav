import React from 'react';
import { NavLink } from 'react-router-dom';
import navbar from '../../data';

export default class Nav extends React.Component {
    state = { navbar: navbar };

    render() {
        return <div>{this.state.navbar.map((nav) => <NavLink>{nav.title}</NavLink>)}</div>;
    }
}