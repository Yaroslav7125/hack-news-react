import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/index';

function App() {
  const data = axios.get('https://api.hnpwa.com/v0/news/2.json').then((result) => {
    // eslint-disable-next-line no-console
    console.log(result);
  });
  return (
    <>
      <Provider store={store}></Provider>
      <div className={'d-flex justify-content-center'}>
        <h1>Hacker news</h1>
      </div>
    </>
  );
}

export default App;
