import './App.css';
import React from 'react';
import Router from "./Router";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme({
  pallete: {
    primary : {
      main: "#c2b280"
    },
    secondary: {
      main: "#8090c2"
    }
  }
});

function App() {
  
  return (
    <div className="App">
         <ThemeProvider theme={theme}>
          <Header />
          <Router />
          <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
