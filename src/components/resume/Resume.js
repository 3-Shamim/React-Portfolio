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
            skillName: "HTML",
            strength: 98
        },
        {
            id: 2,
            skillName: "CSS",
            strength: 93
        },
        {
            id: 3,
            skillName: "Java",
            strength: 97
        },
        {
            id: 4,
            skillName: "Spring Boot",
            strength: 91
        }
    ]

    const educationalExperience = [
        {
            id: 1,
            designation: "Bachelor of Science",
            from: "2016",
            to: "2020",
            organizationName: "Southeast University",
            aboutOrganization: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,\n" +
                "                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam\n" +
                "                                    placeat libero. Deleniti"
        },
        {
            id: 2,
            designation: "Higher School Graduation",
            from: "2012",
            to: "2014",
            organizationName: "Abc College",
            aboutOrganization: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,\n" +
                "                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam\n" +
                "                                    placeat libero. Deleniti"
        }
    ];

    const workExperience = [
        {
            id: 1,
            designation: "Frontend Web Developer",
            from: "2018",
            to: "2020",
            organizationName: "Abc Company",
            aboutOrganization: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,\n" +
                "                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam\n" +
                "                                    placeat libero. Deleniti"
        },
        {
            id: 2,
            designation: "Frontend Web Developer",
            from: "2020",
            to: "Present",
            organizationName: "Abc Company",
            aboutOrganization: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia,\n" +
                "                                    aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam\n" +
                "                                    placeat libero. Deleniti"
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
                <HistoryTitle icon={<FiBriefcase/>} title={"Working experience"}/>
                {
                    workExperience && workExperience.map(item =>
                        <ResumeHistory key={item.id}
                                       designation={item.designation}
                                       to={item.to}
                                       from={item.from}
                                       organizationName={item.organizationName}
                                       aboutOrganization={item.aboutOrganization}
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