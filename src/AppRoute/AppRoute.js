import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HelpPage from '../component/HelpPage';
import CreatePage from "../component/CreatePage";
import EditorPage from "../component/EditorPage";
import DashBoard from "../component/DashBoard";
import NotFoundPage from "../component/NotFoundPage";
import Header from "../component/Header";


const AppRoute = (props) => {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>

                    <Route path={`/`} exact={true} component={DashBoard}/>
                    <Route path={`/create`} component={CreatePage}/>
                    <Route path={`/edit`} component={EditorPage}/>
                    <Route path={`/help`} component={HelpPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>

        </BrowserRouter>
    );


};


AppRoute.propTypes = {};

export default AppRoute;
