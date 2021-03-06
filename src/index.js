import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// router dom
import { BrowserRouter as Router } from 'react-router-dom';
// redux
import store from './redux/store'
import { Provider } from 'react-redux'




ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>   
      </Provider>
    </React.StrictMode>
  ,document.getElementById('root')
);


