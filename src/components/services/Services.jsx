import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const UIDesignServices = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const webdevelopmentServices = [
  {
    id: 11,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 12,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 13,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 14,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 15,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 16,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 17,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 18,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {UIDesignServices.map((service) => {
              return (
                <li key={service.id}>
                  <BiCheck className="service__list-icon" />
                  <p>{service.content}</p>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {webdevelopmentServices.map((service) => {
              return (
                <li key={service.id}>
                  <BiCheck className="service__list-icon" />
                  <p>{service.content}</p>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            {UIDesignServices.map((service, i) => {
              return (
                <li key={`${service.id}_${i}`}>
                  <BiCheck className="service__list-icon" />
                  <p>{service.content}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
