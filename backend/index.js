const express = require('express');
const app = express();
const cors = require('cors');
const {company_registration} = require('./middleware/company_registration');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());
app.get('/Company_registration' , company_registration);

app.listen(8000,()=>{
    console.log('server is created on port 8000');
})