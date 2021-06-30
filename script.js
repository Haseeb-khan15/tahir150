let input = document.getElementById('input')
let output = document.getElementById('output')
let divBox = document.getElementById('room')

function calculate(data){
    if(data === "x"){
        data = "*"
    }
    if(input.innerText==="" && output.innerHTML!=0){
        input.innerText = output.innerText
    }
    switch(data){
         case 'AC': input.innerHTML="" , output.innerHTML="0";
         break
         case "C":
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
         break
         case '=':
             output.innerHTML = math.evaluate(input.innerText);
        break
         default : input.innerHTML += data;
    }
}
divBox.style.display = "none"
function display(){
    setTimeout(() => {
        divBox.style.display = "block"
    }, 2000);
}
function closed(){
    divBox.style.display = "none"
}