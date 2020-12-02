import React from "react";
import PropTypes from 'prop-types';

import "./section_title.scss";

const SectionTitle = ({title}) => {
    return (
        <div className="section-title">
            <h2>{title}</h2>
            <span>{title}</span>
        </div>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default SectionTitle;