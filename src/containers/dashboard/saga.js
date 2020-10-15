import { takeLatest, put } from 'redux-saga/effects';
import { loadChartData, loadedChartData, errorChartData } from './actions';

// TODO: Retrieve data from ${REACT_APP_API_BASE}/sales?date=<today>
function* loadChartDataEvent() {
  try {
    // const requestUrl = '${REACT_APP_API_BASE}/sales?date=<today>';
    // const chartData = yield call(request, requestUrl);
    const createData = (time, amount) => ({ time, amount });
    const fakeChartData = [
      createData('00:00', 0),
      createData('03:00', 300),
      createData('06:00', 600),
      createData('09:00', 800),
      createData('12:00', 1500),
      createData('15:00', 2000),
      createData('18:00', 2400),
      createData('21:00', 2400),
      createData('24:00', undefined),
    ];
    yield put(loadedChartData({ chartData: fakeChartData }));
  } catch (err) {
    yield put(errorChartData(err));
  }
}

export default function* dashboardSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(loadChartData().type, loadChartDataEvent);
}
