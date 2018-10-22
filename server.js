const express = require('express');
const hbs = require('hbs');

var app=express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));


app.get('/',(req,res)=>{
  res.render('home.hbs',{
    homeact:'active'
  });
});
app.get('/features',(req,res)=>{
res.render('features.hbs',{
  feaact:'active'
});
});
app.listen(3000);
