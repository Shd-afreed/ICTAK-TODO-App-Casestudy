

  
let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");



function validation(){

        if(inputEmail.value!="admin"){
             inputEmail.style.border="red solid";
            // alert("Wrong Username");
            return false;
    
        }
        else if(inputEmail.value=="admin" && inputPassword.value!="12345"){
            inputPassword.style.border="red solid";
            inputEmail.style.border="green solid";
            // alert("Wrong Password");
            return false;
        }
        else if(inputEmail.value=="admin"&&inputPassword.value=="12345"){
            inputEmail.style.border="green solid";
            inputPassword.style.border="green solid";
        submit(callback);
        }
    }
    function submit(callback)
            {
               callback();
            }    
     
    function callback(){
            $(window.location).attr('href', 'main.html');
    }
     
