import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter ,Route} from 'react-router-dom';
import Header from './common/header/index';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header/>
          <BrowserRouter>
              <Route path='/' exact component={Home}></Route>
              <Route path='/details' exact component={Detail}></Route>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
