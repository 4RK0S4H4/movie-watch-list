import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
