import React from "react";
import {Col, Row} from "react-bootstrap";
import "./resume_history.scss";
import {Link} from "react-router-dom";

const ResumeHistory = ({designation, from, to, organizationName, aboutOrganization, url}) => {
    return (
        <div className="history-content">
            <div className="details">
                <Row>
                    <Col lg={4} className="left">
                        <p>{from} - {to}</p>
                    </Col>

                    <Col lg={8} className="right">
                        <h5>{designation}</h5>
                        <Link className="organization-name" to={`//${url}`} target="_blank">
                            {organizationName}
                        </Link>
                        <p className="organization-details">{aboutOrganization}</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ResumeHistory;
