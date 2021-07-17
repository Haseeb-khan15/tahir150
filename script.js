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

// Check If Login or Not...
if(localStorage.getItem('login') == "true"){
    // alert("Account saved !")
    var accountName = document.getElementById('accountName');
    var accountBox = document.getElementById('accountBox');
    var accountUserName = document.getElementById('accountUserName');
    var accountEmail = document.getElementById('accountEmail');
    var accountLogout = document.getElementById('accountLogout');
    
    function showMenu(){
        if(accountBox.style.display == "none"){
            accountBox.style.display = "block"
        }else{
            accountBox.style.display = "none"
        }
    }
    accountName.innerHTML = CapitalFirstLetter(localStorage.nm.slice(0,1))
    accountUserName.innerHTML ="Hi , " + CapitalFirstLetter(localStorage.nm)
    accountEmail.innerHTML = CapitalFirstLetter(localStorage.email)
    function CapitalFirstLetter(word){
        word = word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
        return word
    }
    
    accountLogout.addEventListener('click' , function(){
        localStorage.login = "false"
        window.location.reload()
    })
}
else{
    window.location.href = "login.html"
}

