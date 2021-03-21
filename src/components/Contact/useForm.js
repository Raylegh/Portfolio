import { useState, useEffect } from "react";
import { app } from "../../base";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    messeage: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //add firestore database

    const db = app.database();
    //db.ref("messeages").orderByKey().limitToLast();
    db.ref("messeages").push(values);

    // database.collection("contacts").add({
    //   name: values.name,
    //   email: values.email,
    //   subject: values.subject,
    //   messeage: values.messeage,
    // });

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
