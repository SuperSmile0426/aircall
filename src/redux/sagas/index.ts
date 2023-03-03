//node_modules
import { all, takeLatest } from "redux-saga/effects";

//sagas
import { getActivityDetailSaga, getActivitySaga } from "./activity.saga";

//slices
import { getActivity, getActivityDetail } from "../slices/activity.slice";

//sagas
function* rootSaga() {
  yield all([takeLatest(getActivity.type, getActivitySaga)]);
  yield all([takeLatest(getActivityDetail.type, getActivityDetailSaga)]);
}

export default rootSaga;
