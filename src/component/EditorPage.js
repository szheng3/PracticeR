import React from 'react';

const EditorPage = (props) => {
    return (
        <div>
            this is EditorPage of page {props.match.params.id}
        </div>
    );
};

EditorPage.propTypes = {};

export default EditorPage;

