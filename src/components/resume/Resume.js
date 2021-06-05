import React, {Fragment} from 'react';

import "./resume.scss"
import SectionTitle from "../common/SectionTitle";
import {Container, Row} from "react-bootstrap";
import {FiBookOpen, FiBriefcase} from "react-icons/all";
import ResumeHistory from "../common/ResumeHistory";
import HistoryTitle from "../common/HistoryTitle";
import Skill from "../common/Skill";

const Resume = () => {

    const skill = [
        {
            id: 1,
            skillName: "Java",
            strength: 90
        },
        {
            id: 2,
            skillName: "Spring Boot",
            strength: 90
        },
        {
            id: 8,
            skillName: "Thymeleaf",
            strength: 90
        },
        {
            id: 3,
            skillName: "JS",
            strength: 90
        },
        {
            id: 4,
            skillName: "ReactJS",
            strength: 90
        },
        {
            id: 5,
            skillName: "NextJS",
            strength: 80
        },
        {
            id: 7,
            skillName: "jQuery",
            strength: 80
        },
        {
            id: 15,
            skillName: "Flutter",
            strength: 60
        },
        {
            id: 9,
            skillName: "MySQL",
            strength: 85
        },
        {
            id: 10,
            skillName: "PostgreSQL",
            strength: 70
        },
        {
            id: 11,
            skillName: "Hibernate",
            strength: 85
        },
        {
            id: 12,
            skillName: "MongoDB",
            strength: 80
        }
    ]

    const workExperience = [
        {
            id: 1,
            designation: "Senior Software Engineer",
            from: "December 2019",
            to: "Present",
            organizationName: "Zaag Systems Ltd.",
            url: "www.zaagsys.com",
            aboutOrganization: ""
        },
        {
            id: 2,
            designation: "Junior Software Engineer",
            from: "January 2019",
            to: "December 2019",
            organizationName: "Vivasoft",
            url: "www.vivasoftltd.com",
            aboutOrganization: ""
        }
    ];

    const educationalExperience = [
        {
            id: 1,
            designation: "B. Sc Engineering in Computer Science and Engineering",
            from: "2015",
            to: "2019",
            organizationName: "Southeast University, Bangladesh",
            aboutOrganization: ""
        }
    ];

    return (
        <Fragment>
            <Container className="skill-section">
                <SectionTitle title="My Skills"/>
                <Row className="skill">

                    {
                        skill && skill.map(item =>
                            <Skill key={item.id}
                                   skillName={item.skillName}
                                   strength={item.strength}
                            />
                        )
                    }
                </Row>
            </Container>

            <Container className="resume-section">
                <SectionTitle title="Resume"/>
                <HistoryTitle icon={<FiBriefcase/>} title={"Working Experience"}/>
                {
                    workExperience && workExperience.map(item =>
                        <ResumeHistory key={item.id}
                                       designation={item.designation}
                                       to={item.to}
                                       from={item.from}
                                       organizationName={item.organizationName}
                                       aboutOrganization={item.aboutOrganization}
                                       url={item.url}
                        />
                    )
                }

                <HistoryTitle icon={<FiBookOpen/>} title={"Educational Qualification"}/>
                {
                    educationalExperience && educationalExperience.map(item =>
                        <ResumeHistory key={item.id}
                                       designation={item.designation}
                                       to={item.to}
                                       from={item.from}
                                       organizationName={item.organizationName}
                                       aboutOrganization={item.aboutOrganization}
                        />
                    )
                }
            </Container>
        </Fragment>
    );
}

export default Resume;