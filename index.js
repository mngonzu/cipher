const regex =/\b(\d{1,3}(?:\d{3}){2}(-?)[\dkK])\b/;
const digits =(run) =>regex.test(run)?run.length<10? "0".concat(run).replace("-","_"): run.replace("-","_"):"rut invalido";
const ascii =[40,40,49,50,49,65,20,31,19,5];
const ciph =(run)=> digits(run).split("").map((item,index)=>String.fromCharCode(item.charCodeAt(0)+ascii[index])).join("");
const deciph =(str)=>str.split("").map((item,index)=>String.fromCharCode((item.charCodeAt(0))-ascii[index])).join("");