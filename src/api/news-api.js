import axios from "axios";
const axios = require('axios');

function getArticles() {
    return axios.get('https://api.spaceflightnewsapi.net/v3/articles')
        .then((response) => response.data);
}

function getArticleById(id) {
    return axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
        .then((response) => response.data);
}

export { getArticles, getArticleById }