function multiplicar(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber
    var res = document.getElementById("res")
    res.textContent = n1 * n2
    console.log(n1,n2)
}
