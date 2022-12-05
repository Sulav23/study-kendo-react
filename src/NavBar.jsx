import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import React from "react";

const NavBar = () => {
  return (
    <AppBar themeColor="dark">
      <AppBarSpacer />
      <AppBarSection>
        <h2>To Do List</h2>
      </AppBarSection>
      <AppBarSpacer />
    </AppBar>
  );
};

export default NavBar;
