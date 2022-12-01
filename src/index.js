import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { ParallaxProvider } from 'react-scroll-parallax';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <App tab="home" />
    </ParallaxProvider>
  </ThemeProvider>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
