// import React from JS
import React from 'react';

// import local svg
import logo from './logo.svg';

// import local css file
import './App.css';

/*
{curly braces}  mean variable in JSX
props are comparable to HTML attributes
Reach components have props inside component calls
same syntax prop="value"
props are read only, descending dataflow
parent to child
*/

function App(props) {
  const subject = props.subject;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {subject}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// this makes it available to other modules
export default App;
