function validateLoginForm(){
    //alert("Test Case 123")
    let email = document.getElementById('email').value; 

    if(email ==""){
        //alert("Please Enter Email");
        document.getElementById('emailMsg').innerHTML="Please Enter Email Id:"
    }
    else{
        alert(email)
    }

    return false;
}