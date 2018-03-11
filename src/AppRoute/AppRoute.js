import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HelpPage from '../component/HelpPage';
import CreatePage from "../component/CreatePage";
import EditorPage from "../component/EditorPage";
import DashBoard from "../component/DashBoard";


const AppRoute = (props) => {

    return (
        <BrowserRouter>
            <div>
                <Route path={`/`} exact={true} component={DashBoard}/>
                <Route path={`/create`} component={CreatePage}/>
                <Route path={`/edit`} component={EditorPage}/>
                <Route path={`/help`} component={HelpPage}/>

            </div>
        </BrowserRouter>
    );


};


AppRoute.propTypes = {};

export default AppRoute;
