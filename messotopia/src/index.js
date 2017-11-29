import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {createBrowserHistory} from 'history';
ReactDOM.render(<Router history={createBrowserHistory}><App /></Router>, document.getElementById('root'));
registerServiceWorker();
