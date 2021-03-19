import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <div className="contact-section">
      <div className="contact-center">
        <div className="contact-title">
          <h2>
            Contact <span>Me</span>
          </h2>
          <div className="line" />
        </div>
      </div>
      <div className="overall-row">
        <div className="msg-section">
          <div className="icon-section">
            <div className="icon-msg">
              <FontAwesomeIcon size="2x" className="icon" icon={faEnvelope} />
              <h5>Send me a measseage</h5>
            </div>
            <p>cristinablanco@gmail.com</p>
          </div>
          <div className="icon-section">
            <div className="icon-msg">
              <FontAwesomeIcon size="2x" className="icon" icon={faPhoneAlt} />
              <h5>Give me a call</h5>
            </div>
            <p>Mobile: +34 637 728 366</p>
          </div>
        </div>

        <div className="contact-form">
          <div className="contact-form-data">
            <div className="contact-data">
              <input
                type="text"
                name="your-name"
                aria-required="true"
                placeholder="Your Name"
              />
            </div>
            <div className="contact-data">
              <input
                type="text"
                name="your-email"
                aria-required="true"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="contact-msg">
            <input
              type="text"
              name="subject"
              aria-required="true"
              placeholder="Your Subject"
            />
            <textarea
              type="text"
              name="your-messeage"
              aria-required="true"
              placeholder="Your Messeage"
            />
          </div>
        </div>
        <div className="button-submit">
          <button>Send a messeage</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
