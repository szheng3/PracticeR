import React, {Component} from 'react';
import queryString from 'query-string';


class EditorPage extends Component {


    render() {

        const parsed = queryString.parse(this.props.location.search);

        return (
            <div>

                {parsed.gg}
                this is EditorPage of page {this.props.match.params.id}


            </div>
        );
    }
}

EditorPage.propTypes = {};


export default EditorPage;

