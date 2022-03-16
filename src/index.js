import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Hello = () => {
  return <p>Hello!</p>
}
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/


ReactDOM.render(<Hello />, document.getElementById("root"));