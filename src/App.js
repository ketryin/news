import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import MainPage from "./views/MainPage";
import NewsPage from './views/NewsPage';
import './fonts.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },});

function AppRoutes() {
  return useRoutes([
    { path : '/', element : <MainPage /> },
    { path : '/:id', element : <NewsPage /> }
  ]);
}

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <AppRoutes />
        </Router>
    </ThemeProvider>
  );
}

export default App;
