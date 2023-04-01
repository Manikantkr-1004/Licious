let container = document.getElementById("container");
let length = document.getElementById("length");
let pay= document.getElementById("pay");
let totalprice = document.getElementById("totalprice");
let show= document.getElementById("show");
let logout= document.getElementById("logout");


let cartdata= JSON.parse(localStorage.getItem("cartdata")) || [];
let paymentdata = JSON.parse(localStorage.getItem("paymentdata")) || [];

logout.addEventListener("click", function(){
    alert("Logout Successful!!");
    setTimeout(() => {
        window.location.href = "./index.html";
    }, 1000);
})

length.innerText = cartdata.length;

Display(cartdata);

function Display(data){
    container.innerHTML = "";

    data.forEach((element,index) => {
        
        length.innerText = data.length;
        let box= document.createElement("div");
        let images= document.createElement("img");
        let names= document.createElement("h4");
        let weights= document.createElement("p");
        let prices= document.createElement("h4");
        let deliveries= document.createElement("p");
        let increase= document.createElement("button");
        let quantity= document.createElement("span");
        let decrease= document.createElement("button");
        let remove= document.createElement("button");

        images.src= element.img;
        names.innerText= element.name;
        weights.innerText = element.weight;
        prices.innerText= "₹"+element.price;
        deliveries.innerText= element.date;
        increase.innerText = "+";
        quantity.innerText = element.quantity;
        decrease.innerText = "-";
        remove.innerText = "Remove";

        remove.addEventListener("click",function(){
            data.splice(index,1);
            localStorage.setItem("cartdata", JSON.stringify(data));
            Display(data);

            length.innerText = data.length;
            updateTotalPrice();
        })

        increase.addEventListener("click", function(){
            element.quantity++;
            localStorage.setItem("cartdata", JSON.stringify(data));
            Display(data);
            updateTotalPrice();
        })

        decrease.addEventListener("click", function(){
            if(element.quantity>1){
                element.quantity--;
                localStorage.setItem("cartdata", JSON.stringify(data));
                Display(data);
                updateTotalPrice();
            }
        })


        box.append(images, names, weights, prices, increase, quantity, decrease,deliveries, remove);
        container.append(box);

        pay.addEventListener("click", function(){
            if(cartdata.length===0){

            }else{

                show.innerHTML = '<img style="width:13%;" src="https://gifdb.com/images/high/animated-transparent-background-check-mark-lb1gygckicpca0fb.gif">';
                paymentdata.push({...element, totalcost: totalprice.innerText});
                localStorage.setItem("paymentdata", JSON.stringify(paymentdata));
                setTimeout(() => {
                    window.location.href = "./payment.html"
                }, 2000);
            }
        })

    });
}

function updateTotalPrice() {
    let sum=0;
    for(let i=0; i<cartdata.length; i++){
        sum+= cartdata[i].quantity*cartdata[i].price;
    }
    totalprice.innerText = sum;
    
    if (cartdata.length === 0) {
        totalprice.innerText = 0;
    }
}

updateTotalPrice();
