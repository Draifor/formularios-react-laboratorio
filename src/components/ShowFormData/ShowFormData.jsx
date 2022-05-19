import './showData.css';
import { useContext } from "react";
import { StatesContext } from "../../App";
import Card from "../Card/Card";

export default function ShowFormData() {
  const { nameState, lastNameState, cellState, emailState } = useContext(StatesContext);

  return (
    <Card>
      <p className="show-field"><span>Nombre:</span> {nameState[0]}</p>
      <p className="show-field"><span>Apellido:</span> {lastNameState[0]}</p>
      <p className="show-field"><span>Celular:</span> {cellState[0]}</p>
      <p className="show-field"><span>Email:</span> {emailState[0]}</p>
    </Card>
  );
}
