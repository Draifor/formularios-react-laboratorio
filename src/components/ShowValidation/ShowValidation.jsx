export default function ShowValidation({ statusForm }) {
  return (
    <>
      {statusForm !== "completed" && statusForm !== "" && (
        <>
          <p className="form-validation required">
            Todos los campos son obligatorios
          </p>
          <p className="form-validation">{`Falta el campo ${statusForm}`}</p>
        </>
      )}
    </>
  );
}
