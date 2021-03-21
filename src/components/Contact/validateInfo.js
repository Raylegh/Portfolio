export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.subject) {
    errors.subject = "Subject is required";
  }

  if (!values.messeage) {
    errors.messeage = "Measseage is required";
  }

  return errors;
}
