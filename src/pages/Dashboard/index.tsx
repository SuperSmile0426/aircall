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
import { DashboardPageStyle } from "./index.style";

// redux & store
import { RootState } from '../../redux/store';
import { getActivity } from "../../redux/slices/activity.slice";
import { IActivity } from "../../models";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector((state: RootState) => state.activity);

  const [tabNum, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, no: number) => {
    setValue(no);
  };

  useEffect(() => {
    dispatch(getActivity({}));
  }, [dispatch])

  return (
    <DashboardPageStyle>
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
                  return <FeedComponent data={activities.filter((item: IActivity) => item.is_archived === true)} />;

                case 1:
                  return <FeedComponent data={activities} />;

                default:
                  return <FeedComponent data={activities} />;
              }
            })()}
          </Box></>
      })()}
    </DashboardPageStyle>
  );
};

export default DashboardPage;
