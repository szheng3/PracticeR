import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                404 Home <Link to={`/`}>Go Home</Link>
            </div>
        );
    }
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
