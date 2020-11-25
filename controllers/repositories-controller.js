const repos=require('../service/apiCall');
const HttpErr=require('../util/http-error')

const controllers = {

     getTrendingRepositories :async function(req, res, next) {
          try{
               await repos.searchForRepos(req, res)
          }
          catch(err){
               return next(new HttpErr('something went bad',500))
          };
     },

     getTrendingLanguages : async function(req, res, next){
          try{
               await repos.searchForLanguages(req,res)
          } catch(err){
               return next(new HttpErr('something went bad',500))
          }
     }

}

module.exports=controllers