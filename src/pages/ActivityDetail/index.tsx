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

// redux & store
import { RootState } from '../../redux/store';
import { getActivity } from "../../redux/slices/activity.slice";
import { IActivity } from "../../models";

const ActivityDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { activityDetail } = useSelector((state: RootState) => state.activity);

  const [activity, setActivity] = useState<IActivity>(activityDetail);

  useEffect(() => {
    dispatch(getActivity({ id }));
  }, [dispatch]);

  useEffect(() => {
    setActivity(activityDetail);
  }, [activityDetail]);

  return (
    <ActivityDetailPageStyle>
      <Box>Activity Detail</Box>
      <ActivityDetailComponent data={activity} />
    </ActivityDetailPageStyle>
  );
};

export default ActivityDetailPage;
