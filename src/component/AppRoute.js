import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';
import HelpPage from './HelpPage';
import CreatePage from "./CreatePage";





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
