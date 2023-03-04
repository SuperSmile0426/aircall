//node_modules
import { all, takeLatest } from "redux-saga/effects";

//sagas
import { archieveActivitySaga, getActivityDetailSaga, getActivitySaga } from "./activity.saga";

//slices
import { archieveActivity, getActivity, getActivityDetail } from "../slices/activity.slice";

//sagas
function* rootSaga() {
  yield all([takeLatest(getActivity.type, getActivitySaga)]);
  yield all([takeLatest(getActivityDetail.type, getActivityDetailSaga)]);
  yield all([takeLatest(archieveActivity.type, archieveActivitySaga)]);
}

export default rootSaga;
