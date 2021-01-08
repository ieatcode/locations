import './scss/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import configureAppStore from './shared/configs/store.config';
import App from './pages/app';
import Switch from 'react-bootstrap/esm/Switch';
import {Container} from 'react-bootstrap';
import {Layout} from "antd";

ReactDOM.render(
  <Provider store={configureAppStore()}>
    <Router>
      <Layout style={{height: '100vh'}}>
        <Container className="page-wrapper">
          <Switch>
            <Route exact path="/">
              <App/>
            </Route>
          </Switch>
        </Container>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
