import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HelpPage from "./component/HelpPage";
import AppRoute from "./AppRoute/AppRoute";

ReactDOM.render(<AppRoute/>, document.getElementById('root'));
registerServiceWorker();
