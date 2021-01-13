import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/component/container/Header';
import Main from '../src/component/container/Main';
import Footer from '../src/component/container/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main></Main>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
