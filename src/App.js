import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [toDoListArray, setToDoListArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // give item a unique ID
    const itemId = String(Date.now());

    // pass ID and item into functions
    addItemToArray(itemId, inputValue);

    // clear the input box
    setInputValue('');
  };

  const handleItemClick = (id) => {
    // pass id through to functions
    removeItemFromArray(id);
  };

  const addItemToArray = (itemId, toDoItem) => {
    // add item to array as an object with an ID so we can find and delete it later
    setToDoListArray((prevArray) => [...prevArray, { itemId, toDoItem }]);
  };

  const removeItemFromArray = (id) => {
    // create a new toDoListArray with all li's that don't match the ID
    setToDoListArray((prevArray) => prevArray.filter((item) => item.itemId !== id));
  };

  return (
    <section>
    <section className="container">
      <div className="heading">
        <h1 className="heading__title">Lista de Tarefas</h1>
      </div>
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <label className="form__label" htmlFor="todo">
            ~ Hoje eu preciso ... ~
          </label>
          <input
            className="form__input"
            type="text"
            id="todo"
            name="to-do"
            size="30"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
          <button className="button" type="submit">
            <span>Enviar</span>
          </button>
        </div>
      </form>
      <div>
        <ul className="toDoList">
          {/* Render the to-do items from the state */}
          {toDoListArray.map((item) => (
            <li key={item.itemId} onClick={() => handleItemClick(item.itemId)}>
              {item.toDoItem}
            </li>
          ))}
        </ul>
      </div>
      
    </section>
    <p class="paragraph-class">
        ©2024 por Bruna Feyh. <br />
      </p>
    </section>
  );
};

export default App;
