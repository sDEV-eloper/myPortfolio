import React from "react";
import Section from "../shared/section/section";
import "./Skill.scss";
import html from "../../images/code_icon/html.png";
import css from "../../images/code_icon/css.png";
import js from "../../images/code_icon/js.png";
import reactjs from "../../images/code_icon/react.png";
import c from "../../images/code_icon/c.png";
import sql from "../../images/code_icon/sql.png";
import java from "../../images/code_icon/java.png";
import bootstrap from "../../images/code_icon/boots.png";
import sass from "../../images/code_icon/sass.png";
import { AiOutlineDownload } from "react-icons/ai";
import Contact from "../contact/Contact";
import { scrollToSecton } from "../utils/helper";

function Skill() {
  return (
    <Section background="dark" id="skills" className="section">
      <h2>SKILLS</h2>
      <div className="skills-content-wrapper">
        <div className="left-col">
          <h4>My Skills</h4>
          <div className="tech-skills">
            <p>
              I have proficiency in <span style={{color:"#FF7B54"}}> Frontend development</span>  with a strong knowledge
              of <span style={{color:"yellow"            }}>HTML, CSS, JavaScript, ReactJS, SASS, and Bootstrap</span>, including
              responsive web design, layout, and interactivity. My knowledge of
              ReactJS allows me to build interactive user interfaces and work
              comfortably with JavaScript libraries and frameworks. With
              experience in SASS and Bootstrap, I can use CSS pre-processors and
              responsive design to adapt to modern web development practices.
              <br />
              <br />
              Additionally, my experience in <span style={{color:"#FF7B54"}}>programming languages</span>  like <span style={{color:"#53ff43"}}>C, Java,
              and SQL</span>  gives me an understanding of computer science concepts
              such as <span style={{color:"#53ff43" }}>algorithms, data structures, OOPs, and database
              management,</span> which are essential in software development. 
              <br />
              Overall,
              my skills in web development and programming languages make me a
              versatile and capable developer who can work on a wide range of
              projects.
            </p>
          </div>
          <button
            className="btn"
            role="button"
            onClick={() => {
              scrollToSecton("contact");
            }}
          >
            Hire Me
          </button>
        </div>
        <div className="right-col">
          <div className="skill-logo">
            <div className="logo-name">
              <img src={html} alt="" />
              {/* <h5>HTML5 </h5> */}
              <div class="container">
                <div class="skills html">90%</div>
              </div>
            </div>

            <div className="logo-name">
              <img src={css} alt="" />
              {/* <h5>CSS3</h5> */}
              <div class="container">
                <div class="skills css">80%</div>
              </div>
            </div>
            <div className="logo-name">
              <img src={js} alt="" />
              {/* <h5>Javascript</h5> */}
              <div class="container">
                <div class="skills js">80%</div>
              </div>
            </div>
            <div className="logo-name">
              <img src={reactjs} alt="" />
              {/* <h5>Reactjs</h5> */}
              <div class="container">
                <div class="skills reactjs">75%</div>
              </div>
            </div>
            <div className="logo-name">
              <img src={sass} alt="" />
              {/* <h5>Sass</h5> */}
              <div class="container">
                <div class="skills sass">80%</div>
              </div>
            </div>
            <div className="logo-name">
              <img src={c} alt="" />
              {/* <h5>C</h5> */}
              <div class="container">
                <div class="skills c">70%</div>
              </div>
            </div>
            <div className="logo-name">
              <img src={java} alt="" />
              {/* <h5>java</h5> */}
              <div class="container">
                <div class="skills java">70%</div>
              </div>
            </div>
            <div className="logo-name">
              <img src={bootstrap} alt="" />
              {/* <h5>Bootstrap</h5> */}
              <div class="container">
                <div class="skills bootstrap">60%</div>
              </div>
            </div>
            <div className="logo-name">
              <img src={sql} alt="" />
              {/* <h5>sql</h5> */}
              <div class="container">
                <div class="skills sql">60%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Skill;
