/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { handleActions } from 'redux-actions';
import { loadedChartData } from './actions';

// The initial state of the Main
export const initialState = {
  chartData: [],
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = handleActions(
  {
    [loadedChartData]: produce((draft, action) => {
      draft.chartData = action.payload.chartData;
      return draft;
    }),
  },
  initialState,
);

export default dashboardReducer;
