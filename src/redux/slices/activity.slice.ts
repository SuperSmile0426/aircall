import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActivity } from "../../models";

type errorType = {
  message: string
}

type initialStateType = {
  gettingActivity: boolean,
  gotActivity: boolean,
  activities: IActivity[],
  error: errorType;
}

const initialState: initialStateType = {
  gettingActivity: false,
  gotActivity: false,
  activities: [],
  error: { message: "" }
}


const ActivitySlice = createSlice({
  name: "Activity",
  initialState: initialState,
  reducers: {
    /**
     * SignIn
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
      console.log("action.payload.error;", action.payload.error);

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
  formatError
} = ActivitySlice.actions;

export default ActivitySlice.reducer;
