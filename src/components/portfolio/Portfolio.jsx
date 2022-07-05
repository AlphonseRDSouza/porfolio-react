import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/alp/portfolio1.png";
import IMG2 from "../../assets/alp/portfolio2.jpg";
import IMG3 from "../../assets/alp/portfolio3.png";
import IMG4 from "../../assets/alp/portfolio4.jpg";
import IMG5 from "../../assets/alp/portfolio5.jpg";
import IMG6 from "../../assets/alp/portfolio6.jpg";

const portfolioInputs = [
  {
    id: 1,
    title: "Fenix Management",
    image: IMG1,
    technicalDescription: "Website, React js",
    description: "",
    url: "https://fenixbegravning.se/",
    urlTitle: "Live Site",
    aboutUrl: "https://fenixbegravning.se/kyrklig-begravning/",
    aboutTitle: "About",
  },
  {
    id: 2,
    title: "Gapstaff Manager",
    image: IMG2,
    technicalDescription: "iPad OS Application, Swift",
    description:
      "A workforce management application for healthcare(Hospitals). Used by managers.",
    url: "https://appadvice.com/app/gapstaff-manager/1435870667",
    urlTitle: "Download App",
    aboutUrl: "https://www.gapstaff.com",
    aboutTitle: "About",
  },
  {
    id: 3,
    title: "Gapstaff",
    image: IMG3,
    technicalDescription: "iOS Application, Swift",
    description: "",
    url: "https://apps.apple.com/bg/app/gapstaff/id1282092496",
    urlTitle: "Download App",
    aboutUrl: "https://www.gapstaff.com",
    aboutTitle: "About",
    otherUrl: "https://appadvice.com/app/gapstaff/1282092496",
  },
  {
    id: 4,
    title: "iBAC Consumer",
    image: IMG4,
    technicalDescription: "Universal Application, Swift",
    description:
      "Alcohol level detection in their blood or evaluate their sobriety after consuming alcohol via bluetooth iBAC device .",
    url: "https://apps.apple.com/us/app/ibac-consumer/id639771617",
    urlTitle: "Download App",
    aboutUrl: "https://alcosystems.se/technology/",
    aboutTitle: "About",
  },
  {
    id: 5,
    title: "cTimeSheet",
    image: IMG5,
    technicalDescription: "Universal Application, Swift, Objective-C",
    description: "",
    url: "https://apps.apple.com/in/app/ctimesheet/id464053269",
    urlTitle: "Download App",
    aboutUrl: "https://copernicus.se/en/business-system/copernicus-time/",
    aboutTitle: "About",
  },
  {
    id: 6,
    title: "cManager",
    image: IMG6,
    technicalDescription: "Universal Application, Swift, Objective-C",
    description: "",
    url: "https://appadvice.com/app/cmanager-for-copernicus-mobile/785389873",
    urlTitle: "Download App",
    aboutUrl:
      "https://copernicus.se/en/business-system/copernicus-time/copernicus-mobile/",
    aboutTitle: "About",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioInputs.map(
          ({
            id,
            title,
            technicalDescription,
            description,
            image,
            url,
            urlTitle,
            aboutUrl,
            aboutTitle,
          }) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{technicalDescription}</p>
                {false && <p>{description}</p>}
                <div className="portfolio__item-cta">
                  <a
                    href={url}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {urlTitle}
                  </a>
                  <a
                    href={aboutUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {aboutTitle}
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
