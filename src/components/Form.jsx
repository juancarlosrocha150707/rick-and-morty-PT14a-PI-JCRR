import { useState } from "react";
import validation from "./validation";

export const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

const handleSubmit = (e) =>{
    e.preventDefault();
    login(userData);
}



  return (
    <div>
      <form onSubmit = {handleSubmit}>
        {/* username */}
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Email..."
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}
        {/* password */}
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password..."
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.e2}</p>}
        <button>LOGIN</button>
      </form>
    </div>
  );
};
