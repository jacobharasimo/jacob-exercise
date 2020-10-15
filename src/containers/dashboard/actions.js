import { createActions } from 'redux-actions';

export const { loadChartData, loadedChartData, errorChartData } = createActions(
  'LOAD_CHART_DATA',
  'LOADED_CHART_DATA',
  'ERROR_CHART_DATA',
);
