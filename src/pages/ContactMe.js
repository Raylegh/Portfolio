import React, { useState } from "react";
import ContactData from "../components/Contact/ContactData";
import ContactForm from "../components/Contact/ContactForm";
import ContactSubmited from "../components/Contact/ContactSubmited";

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="contact-section">
      <ContactData />
      {!isSubmitted ? (
        <ContactForm submitForm={submitForm} />
      ) : (
        <ContactSubmited />
      )}
    </div>
  );
};

export default ContactMe;
