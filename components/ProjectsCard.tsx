import React from "react";
import { Card, CardBody, Col, Button, CardText, CardSubtitle, CardTitle } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, descBullets, projectLogo, role }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          {/* <div className="d-flex px-3"> */}
          {/* <div className="pl-4"> */}
          <img
            src={projectLogo}
            style={{
              objectFit: "cover",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
            }}
            className="shadow mb-3"
            alt={projectLogo}
          />
          <CardTitle tag="h4" className="mb-2">
            {name}
          </CardTitle>
          <CardSubtitle>{role}</CardSubtitle>
          {/* <h3>{name}</h3> */}
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </CardText>
          {github ? (
            <Button
              className="btn-icon"
              color="github"
              href={github}
              target="_blank"
              rel="noopener"
              aria-label="Github"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-github" />
              </span>
            </Button>
          ) : null}
          {link ? (
            <Button
              className="btn-icon"
              color="success"
              href={link}
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            >
              <span className="btn-inner--icon">
                <i className="fa fa-arrow-right mr-2" />
              </span>
              <span className="nav-link-inner--text ml-1">Demo</span>
            </Button>
          ) : null}
          {/* </div> */}
          {/* </div> */}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
