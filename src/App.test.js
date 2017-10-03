import React from 'react';
import ReactDOM from 'react-dom';
import {App, Login} from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App message = "Hello world!" />, div);
});
