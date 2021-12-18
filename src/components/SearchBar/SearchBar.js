import Box from '@mui/material/Box';
import Search from '@mui/icons-material/Search';
import './SearchBar.scss';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import OutlinedInput from '@mui/material/OutlinedInput';



const SearchBar = (props) => {
    const { onChange, value } = props;

    return <>
        <p className='search-bar-label'>Filter by keywords</p>
        <div className='search-bar'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Search spaceflight news</InputLabel>
                <OutlinedInput
                    className='search-bar-input'
                    id="outlined-adornment-amount"
                    value={value} 
                    onChange={e => onChange(e.target.value)}
                    startAdornment={<Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                    label="Search"
                />
            </FormControl>
          </Box>
        </div>
    </>;
};

export default SearchBar;
