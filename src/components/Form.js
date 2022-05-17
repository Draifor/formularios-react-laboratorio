export default function Form() {
  return (
    <form className="form">
      <h2 className="form-title">Datos de ingreso</h2>
      <p className="form-description">Por favor diligencia con tus datos</p>
      <fieldset className="form-fields-container">
        <label className="form-label" htmlFor="name">
          Nombre:
        </label>
        <input type="text" name="name" id="name" />
        <label className="form-label" htmlFor="last-name">
          Apellido:
        </label>
        <input type="text" name="last-name" id="last-name" />
      </fieldset>
      <fieldset>
        <label className="form-label" htmlFor="cell">
          Celular:
        </label>
        <input type="number" name="cell" id="cell" />
        <label className="form-label" htmlFor="email">
          Email:
        </label>
        <input type="email" name="email" id="email" />
      </fieldset>
      <fieldset>
        <button className="form-submit-button">Enviar</button>
      </fieldset>
    </form>
  );
}
