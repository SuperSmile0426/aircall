// import node_modules
import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

// import apis
import activityApi from "../../apis/activity.api";

// import slices
import {
  getActivitySuccess,
  getActivityFailure
} from "../slices/activity.slice";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* GetActivitySaga(action: PayloadAction<{}>) {
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