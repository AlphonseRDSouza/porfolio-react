import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendExperiences = [
  { id: 1, title: "React Js", level: "Experienced" },
  { id: 2, title: "HTML", level: "Experienced" },
  { id: 3, title: "Javascript", level: "Intermediate" },
  { id: 4, title: "Redux", level: "Experienced" },
  { id: 5, title: "CSS", level: "Basics" },
  { id: 6, title: "Webstorm IDE", level: "Experienced" },
  { id: 7, title: "VS Code IDE", level: "Intermediate" },
  { id: 8, title: "Debugging Tools", level: "Experienced" },
  { id: 9, title: "Websocket Signal R", level: "Intermediate" },
];

const mobileAppExperiences = [
  { id: 11, title: "Swift", level: "Experienced" },
  { id: 12, title: "Object-C", level: "Experienced" },
  { id: 13, title: "Xcode", level: "Experienced" },
  { id: 14, title: "Mobile simulator", level: "Experienced" },
  { id: 15, title: "Instruments", level: "Experienced" },
  { id: 16, title: "Sqlite DB", level: "Intermediate" },
];

const otherCompetences = [
  { id: 21, title: "Git", level: "Experienced" },
  { id: 22, title: "Source tree", level: "Experienced" },
  { id: 23, title: "Zeplin", level: "Basics" },
  { id: 24, title: "Invison", level: "Basics" },
  { id: 25, title: "Sketch", level: "Basics" },
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
                <article className="experience__details" key={experience.id}>
                  <BsPatchCheckFill className="experience__details-icon" />
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
                <article className="experience__details" key={experience.id}>
                  <BsPatchCheckFill className="experience__details-icon" />
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
                <article className="experience__details" key={experience.id}>
                  <BsPatchCheckFill className="experience__details-icon" />
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
