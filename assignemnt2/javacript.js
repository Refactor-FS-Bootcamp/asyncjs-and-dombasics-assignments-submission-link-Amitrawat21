

document.getElementById("meter").addEventListener("input", e=> {
    let meter=e.target.value;
    console.log(meter);
    document.getElementById("cm").innerText= meter * 100;    
})

document.getElementById("kg").addEventListener("input", e=> {
    let kg=e.target.value;
    console.log(kg);
    document.getElementById("gm").innerText=  kg* 1000 + "gm";    
})