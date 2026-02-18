// importing all buttons & components from HTMl

let labl = document.getElementById(`count`);
const ml50 = document.getElementById(`add50`);
const ml100 = document.getElementById(`add100`);
const ml200 = document.getElementById(`add200`);
const ml500 = document.getElementById(`add500`);
const li1 = document.getElementById(`add1L`);
let amunt = 0;

// calling func acc to button pressed 
 
ml50.onclick = ()=>{
    add50();
    labl.innerHTML = `${amunt.toFixed(2)} Lit`;  
}
ml100.onclick = ()=>{
    add100();
    labl.innerHTML = `${amunt.toFixed(2)} Lit`;  
}
ml200.onclick = ()=>{
    add200();
    labl.innerHTML = `${amunt.toFixed(2)} Lit`;  
}
ml500.onclick = ()=>{
    add500();
    labl.innerHTML = `${amunt.toFixed(2)} Lit`;  
}
li1.onclick = ()=>{
    add1lit();
    labl.innerHTML = `${amunt.toFixed(2)} Lit`;  
}

// declaring functions for adding water amount

function add50(){
    amunt = amunt + 0.05;
    amunt = Number(amunt);
    return amunt;
}
function add100(){
    amunt = amunt + 0.1;
    amunt = Number(amunt);
    return amunt;
}
function add200(){
    amunt = amunt + 0.2;
    amunt = Number(amunt);
    return amunt;
}
function add500(){
    amunt = amunt + 0.5;
    amunt = Number(amunt);
    return amunt;
}
function add1lit(){
    amunt = amunt + 1;
    amunt = Number(amunt);
    return amunt;
}

console.log(Date());