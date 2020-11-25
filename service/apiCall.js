const fetch = require('node-fetch');
const languageFetch=require('../util/util')

//github's url used fo this purpose
const API_URL = `https://api.github.com/search/repositories?q=created:<${new Date().toISOString().slice(0, 10)}&sort=stars&order=desc&per_page=100`;

//fetching github api
async function getReposFromGithub(URL) {

     const resp = await fetch(URL)
     const result = await resp.json();
     return result;

}

const repos = {
     searchForRepos: async function (req, res) {
          const result = await getReposFromGithub(API_URL);
          res.send(result.items);
     },

     searchForLanguages: async function (req, res) {
          const result = await getReposFromGithub(API_URL);
          //res.send(result.items.map(item=>item.language).filter((v, i, a) => a.indexOf(v) === i))

          //json load of languages
          const languages = Object.fromEntries(languageFetch(result.items));
          res.send(languages)
     }

}


module.exports = repos;