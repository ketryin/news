import React, { useEffect, useState } from "react";
import { getArticleByKeyWord } from '../api/news-api';
import SearchBar from "../components/SearchBar";
import ListNews from '../components/ListNews'
import useDebounce from '../hooks/useDebounce';
import Container from '../components/Container/Container';
import Results from "../components/Results";

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
            <Container>
                <SearchBar onChange={setKeyword} value={keyword} />
                {news.length > 0 && (
                    <Results count={news.length}/>
                )}
                <ListNews news={news} keyword={keyword}/>
            </Container>
        </>
    );
}

export default MainPage;