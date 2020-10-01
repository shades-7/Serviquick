import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import A from './Components/A/A';
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import Reducer from './Reducer';

const store = createStore(Reducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <A />
    </Provider>
  </BrowserRouter>
,  document.getElementById('root')
);
