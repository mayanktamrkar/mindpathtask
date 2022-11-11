
function check(e){
   
   
    let fullname=document.forms["myform"]["fullname"].value
    let email=document.forms["myform"]["email"].value
    let password=document.forms["myform"]["password"].value
    let cpassword=document.forms["myform"]["cpassword"].value
    let gender=document.forms["myform"]["gender"].value
    let country=document.forms["myform"]["country"].value
    let address=document.forms["myform"]["address"].value
    let terms=document.forms["myform"]["terms"].value
    if(fullname!=="" && email!=="" && password!=="" && cpassword!=="" && gender!=="" && country!=="" && address!=="" ){
        console.log("working")

    }

    console.log(fullname,password,cpassword,email,gender,country,address,terms)

}


let a=document.getElementById("submit").addEventListener("click",check)
