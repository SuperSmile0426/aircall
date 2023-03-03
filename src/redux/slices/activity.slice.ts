import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActivity } from "../../models";

type errorType = {
  message: string
}

type initialStateType = {
  gettingActivity: boolean,
  gotActivity: boolean,
  gettingActivityDetail: boolean,
  gotActivityDetail: boolean,
  activities: IActivity[],
  activityDetail: IActivity,
  error: errorType;
}

const initialState: initialStateType = {
  gettingActivity: false,
  gotActivity: false,

  gettingActivityDetail: false,
  gotActivityDetail: false,
  activities: [],
  activityDetail: {
    id: "0",
    direction: "0",
    from: 0,
    to: 0,
    via: 0,
    duration: 0,
    call_type: "0",
    is_archived: false,
    created_at: "0",
  },
  error: { message: "" }
}


const ActivitySlice = createSlice({
  name: "Activity",
  initialState: initialState,
  reducers: {
    /**
     * getActivity
     */
    getActivity(state: initialStateType, action: PayloadAction<{}>) {
      state.gettingActivity = true;
      state.gotActivity = false;
    },

    getActivitySuccess(state: initialStateType, action: PayloadAction<{ activities: IActivity[] }>) {
      state.gettingActivity = false;
      state.gotActivity = true;
      state.activities = action.payload.activities;
    },

    getActivityFailure(state: initialStateType, action: PayloadAction<{ error: string }>) {
      state.gettingActivity = false;
      state.gotActivity = false;
      state.error.message = action.payload.error;
    },

    /**
     * getActivity
     */
    getActivityDetail(state: initialStateType, action: PayloadAction<{ id: string }>) {
      state.gettingActivityDetail = true;
      state.gotActivityDetail = false;
    },

    getActivityDetailSuccess(state: initialStateType, action: PayloadAction<{ activity: IActivity }>) {
      state.gettingActivityDetail = false;
      state.gotActivityDetail = true;
      state.activityDetail = action.payload.activity;
    },

    getActivityDetailFailure(state: initialStateType, action: PayloadAction<{ error: string }>) {
      state.gettingActivityDetail = false;
      state.gotActivityDetail = false;
      state.error.message = action.payload.error;
    },

    formatError(state: initialStateType, action: PayloadAction<{}>) {
      state.error.message = "";
    }
  },
});

export const {
  getActivity,
  getActivitySuccess,
  getActivityFailure,

  getActivityDetail,
  getActivityDetailSuccess,
  getActivityDetailFailure,

  formatError
} = ActivitySlice.actions;

export default ActivitySlice.reducer;
