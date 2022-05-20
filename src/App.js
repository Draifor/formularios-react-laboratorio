import "./App.css";
import { createContext, useState } from "react";

import Form from "./components/Form/Form";
import ShowFormData from "./components/ShowFormData/ShowFormData";

export const StatesContext = createContext({
  nameState: { state: "", setState: (state) => state },
});

function App() {
  const states = {
    nameState: useState(""),
    lastNameState: useState(""),
    cellState: useState(""),
    emailState: useState(""),
    statusFormState: useState(""),
  };
  const statusForm = states.statusFormState[0];

  return (
    <div className="App">
      <StatesContext.Provider value={states}>
        <h1>Formularios en React</h1>
        <Form />
        {statusForm === "completed" && <ShowFormData />}
      </StatesContext.Provider>
    </div>
  );
}

export default App;
