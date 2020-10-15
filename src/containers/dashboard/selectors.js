import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDashboard = state => {
  if (state && state.dashboard) {
    return state.dashboard;
  }
  return initialState;
};

export const makeSelectChartData = createSelector(
  selectDashboard,
  state => state.chartData,
);
