const express = require('express');
const bodyParser=require('body-parser');
const { getRepositories } = require('./service/apiCall');
const routes=require('./routes/repostories-routes');

const app=express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

//master url
app.use('/api/search',routes);



app.listen(PORT, ()=>{
     console.log(`server started on port ${PORT}`)
})