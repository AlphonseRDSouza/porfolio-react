import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendExperiences = [
  {
    title: "React Js",
    level: "Experienced",
  },
  {
    title: "HTML",
    level: "Experienced",
  },
  {
    title: "Javascript",
    level: "Intermediate",
  },
  {
    title: "Redux",
    level: "Experienced",
  },
  {
    title: "CSS",
    level: "Basics",
  },
  {
    title: "Webstorm IDE",
    level: "Experienced",
  },
  {
    title: "VS Code IDE",
    level: "Intermediate",
  },
  {
    title: "Debugging Tools",
    level: "Experienced",
  },
  {
    title: "Websocket Signal R",
    level: "Intermediate",
  },
];

const mobileAppExperiences = [
  {
    title: "Swift",
    level: "Experienced",
  },
  {
    title: "Object-C",
    level: "Experienced",
  },
  {
    title: "Xcode",
    level: "Experienced",
  },
  {
    title: "Mobile simulator",
    level: "Experienced",
  },
  {
    title: "Instruments",
    level: "Experienced",
  },
  {
    title: "Sqlite DB",
    level: "Intermediate",
  },
];

const otherCompetences = [
  {
    title: "Git",
    level: "Experienced",
  },
  {
    title: "Source tree",
    level: "Experienced",
  },
  {
    title: "Zeplin",
    level: "Basics",
  },
  {
    title: "Invison",
    level: "Basics",
  },
  {
    title: "Sketch",
    level: "Basics",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendExperiences.map((experience) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                    <h4>{experience.title}</h4>
                    <small className="text-light">{experience.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience_mobileApps">
          <h3>Mobile Applications Development</h3>
          <div className="experience__content">
            {mobileAppExperiences.map((experience) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                    <h4>{experience.title}</h4>
                    <small className="text-light">{experience.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience_otherCompetence">
          <h3>Other Skills</h3>
          <div className="experience__content">
            {otherCompetences.map((experience) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                    <h4>{experience.title}</h4>
                    <small className="text-light">{experience.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
