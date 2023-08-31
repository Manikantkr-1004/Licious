let email = document.getElementById("email");
let password= document.getElementById("password");
let submit= document.getElementById("submit");
let form=  document.querySelector("form");
let show= document.getElementById("text");
let logo = document.getElementsByClassName("logo");

logo[0].addEventListener("click",function(){
    window.location.href = "/index.html"
})


let signupdata= JSON.parse(localStorage.getItem("signupdata")) || [];



submit.addEventListener("click", function(e){
    e.preventDefault();

    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    if(available()){
        show.innerText = "Login Successful😊";
        localStorage.setItem("licious_login_name",email.value);
        form.reset();
        alert("Login Successful😊");
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