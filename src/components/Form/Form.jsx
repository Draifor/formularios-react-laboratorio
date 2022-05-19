import "./form.css";
import { useContext } from "react";
import { StatesContext } from "../../App";

export default function Form() {
  const states = useContext(StatesContext);
  const { nameState, lastNameState, cellState, emailState, statusFormState } = states;
  const [name, setName] = nameState;
  const [lastName, setLastName] = lastNameState;
  const [cell, setCell] = cellState;
  const [email, setEmail] = emailState;
  const [statusForm, setStatusForm] = statusFormState;

  const handleName = (event) => setName(event.target.value);
  const handleLastName = (event) => setLastName(event.target.value);
  const handleCell = (event) => setCell(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") return setStatusForm("nombre");
    if (lastName === "") return setStatusForm("apellido");
    if (cell === "") return setStatusForm("celular");
    if (email === "") return setStatusForm("email");
    setStatusForm('completed');
    if (statusForm === 'completed') document.querySelector(".form-fields-container").setAttribute("disabled", 'disabled')
    console.log({ name, lastName, cell, email });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form-description">Por favor diligencia con tus datos</p>
      <fieldset className="form-fields-container" >
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
      {statusForm !== "completed" && statusForm !== "" && (
        <>
          <p className="form-validation required">
            Todos los campos son obligatorios
          </p>
          <p
            className={`form-validation ${statusForm}`}
          >{`Falta el campo ${statusForm}`}</p>
        </>
      )}
    </form>
  );
}
