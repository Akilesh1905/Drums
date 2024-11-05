var random = Math.random() * 6;
var result = Math.floor(random + 1);
var result2=Math.floor(Math.random()*6 +1);
var element = document.querySelectorAll("img")[0];
var dummy="./images"+"/dice"+result+".png";
const attributeValue = element.setAttribute("src",dummy);
var img2=document.querySelectorAll("img")[1];
var dummy2="./images"+"/dice"+result2+".png"
const attr=img2.setAttribute("src",dummy2);
var display=document.querySelectorAll("h1")[0];;
if(result>result2) {
    display.textContent="left wins";
}
else {
    display.textContent="right wins";
}
console.log(element);
console.log(result2);


