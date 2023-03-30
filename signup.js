let names= document.getElementById("name");
let email = document.getElementById("email");
let password= document.getElementById("password");
let submit= document.getElementById("submit");
let form=  document.querySelector("form");
let show= document.getElementById("text");

let signupdata= JSON.parse(localStorage.getItem("signupdata")) || [];

submit.addEventListener("click", function(e){
    e.preventDefault();

    let Data= {
        Name: names.value,
        Email: email.value,
        Password: password.value,
    };

    if(checkavailable()){
        alert("You already registered, Please Login😊")
    }else{
        signupdata.push(Data);
        localStorage.setItem("signupdata", JSON.stringify(signupdata));
        form.reset();
        alert("Signup Successful😊")
        show.innerText = "Signup Successful😊";
        setTimeout(() => {
            window.location.href = "./signin.html"
        }, 2000);
    }
})

function checkavailable(){
    for(let i=0; i<signupdata.length; i++){
        if(signupdata[i].Email=== email.value){
            return true;
        }
    }
    return false;
}