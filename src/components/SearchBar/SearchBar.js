import { TextField } from "@material-ui/core";
import './SearchBar.scss';

const SearchBar = (props) => {
    const { onChange, value } = props;

    return <>
        <p className='search-bar-label'>Filter by keywords</p>
        <TextField
            className='search-bar'
            label='The most successful IT companies in 2020'
            variant="outlined"
            type='search'
            value={value}
            onChange={onChange}
        />
    </>;
};

export default SearchBar;