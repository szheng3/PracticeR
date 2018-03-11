import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Expensify</h1>

                <NavLink to={`/`} activeClassName="is-active" exact={true}>DashBoard</NavLink>
                <NavLink to={`/create`} activeClassName="is-active">Create Expense</NavLink>
                <NavLink to={`/edit`} activeClassName="is-active">Edit Expense</NavLink>
                <NavLink to={`/help`} activeClassName="is-active">Help</NavLink>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
