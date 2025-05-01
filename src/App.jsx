import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;