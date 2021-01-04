import React from "react";
import {Col, Row} from "react-bootstrap";
import "./resume_history.scss";

const ResumeHistory = ({designation, from, to, organizationName, aboutOrganization}) => {
    return (
        <div className="history-content">
            <div className="details">
                <Row>
                    <Col lg={3} className="left">
                        <p>{from} - {to}</p>
                    </Col>

                    <Col lg={9} className="right">
                        <h5>{designation}</h5>
                        <p className="organization-name">{organizationName}</p>
                        <p className="organization-details">{aboutOrganization}</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ResumeHistory;
