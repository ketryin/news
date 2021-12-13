import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import './SearchBar.scss';

const SearchBar = (props) => {
    const { onChange, value } = props;

    return <>
        <p className='search-bar-label'>Filter by keywords</p>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField 
                  className='search-bar'
                  label="The most successful IT companies in 2020" 
                  variant="standard"
                  value={value}
                  onChange={e => onChange(e.target.value)}
              />
          </Box>
    </>;
};

export default SearchBar;

