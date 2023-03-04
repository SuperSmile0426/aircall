//node_modules
import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import LayoutComponent from "./layout";

// import pages
import { ActivityPage, ActivityDetailPage } from "./pages"

// import constants
import { PATH } from "./constants";

const AppRoutes = () => {
  return (
    <LayoutComponent>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<ActivityPage />}></Route>
        <Route path={PATH.ACTIVITY_DETAIL} element={<ActivityDetailPage />}></Route>
      </Routes>
    </LayoutComponent>
  );
};

export default AppRoutes;
