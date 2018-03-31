var express=require('express');
var app=express();

app.get('/hello',(req,res)=>{
    res.send('hii manish how are you');
})

app.listen(5000,()=>{
    console.log('server is listening on port 3000');
});