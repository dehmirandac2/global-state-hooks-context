import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { StoreContext } from "./context/StoreContext";
import { types } from "./context/reducers";

function App() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const [techInput, setTechInput] = useState('');

  return (
    <div className="App">
      <h1>Adeus Redux - Bem-vindo React Context</h1>
      <p>
        Tente adicionar itens duplicados
      </p>
      <div className="form">
        <input
          name="tech"
          value={techInput}
          onChange={e => setTechInput(e.target.value)}
        />
        <button
          type="button"
          onClick={() => actions.addTechIfNotInList(techInput)}
        >
          Adicionar tecnologia que não está na lista
        </button>
      </div>

      <h3>Lista</h3>
      <ul>
        {state.techList.map(tech => (
          <li key={tech}>
            {tech}
            <button
              onClick={() =>
                dispatch({ type: types.REMOVE_FROM_TECH_LIST, payload: tech })
              }
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
