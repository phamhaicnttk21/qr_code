const { type } = require('os');
const qrcode = require('qrcode')
let data={
    name:"Alex",
    age:"20",
    university:"Hanoi University",
    id:"No1"
}
let dataStringify=JSON.stringify(data);
qrcode.toString(dataStringify,{type :'terminal'},
function(err,code){
    if(err) return console.log("err")
    console.log(code)
})
