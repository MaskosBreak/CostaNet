function multiplicar(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var res = document.getElementById("res")
    res.textContent = n1 * n2
    console.log(n1,n2)
}
function dividir(){
    var n3 = parseFloat(document.getElementById("n3").value)
    var n4 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resp")
    if(n4!==0){
    resp.textContent = n3 / n4
    }
    else{
        resp.textContent = "Ce é burro pac?"
    }
    console.log(n3,n4)
}
