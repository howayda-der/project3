function my_function(){
    document.getElementById("div1").style.display="block"
    document.getElementById("div2").style.display="block"
    document.getElementById("div3").style.display="block"
}
document.getElementById("btn0").addEventListener("click",my_function)

function my_function1(){
    document.getElementById("div1").style.display="block"
    document.getElementById("div2").style.display="none"
    document.getElementById("div3").style.display="none"
}
document.getElementById("btn1").addEventListener("click",my_function1)

function my_function2(){
    document.getElementById("div1").style.display="none"
    document.getElementById("div2").style.display="block"
    document.getElementById("div3").style.display="none"
}
document.getElementById("btn2").addEventListener("click",my_function2)

function my_function3(){
    document.getElementById("div1").style.display="none"
    document.getElementById("div2").style.display="none"
    document.getElementById("div3").style.display="block"
}
document.getElementById("btn3").addEventListener("click",my_function3)
