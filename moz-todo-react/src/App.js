// import React from JS
import React from 'react';

import Todo from "./components/Todo";
import Form from './components/Form';
import FilterButton from './components/FilterButton';

/*
{curly braces}  mean variable in JSX
props are comparable to HTML attributes
Reach components have props inside component calls
same syntax prop="value"
props are read only, descending dataflow
parent to child
*/

function App(props) {

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
