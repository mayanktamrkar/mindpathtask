

function check(e) {
    // 
    
    let firstname = document.forms["myform"]["firstname"].value;
    let lastname = document.forms["myform"]["lastname"].value;
    let email = document.forms["myform"]["email"].value;
    let password = document.forms["myform"]["password"].value;
    let cpassword = document.forms["myform"]["cpassword"].value;
    let gender = document.forms["myform"]["gender"].value;
    let country = document.forms["myform"]["country"].value;
    let address = document.forms["myform"]["address"].value;
    let gender_box=document.getElementById("gender")
    let terms_box=document.getElementById("terms")
    let terms = document.forms["myform"]["terms"].value;
    let tel = document.forms["myform"]["tel"].value;
    
   
    //  if(gender==="" || terms=="0" || firstname=="" || lastname=="" || email=="" || password=="" || cpassword =="" || tel==""){
    //     console.log(firstname)
    //     firstname.classList.remove("line-remove")
    //     firstname.classList.add("line")

    //     lastname.classList.remove("line-remove")
    //     lastname.classList.add("line")

    //     email.classList.remove("line-remove")
    //     email.classList.add("line")

    //     password.classList.remove("line-remove")
    //     password.classList.add("line")

    //     cpassword.classList.remove("line-remove")
    //     cpassword.classList.add("line")

    //     tel.classList.remove("line-remove")
    //     tel.classList.add("line")

        

    //     terms_box.classList.remove("line-remove")
    //     terms_box.classList.add("line")
       
    //     gender_box.classList.remove("line-remove")
    //     gender_box.classList.add("line")

    //  }else{
    //     gender_box.classList.remove("line")
    //     gender_box.classList.add("line-remove")

    //  }
      

    if (
        firstname !== "" &&
        email !== "" &&
        password !== "" &&
        cpassword !== "" &&
        gender !== "" &&
        country !== "" &&
        address !== "" 
       
    ) {
        
        if (password !== "" && cpassword !== "") {
            if (password === cpassword) {
                alert("success");
                location.reload()
            } else {
                alert("password and confirm password not match");
                e.preventDefault()
            }
        }else{
            e.preventDefault()

        }
     
    }else{
     

    }

    console.log("this is," ,terms);
}

let a = document.getElementById("submit").addEventListener("click", check);