import React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";

import DataGrid from "./components/Table";
import "./App.css";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <div className="App-header">
          <DataGrid />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
