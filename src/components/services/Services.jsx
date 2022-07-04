import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const UIDesignServices = [
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const webdevelopmentServices = [
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
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
                <li>
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
                <li>
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
            {UIDesignServices.map((service) => {
              return (
                <li>
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
