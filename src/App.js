import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import {
  Router, Switch,
} from 'react-router-dom';


import RouteGuard from './hoc/RouteGuard';
import store from './redux/store';
import 'react-toastify/dist/ReactToastify.css';

import history from './utils/history';


import NavBarContainer from './containers/NavBarContainer';
import HomePageContainer from './containers/HomePageContainer';
import UserPageContainer from './containers/UserPageContainer';
import TodoPageContainer from './containers/TodoPageContainer';
import PageNotFound from './components/PageNotFound';


const App = () => (
  <div className="app h-100">
    <Provider store={store}>
      <Router history={history}>
        <NavBarContainer />
        <Switch>
          <RouteGuard isPrivate={false} exact path="/" component={HomePageContainer} />
          <RouteGuard isPrivate exact path="/todo" component={TodoPageContainer} />
          <RouteGuard isPrivate exact path="/profile" component={UserPageContainer} />
          <RouteGuard isPrivate={false} path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
);

export default App;
