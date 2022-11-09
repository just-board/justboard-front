import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Main from './pages/Main';
import Header from './component/Header';
import customTheme from './style/customTheme';
import { useState, useRef } from 'react';

function App() {
  const [selectTheme, setTheme] = useState(customTheme.lightTheme);
 
  return (
    <>
    <ThemeProvider theme={selectTheme}>
     <Header setTheme={setTheme}/>
     <Main/>
     </ThemeProvider>
    </>
  );
}

export default App;
