//Hooks
import useForm from "./useForm";
import validate from "./validateInfo";

const ContactForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="contact-form-data">
        <div className="contact-data">
          {errors.name && <p>{errors.name}</p>}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="contact-data">
          {errors.email && <p>{errors.email}</p>}
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="contact-msg">
        {errors.subject && <p>{errors.subject}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          value={values.subject}
          onChange={handleChange}
        />
        {errors.messeage && <p>{errors.messeage}</p>}
        <input
          type="text"
          className="input-text-area"
          name="messeage"
          placeholder="Your Messeage"
          value={values.messeage}
          onChange={handleChange}
        />
      </div>
      <div className="button-submit">
        <button type="submit">Send a messeage</button>
      </div>
    </form>
  );
};

export default ContactForm;
