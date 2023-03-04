// import node modules
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import mui component
import { Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CallIcon from '@mui/icons-material/Call';

// import sub-component
import { FeedComponent } from "../../components";

// import styles
import { ActivityPageStyle } from "./index.style";

// redux & store
import { RootState } from '../../redux/store';
import { getActivity } from "../../redux/slices/activity.slice";
import { IActivity } from "../../models";

const ActivityPage = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector((state: RootState) => state.activity);

  const [feed, setFeed] = useState<IActivity[]>(activities);

  const [tabNum, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, no: number) => {
    setValue(no);
  };

  useEffect(() => {
    dispatch(getActivity({}));
  }, [dispatch]);

  useEffect(() => {
    setFeed(activities);
  }, [activities])

  return (
    <ActivityPageStyle>
      <Box className="header-container">
        <Box className="header-title"><CallIcon /> Activity</Box>
        <Tabs value={tabNum} onChange={handleChange} aria-label="test" className="tab-contaner">
          <Tab label="Inbox" className="tab-item" />
          <Tab label="All Call" className="tab-item" />
        </Tabs>
      </Box>

      {(() => {
        return <>
          <Box className="detail-content-body">
            {(() => {
              switch (tabNum) {
                case 0:
                  return <FeedComponent data={feed.filter((item: IActivity) => item.is_archived === false && item.call_type === "missed" && item.direction === "inbound")} />;

                case 1:
                  return <FeedComponent data={feed.filter((item: IActivity) => item.is_archived === false)} />;

                default:
                  return <FeedComponent data={feed.filter((item: IActivity) => item.is_archived === false && item.call_type === "missed" && item.direction === "inbound")} />;
              }
            })()}
          </Box></>
      })()}
    </ActivityPageStyle>
  );
};

export default ActivityPage;
