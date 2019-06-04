import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import './client.css';

const app = document.getElementById('app');

ReactDom.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
  ,
  app,
);
