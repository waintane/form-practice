let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#password2");

function matchPassword(){
    if (password.value != passwordConfirm.value){
        alert("the passwords are not the same")
    }
    else{
        return false; 
    }
}
