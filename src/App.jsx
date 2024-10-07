import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SideMenuDrawer from "./components/modal/sidebarDrawer/SideMenuDrawer";
import MouseCursor from "./components/ui/cursor/Cursor";
import WelcomeScreen from "./components/welcome-page/WelcomePage";
import Home from "./screens/home/Home";

function App() {

  return (
    <>

      <WelcomeScreen>
        <MouseCursor />
        <Home />
      </WelcomeScreen>
    </>
  );
}

export default App;

