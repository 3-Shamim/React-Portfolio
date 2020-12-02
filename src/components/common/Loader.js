import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ height, width }) => {

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
        width
    }

    return (
        <div style={style}>
            <Spinner animation="grow" />
        </div>
    )
}

Loader.defaultProps = {
    width: "100%",
    height: "100%"
}

export default Loader;