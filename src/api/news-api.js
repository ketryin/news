import axios from "axios";

const LIMIT = 6;

function getArticles() {
    return axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${LIMIT}`)
        .then((response) => response.data);
}

function getArticleById(id) {
    return axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
        .then((response) => response.data);
}

function getArticleByKeyWord(keyWord) {
    return axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${LIMIT}&title_contains=${keyWord}`)
        .then((response) => response.data);
}


export { getArticles, getArticleById, getArticleByKeyWord }