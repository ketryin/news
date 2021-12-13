import React, { useEffect, useState } from "react";
import { getArticleByKeyWord } from '../api/news-api';
import SearchBar from "../components/SearchBar";
import useDebounce from '../hooks/useDebounce';

function MainPage() {

    const [keyword, setKeyword] = useState('');

    const debouncedKeyword = useDebounce(keyword, 500);

    useEffect(() => {
        if (debouncedKeyword) {
            getArticleByKeyWord(debouncedKeyword).then(console.log)
        }
    }, [debouncedKeyword]);

    return (
        <SearchBar onChange={setKeyword} value={keyword} />
    );
}

export default MainPage;