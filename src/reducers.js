/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './utils/history';
import appReducer from './containers/app/reducer';
import loadingReducer from './containers/app/loadingReducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    loading: loadingReducer,
    global: appReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
