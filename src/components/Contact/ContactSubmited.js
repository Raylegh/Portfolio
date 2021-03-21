import submitted from "../../images/submitted.svg";

const ContactSubmited = () => {
  return (
    <div className="form-content">
      <h4>We have received your messeage!</h4>
      <div className="form-image">
        <img src={submitted} alt="success-image" />
      </div>
    </div>
  );
};

export default ContactSubmited;
