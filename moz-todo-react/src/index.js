import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// this was possible because App.js exported itself
import App from './App';
import reportWebVitals from './reportWebVitals';

const TODO_DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

const FORM_DATA = [
  { label: "What needs to be done?", button: "Add"}
];

const FILTER_DATA = [
  { ariaPressed: "true", name: "All", order: 0 },
  { ariaPressed: "false", name: "Active", order: 1 },
  { ariaPressed: "false", name: "Completed", order: 2 }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={TODO_DATA} forms={FORM_DATA} filters={FILTER_DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
