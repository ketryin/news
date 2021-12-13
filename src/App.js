import SearchBar from "./components/SearchBar";
import './fonts.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

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
      <SearchBar/>
    </ThemeProvider>
  );
}

export default App;
