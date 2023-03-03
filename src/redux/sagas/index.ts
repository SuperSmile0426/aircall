//node_modules
import { all, takeLatest } from "redux-saga/effects";

//sagas
import { GetActivitySaga } from "./activity.saga";

//slices
import { getActivity } from "../slices/activity.slice";

//sagas
function* rootSaga() {
  yield all([takeLatest(getActivity.type, GetActivitySaga)]);
}

export default rootSaga;
