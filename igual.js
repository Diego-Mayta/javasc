//pedir numeros//
let a=Math.PI
let b=5
//primera//
var x=a/b;
var y=x/2;
var z=Math.cos(y);
var zf=Math.round(z)
//segunda//
var a1=Math.tan(x);
var b2=Math.sin(x);
var fa=a1+b2;
var aaa=2*Math.tan(x);
var ff=fa/aaa;
var af=Math.round(a1);
document.write("<h2 class=igual.js> la igualdad 1 nos da --> "+ zf+" </h2>")
document.write("<h2 class=igual.js> la igualdad 2 nos da --> "+ af+" </h2>")

if(af==zf){
    document.write("<h2 class=igual.js> la identidad es :"+" verdadera"+" </h2>")
}
else{
    document.write("<h2 class=igual.js> la identidad es : "+"falsa"+" </h2>")
}