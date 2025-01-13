function longin(){

var emailInput = document.getElementById('email')
var emailError = document.getElementById('emailError')
var passwordInput = document.getElementById('password')



    var email = emailInput
    var password = passwordInput

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     
    if(!emailRegex.test(email)){
        emailError.innerText = "Invalid email. Please enter a valid email address.";
        window.location.href = "index.html";
        emailError.style.display="block"
        
    }
    else{
        emailError.style.display="none"
        var username = email.split('@')[0]
        sessionStorage.setItem("username",username)
        sessionStorage.setItem('password', password);
    
    
    
}
}