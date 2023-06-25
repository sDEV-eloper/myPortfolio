import React from "react";
import "./IntroContent.scss";
import hand from "../../images/hand.png";
import boy from "../../images/boy2.png";

const websiteUrl = window.location.href;
// console.log("web Url :  "+websiteUrl)
const PDF_FILE_URL = `${websiteUrl}/SurajSinghResume.pdf`;

function IntroContent() {
  const downloadFileAtURL = (url) => {
    const Suraj_singh_Resume = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Suraj_singh_Resume");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="" />
              </span>
              <span className="text">, I am</span>
            </span>
            <span className="big-text">Suraj Singh</span>
          </h1>

          <p className="para">
          A final year Computer Science student, passionate about creating engaging and user-friendly interfaces that provide seamless experiences for users. With expertise in frontend development, I excel at turning design concepts into interactive and responsive web pages that work across multiple devices and platforms.
          </p>
          <div className="button-box">
            <button
              className="btn"
              // role="button"
              onClick={() => {
                downloadFileAtURL(PDF_FILE_URL);
              }}
            >
              Get Resume
            </button>
            <button className="btn view" >
              <a href="https://drive.google.com/file/d/1q2BXM5twpbT3vhjUtlTdN7k5jhVLwPCP/view?usp=share_link"  target="blank"  >
                View Resume
              </a>
            </button>
          </div>
        </div>
        <div className="right-col">
          <img src={boy} alt="" />
        </div>
      </div>
    </div>
  );
}

export default IntroContent;
