import "./form.css";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cell, setCell] = useState("");
  const [email, setEmail] = useState("");
  const [isCompleted, setIsCompleted] = useState("");

  const handleName = (event) => setName(event.target.value);
  const handleLastName = (event) => setLastName(event.target.value);
  const handleCell = (event) => setCell(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") return setIsCompleted("nombre");
    if (lastName === "") return setIsCompleted("apellido");
    if (cell === "") return setIsCompleted("celular");
    if (email === "") return setIsCompleted("email");
    setIsCompleted(true);
    console.log({ name, lastName, cell, email });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form-description">Por favor diligencia con tus datos</p>
      <fieldset className="form-fields-container">
        <legend className="form-title">Datos de registro</legend>
        <label className="form-label required" htmlFor="name">
          Nombre
        </label>
        <input
          className="form-field"
          type="text"
          name="name"
          id="name"
          onChange={handleName}
          placeholder="Rupertino"
          autoFocus
        />
        <label className="form-label required" htmlFor="last-name">
          Apellido
        </label>
        <input
          className="form-field"
          type="text"
          name="last-name"
          id="last-name"
          onChange={handleLastName}
          placeholder="Cruz"
        />
        <label className="form-label required" htmlFor="cell">
          Celular
        </label>
        <input
          className="form-field"
          type="number"
          name="cell"
          id="cell"
          onChange={handleCell}
          placeholder="321 234 5678"
        />
        <label className="form-label required" htmlFor="email">
          Email
        </label>
        <input
          className="form-field"
          type="email"
          name="email"
          id="email"
          onChange={handleEmail}
          placeholder="rupertinocruz@email.com"
        />
      </fieldset>
      <button className="form-submit-button">Enviar</button>
      {isCompleted !== true && isCompleted !== "" && (
        <>
          <p className="form-validation required">
            Todos los campos son obligatorios
          </p>
          <p
            className={`form-validation ${isCompleted}`}
          >{`Falta el campo ${isCompleted}`}</p>
        </>
      )}
    </form>
  );
}
