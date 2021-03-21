export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address invalid";
  }
  if (!values.subject) {
    errors.subject = "Subject required";
  }

  if (!values.messeage) {
    errors.messeage = "Measseage required";
  }

  return errors;
}
