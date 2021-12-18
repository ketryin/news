import axios from "axios";

const LIMIT = 30;


function getArticleById(id) {
    return axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
        .then((response) => response.data);
}

function getArticleByKeyWord(keyWord) {
    return axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${LIMIT}&title_contains=${keyWord}`)
        .then((response) => response.data);
}

export { getArticleById, getArticleByKeyWord }