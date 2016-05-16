// JavaScript Document


function showList(div_id) 
{ 
var obj = document.getElementById(div_id + "_ljf"); 
var click_obj = document.getElementById(div_id); 
var text = click_obj.innerHTML;

if(obj.style.display == "none") 
{ 
var str = div_id.substring(0,div_id.length-1); 
var num = div_id.replace(str,""); 
for(i=1;;i++) 
{ 
   if(!document.getElementById(str+i)) break; 
   document.getElementById(str+i+"_ljf").style.display = "none"; 
   var iHtml = document.getElementById(str+i).innerHTML; 
   document.getElementById(str+i).innerHTML = iHtml.replace("-","+"); 
} 
   
obj.style.display = "block"; 
click_obj.innerHTML = text.replace("+","-"); 
} 
else 
{ 
obj.style.display = "none"; 
click_obj.innerHTML = text.replace("-","+"); 
} 
} 
