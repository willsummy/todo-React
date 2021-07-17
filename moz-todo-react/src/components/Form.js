import React, { useState } from 'react';
// can now use the useState() function

// default
export default function Form(props) {

    const [name, setName] = useState('');
    // creates a name variable with initial state of 'Use hooks!'
    // creating a setter for this state variable that can update it
    // this will later be used for the creation of a new task

    function handleSubmit(e) {
        e.preventDefault(); // prevents standard form submission
        if (name.length > 0) {
            props.addTask(name);
            setName(""); // clears input
        } else alert("Please enter a task.")

    }

    function handleChange(e) {
        setName(e.target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            {props.label}
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"

          //using the sate variable name
          value={name}

          // event handler
          onChange={handleChange} // these do not need () callers
        />
        <button type="submit" className="btn btn__primary btn__lg">
          {props.button}
        </button>
      </form>
    );

}


