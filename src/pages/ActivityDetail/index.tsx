// import node modules
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// import sub component
import { ActivityDetailComponent } from "../../components";

// import mui component
import { Box } from "@mui/material";

// import styles
import { ActivityDetailPageStyle } from "./index.style";

// import models
import { IActivity } from "../../models";

// redux & store
import { RootState } from '../../redux/store';
import { getActivityDetail } from "../../redux/slices/activity.slice";

const ActivityDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { activityDetail } = useSelector((state: RootState) => state.activity);

  const [activity, setActivity] = useState<IActivity>(activityDetail);

  useEffect(() => {
    if (id) {
      dispatch(getActivityDetail({ id: id.toString() }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setActivity(activityDetail);
  }, [activityDetail]);

  return (
    <ActivityDetailPageStyle>
      <Box className="activity-detail-title">Activity Detail</Box>
      <ActivityDetailComponent data={activity} />
    </ActivityDetailPageStyle>
  );
};

export default ActivityDetailPage;
