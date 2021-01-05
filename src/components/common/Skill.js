import React from "react";
import {Col, ProgressBar} from "react-bootstrap";

const Skill = ({skillName, strength}) => {
    return (
          <Col lg={6}>
              <div className="progress-bar-content">
                  <h6>{skillName}</h6>
                  <div className="progress-style">
                      <p>{strength}%</p>
                      <ProgressBar now={strength} label={`${strength}%`} srOnly/>
                  </div>
              </div>
          </Col>
    );
}

export default Skill;
