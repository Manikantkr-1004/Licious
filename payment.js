let paymentdata = JSON.parse(localStorage.getItem("paymentdata")) || [];

let submit = document.getElementById("submit");
let price = document.getElementById("price");
let showimg = document.getElementById("showimg");
let logout= document.getElementById("logout");
let otpinput= document.getElementById("otpsubmit");
let otpsubmit= document.getElementById("finsubmit");

logout.addEventListener("click", function(){
    alert("Logout Successful!!");
    setTimeout(() => {
        window.location.href = "./index.html";
    }, 1000);
})

Display(paymentdata);

function Display(data){

    data.forEach(element => {

        price.innerText = element.totalcost;
    });
}

submit.addEventListener("click", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let mobile = document.getElementById("mobile").value;
    let payment = document.getElementById("paymethod").value;

    
    if (name.trim() === "" || address.trim() === "" || mobile.trim() === "" || payment==="") {
        alert("Please fill in all fields.");
        return;
    }

    let otp = Math.floor(Math.random()* 9000) + 1000;
    console.log("Your 4 digit otp is "+otp);
    console.log(typeof(otp));

    alert("Your 4 digit OTP is "+otp);

    otpinput.style.display = "inline";
    otpsubmit.style.display = "inline";

    otpsubmit.addEventListener("click", function(e){
        e.preventDefault();

        if(Number(otpinput.value) === otp){
            showimg.innerHTML = '<img id="topbar1" src="https://thumbs.gfycat.com/VariablePoliticalBurro-max-1mb.gif">';
            alert("Order Placed Successfully😊");

            setTimeout(() => {
                window.location.href = "./mainpage.html"
            }, 2000);

            localStorage.removeItem("cartdata");
            localStorage.removeItem("paymentdata");
        }else{
            alert("Your OTP is wrong")
        }
    })


})

