// let Carray=["red","yellow","green"];
function switchliht(){
    let red=document.querySelector(".red");
    let yellow=document.querySelector(".yellow");
    let green=document.querySelector(".green");

   setInterval(function(){
      red.style.background="red";
      yellow.style.background="gray";
      green.style.background="gray";
   },1000);


   setInterval(function(){
    red.style.background="gray";
    yellow.style.background="yellow";
    green.style.background="gray";
   },3000);


 setInterval(function(){
    red.style.background="gray";
    yellow.style.background="gray";
    green.style.background=" rgb(17, 108, 17)";
 },5000);


 setTimeout(switchliht,6000);
}

switchliht();
