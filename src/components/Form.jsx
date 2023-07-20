import React, { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";

export const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Estado para controlar el "loading"

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Activar el "loading" al enviar el formulario
    // Simular una llamada asincrónica, por ejemplo, una solicitud de inicio de sesión
    setTimeout(() => {
      login(userData);
      setLoading(false); // Desactivar el "loading" después de la llamada asincrónica
    }, 2000); // Tiempo de espera simulado de 2 segundos
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        {/* username */}
        <label className={styles["form-label"]} htmlFor="email">
          {/* Username */}
        </label>
        <input
          type="text"
          className={styles["form-input"]}
          placeholder="Email..."
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        {errors.e1 ? (
          <p className={styles["form-error"]}>{errors.e1}</p>
        ) : errors.e2 ? (
          <p className={styles["form-error"]}>{errors.e2}</p>
        ) : (
          <p className={styles["form-error"]}>{errors.e3}</p>
        )}
        {/* password */}
        <label className={styles["form-label"]} htmlFor="password">
          {/* Password */}
        </label>
        <input
          type="password"
          className={styles["form-input"]}
          placeholder="Password..."
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        {errors.p1 ? (
          <p className={styles["form-error"]}>{errors.p1}</p>
        ) : (
          <p className={styles["form-error"]}>{errors.e2}</p>
        )}
        <button className={styles["form-button"]} disabled={loading}>
          {loading ? "Loading..." : "LOGIN"}
        </button>
      </form>
    </div>
  );
};
