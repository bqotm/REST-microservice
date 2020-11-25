const express=require('express');
const router=express.Router();

const repositoriesController=require('../controllers/repositories-controller')

//top 100 repositories
router.get('/trending',repositoriesController.getTrendingRepositories);

//num & list of repositories where each language is used 
router.get('/languages',repositoriesController.getTrendingLanguages)

module.exports=router;