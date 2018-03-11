import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';
import HelpPage from '../component/HelpPage';
import CreatePage from "../component/CreatePage";






const AppRoute = (props) => {

    return (
        <BrowserRouter>
            <div>
                <Route path={`/`} exact={true} component={HelpPage}/>
                <Route path={`/create`} component={CreatePage}/>
                <Route path={edit} component={}/>

            </div>
        </BrowserRouter>
    );


};


AppRoute.propTypes = {};

export default AppRoute;
