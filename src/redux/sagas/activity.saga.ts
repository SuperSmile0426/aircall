// import node_modules
import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

// import apis
import activityApi from "../../apis/activity.api";

// import slices
import {
  getActivity,
  getActivitySuccess,
  getActivityFailure,

  getActivityDetailSuccess,
  getActivityDetailFailure,

  archieveActivitySuccess,
  archieveActivityFailure
} from "../slices/activity.slice";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* getActivitySaga(action: PayloadAction<{}>) {
  try {
    let result: ResponseGenerator = yield call(activityApi.getActivity);

    if (result.data) {
      yield put(getActivitySuccess({ activities: result.data }));
      return;
    }
    yield put(getActivityFailure({ error: "There isn't any response data from backend." }));

  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data.message);
      yield put(getActivityFailure({ error: error.response.data.message }));
    } else {
      console.log(error.response)
      yield put(getActivityFailure({ error: "Network connection error" }));
    }
  }
}


export function* getActivityDetailSaga(action: PayloadAction<{ id: string }>) {
  try {
    let result: ResponseGenerator = yield call(activityApi.getActivityById, action.payload.id);

    if (result.data) {
      yield put(getActivityDetailSuccess({ activity: result.data }));
      return;
    }
    yield put(getActivityDetailFailure({ error: "There isn't any response data from backend." }));

  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data.message);
      yield put(getActivityDetailFailure({ error: error.response.data.message }));
    } else {
      console.log(error.response)
      yield put(getActivityDetailFailure({ error: "Network connection error" }));
    }
  }
}

export function* archieveActivitySaga(action: PayloadAction<{ id: string }>) {
  try {
    let result: ResponseGenerator = yield call(activityApi.archieveActivity, action.payload.id);

    if (result.data) {
      yield put(archieveActivitySuccess({}));
      yield put(getActivity({}));
      return;
    }
    yield put(archieveActivityFailure({ error: "There isn't any response data from backend." }));

  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data.message);
      yield put(archieveActivityFailure({ error: error.response.data.message }));
    } else {
      console.log(error.response)
      yield put(archieveActivityFailure({ error: "Network connection error" }));
    }
  }
}