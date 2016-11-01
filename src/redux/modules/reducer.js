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
import getjson from './getjson'

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  form,
  todos,
  visibilityFilter,
  getjson,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  widgets
});
