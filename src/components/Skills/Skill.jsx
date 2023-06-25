import React from "react";
import html from "../../images/code_icon/html.png";

import Section from "../shared/section/section";
import "./Skill.scss";
import { AiOutlineDownload } from "react-icons/ai";
import Contact from "../contact/Contact";
import { scrollToSection } from "../utils/helper";
import { skillDescription, skillsList } from "./constants";
function Skill() {
  return (
    <Section background="dark" id="skills" className="section">
      <h2>SKILLS</h2>
      <div className="skills-content-wrapper">
        <div className="left-col">
          <h4>My Skills</h4>
          <div className="tech-skills">
            <p>
            <div dangerouslySetInnerHTML={{ __html: skillDescription }} />
            </p>
          </div>
          <button
  className="btn"
  // role="button"
  onClick={() => {
    scrollToSection("contact");
  }}
>
  Hire Me
</button>
        </div>

        <div className="right-col">
          <div className="skill-logo">
            {skillsList.map((skill)=>{
              return (
                <div className="logo-name">
                <img src={skill.logo} alt="" />
                <div className="container">
                  <div className={`skills ${skill.skill_class}`}>{skill.skillPercentage}</div>
                </div>
              </div>
              )
            })}
            
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Skill;
