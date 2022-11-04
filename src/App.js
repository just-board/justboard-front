import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Main from './pages/Main';
import Header from './component/Header';
import customTheme from './style/customTheme';

function App() {
  return (
    <ThemeProvider theme={customTheme.pinkTheme}>
     <Header/>
     <Main/>
     </ThemeProvider>
  );
}

export default App;
