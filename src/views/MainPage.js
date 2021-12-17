import React, { useEffect, useState } from "react";
import { getArticleByKeyWord } from '../api/news-api';
import SearchBar from "../components/SearchBar";
import ListNews from '../components/ListNews'
import useDebounce from '../hooks/useDebounce';

function MainPage() {

    const [keyword, setKeyword] = useState('');
    const [news, setNews] = useState([]);

    const debouncedKeyword = useDebounce(keyword, 500);

    useEffect(() => {
        if (debouncedKeyword) {
            getArticleByKeyWord(debouncedKeyword).then(setNews);
        } else {
            setNews([]);
        }
    }, [debouncedKeyword, setNews]);

    return (
        <>
            <SearchBar onChange={setKeyword} value={keyword} />
            <ListNews news={news}/>
        </>
    );
}

export default MainPage;