/* function that returns number and repos using each language

     language :{
          num of repos : number
          list of repos : [names of repos]
     }

*/
module.exports=function languageFetch(items) {
     var langMap = new Map();
     items.forEach(item => {
          if (!langMap.has(item.language)) {

               langMap.set(item.language,Object(
                    {
                         number_of_repos:  1,
                         list_of_repos: new Array(item.full_name)
                    }))
          } else {
               var oldNum = langMap.get(item.language).number_of_repos
               var oldRepos = langMap.get(item.language).list_of_repos;
               langMap.set(item.language,
                    {
                         number_of_repos: oldNum+1 ,
                         list_of_repos: [item.full_name,...oldRepos]
                    })
          }
     })
     return langMap;
}
