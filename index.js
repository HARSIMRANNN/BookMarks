//for google card
let g = document.getElementById("google")
let ev1 = function(event)
{
   let c = confirm("You will be directed to google.com")
   if(c){
    // let l = document.getElementById("lnk")
    // l.setAttribute('href','https://www.google.com/')
    window.location="https://www.google.com/"
   }
   else{
      alert("Ok You won't be redirected to that browser")
   }
} 
g.addEventListener('dblclick',ev1)

//for amazon card
let a = document.getElementById("amazon")
let ev2 = function(event){
   let r = confirm("Do you want to do shopping?")
   if(r){
      window.location="https://www.amazon.in/"
   }
   else{
      alert("Ok, then donot hover your mouse on amazon icon")
   }
}
a.addEventListener('mouseover',ev2)

//for gfg card
let gfg = document.getElementById("gfg")
let ev3 = function(event){
   alert("Get ready for study")
}
gfg.addEventListener('click',ev3)
