//node_modules
import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import LayoutComponent from "./layout";

// import pages
import { DashboardPage } from "./pages"

// import constants
import { } from "./constants";

const AppRoutes = () => {
  return (
    <LayoutComponent>
      <Routes>
        <Route path="/*" element={<DashboardPage />}></Route>
      </Routes>
    </LayoutComponent>
  );
};

export default AppRoutes;
