import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App tab="home" />);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


