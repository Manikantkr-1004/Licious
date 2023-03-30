let email = document.getElementById("email");
let password= document.getElementById("password");
let submit= document.getElementById("submit");
let form=  document.querySelector("form");
let show= document.getElementById("text");

let signupdata= JSON.parse(localStorage.getItem("signupdata")) || [];



submit.addEventListener("click", function(e){
    e.preventDefault();
    
    if(available()){
        form.reset();
        alert("Login Successful😊");
        show.innerText = "Login Successful😊";
        setTimeout(() => {
            window.location.href = "./mainpage.html";
        }, 2000);
    }else{
        form.reset();
        alert("Your Email or Password is Wrong❌")
    }
})



function available(){

    let flag= false;

    signupdata.forEach(element => {
        if(element.Email === email.value && element.Password=== password.value){
            flag = true;
        }
    });
    return flag;
}