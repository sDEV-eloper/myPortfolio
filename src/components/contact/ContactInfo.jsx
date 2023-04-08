import React from "react";
import "./contact.scss";
import phone from "../../images/phone.png";
import mail from "../../images/gmail.png";
import location from "../../images/location.png";
import flag from "../../images/flag.png";
// import {FaPhoneAlt} from "react-icons/fa"
// import {MdEmail} from "react-icons/md"

function ContactInfo() {
  return (
    <div className="contact-info-box">
      <p>
        To Get in touch with me, please feel free to send me a message through
        the contact form on my website or email me directly . I look forward to
        hearing from you and will get back to you as soon as possible.
        <br />
        <div className="location">
        <img src={location} alt="" />
        <span className="text">Nainital, Uttarakhand, India
        <img src={flag} alt="" className="flag" />
        </span>
      </div>
      <br />
<hr/>
      </p>
      <div className="contact-button">
          <a href="tel:9528394139">
      <div className="contact-option">
        <img src={phone} alt="" className="contact-img"/>
        <span className="text">
            Call Me
        </span>
      </div>
          </a>
      <a href="mailto:thisissurajdev@gmail.com" target="blank">
        <div className="contact-option">
          <img src={mail} alt="" className="contact-img"/>
          <span className="text">Mail Me</span>
        </div>
      </a>
      </div>
      <br />
      <hr />
      <div className="info">
        <h5>Email: <span>thisissurajdev@gmail.com</span> </h5> ||
        <h5>Mob No.: <span>9528394139 </span> </h5>
      </div>
    </div>
  );
}

export default ContactInfo;
