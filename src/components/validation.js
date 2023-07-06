const validation = (data) => {
  let errors = {};
  // EMAIL VALIDATION
  if (!data.email.includes("@")) {
    errors.e1 = "Ingresa un email valido.";
  }
  if (!data.email) {
    errors.e2 = "Ingresa un email.";
  }
  if (data.email.lenght > 35) {
    errors.e3 = "No debe ser mayor a 35 caracteres.";
  }
  // PASSWORD VALIDATION
  if (!/\d+/.test(data.password)) {
    errors.p1 = "Al menos un número.";
  }
  if (data.password.lenght < 6 || data.password.lenght < 10) {
    errors.p2 = "Debe tener entre 6 y 10 caracteres.";
  }
  return errors;
};

export default validation;
