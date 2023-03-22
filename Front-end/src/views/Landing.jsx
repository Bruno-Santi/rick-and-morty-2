import style from "./Landing.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  const REGEX_EMAIL = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{3})+$/";
  const validate = (form, setErrors, errors) => {
    if (!form.email) setErrors({ ...errors, email: "Email vacío" });
    else {
      if (REGEX_EMAIL.test(form.email)) setErrors({ ...errors, email: "" });
      else setErrors({ ...errors, email: "Email inválido" });
    }
   
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value }); // cambio form...
    validate({ ...form, [property]: value }, setErrors, errors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (form.email === "user@rym.com" && form.password === "asd") {
      navigate("/home");
    } else {
      <p>Datos incorrectos</p>;
      navigate("/");
    }
  };

  return (
    <>
      <h3 className={style.titulo}> Rick And Morty App</h3>
      <p className={style.subtitulo}>With React</p>
      <div className={style.container}>
        <div className={style.container2}>
          <form onSubmit={submitHandler} className={style.formcontainer}>
            <p className={style.inputText}>Username</p>
            <input
              type="text"
              name="email"
              className={style.inputBox}
              placeholder="Email Here"
              onChange={handleChange}
              value={form.email}
            ></input>
            <p className={style.inputText}>Password</p>
            <input
              type="password"
              name="password"
              className={style.inputBox}
              placeholder="Password Here"
              onChange={handleChange}
              value={form.password}
            ></input>
            <p></p>
            <button type="submit" className={style.myButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Landing;
