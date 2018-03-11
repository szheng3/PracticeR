import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Expensify</h1>

                <Link to="/">DashBoard</Link>
                <Link to={`/create`}>Create Expense</Link>
                <Link to={`/edit`}>Edit Expense</Link>
                <Link to={`/help`}>Help</Link>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
