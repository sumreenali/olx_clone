import React from 'react';
import ReactDOM from 'react-dom';
//remmove index.css file from here
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
