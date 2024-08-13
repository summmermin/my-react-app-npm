import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TimerFn from './components/TimerFn';
import reportWebVitals from './reportWebVitals';
import TimerCl from './components/TimerCl';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(ReactDOM, 'ReactDOM');
root.render(
    <React.StrictMode>
        <TimerCl/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
