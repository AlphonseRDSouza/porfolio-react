import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://stackoverflow.com/users/1057814/alphonse-r-dsouza"
        target="_blank"
      >
        <ImStackoverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
