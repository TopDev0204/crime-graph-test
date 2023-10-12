import { Effect, call, put, takeEvery } from "redux-saga/effects";

import apiInstance from "../../utils/apiHelper";
import { GRAPH_REQUEST } from "./actionTypes";
import { graphSuccess, graphError } from "./actions";

function* getGraphData(): Generator<Effect, void, any> {
  try {
    const response = yield call(
      apiInstance.get,
      `/crime/fbi/cde/arrest/state/AK/all?from=2012&to=2021&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`
    );
    yield put(graphSuccess(response.data));
  } catch (error) {
    yield put(graphError("error"));
  }
}

function* graphSaga() {
  yield takeEvery(GRAPH_REQUEST, getGraphData);
}

export default graphSaga;
