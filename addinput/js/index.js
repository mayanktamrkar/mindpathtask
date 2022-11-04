var sum=0
var valuetwo=0
function add(){
    
    valuetwo =parseInt(valuetwo)
    console.log(valuetwo)
    sum= sum+valuetwo
  
  
    document.getElementById("print").innerHTML=sum
    document.getElementById("input").value=""
}
function insertdata(){
    valuetwo=document.getElementById("input").value

   
    
}
function reset(){
    sum=0
    document.getElementById("print").innerHTML=0
}
