import './fonts.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainPage from "./views/MainPage";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
