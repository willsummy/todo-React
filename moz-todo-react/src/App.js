// import React from JS
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Todo from "./components/Todo";
import Form from './components/Form';
import FilterButton from './components/FilterButton';





// default
function App(props) {

  // grabbing the state
  const [tasks, setTasks] = useState(props.tasks);
  // props.tasks is being set to state via tasks

  // functions
  function addTask(name) {
    const newTask = {
      id: "todo-" + nanoid(), name: name, completed: false
    };
    setTasks([...tasks, newTask]);
    // providing set task with existing tasks array
    // and the newTask to append to that array
  }



  // componentizing task list
  const taskList = props.tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id} // key  must be unique for ordering, so we can use id
    />
  ));

  const formList = props.forms.map(form => (
    <Form
      label={form.label}
      button={form.button}
    />
  ));

  const filterList = props.filters.map( filter => (
    <FilterButton
      ariaPressed={filter.ariaPressed}
      name={filter.name}
      key={filter.order}
    />
  ));


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      {formList}

      <div className="filters btn-group stack-exception">
        {filterList}

      </div>


      <h2 id="list-heading">
        3 tasks remaining
      </h2>


      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

// this makes it available to other modules
export default App;
