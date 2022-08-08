const express = require('express')
const app = express();
const port = 4001;

app.get('/', function(req, res) {
    const rut = req.query.rut;

    res.send({
    'user_id': ciph(rut,asciiu),
    'pass_id': ciph(rut,asciip),
    'before' : deciph(ciph(rut,asciiu),asciiu)
  });});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

const regex =/\b(\d{1,3}(?:\d{3}){2}(-?)[\dkK])\b/;
const digits =(run) =>regex.test(run)?run.length<10? "0".concat(run).replace("-","_").replace("K","A").replace("k","A"): run.replace("-","_").replace("K","A").replace("k","A"):"rut invalido";
const asciiu =[40,40,49,50,49,65,20,31,19,17];
const asciip=[65,49,60,48,49,67,20,30,25,9];
const ciph =(run,u)=> digits(run).split("").map((item,index)=>String.fromCharCode(item.charCodeAt(0)+u[index])).join("");
const deciph =(str,u)=>str.split("").map((item,index)=>String.fromCharCode((item.charCodeAt(0))-u[index])).join("").replace("-","_").replace("A","K");



