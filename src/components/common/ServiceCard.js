import React, {Fragment} from "react";
import {Col} from "react-bootstrap";
import "./service_card.scss";

const ServiceCard = ({icon, serviceName, serviceDescription}) => {
    return (
      <Fragment>
          <Col lg={4}>
              <div className="service-card">
                  <div className="service-card-header">
                      <span>{icon}</span>
                      <h5 className="title">{serviceName}</h5>
                  </div>
                  <p className="description">{serviceDescription}</p>
              </div>
          </Col>
      </Fragment>
    );
}

export default ServiceCard;
