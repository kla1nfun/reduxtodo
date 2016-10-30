import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import auth from './auth';
import counter from './counter';
import {reducer as form} from 'redux-form';
import info from './info';
import widgets from './widgets';
import todos from './todos'
import visibilityFilter from './visibilityFilter'
<<<<<<< HEAD
import jsontodos from './getlist'
=======
>>>>>>> 863875877ede35dda3d02a7dff828ecf29ee32fe

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  form,
  todos,
  visibilityFilter,
<<<<<<< HEAD
  jsontodos,
=======
>>>>>>> 863875877ede35dda3d02a7dff828ecf29ee32fe
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  widgets
});
