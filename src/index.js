import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Login} from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App message="Bye world!" />, document.getElementById('root'));
ReactDOM.render(<Login />,document.getElementById('login'));

registerServiceWorker();
