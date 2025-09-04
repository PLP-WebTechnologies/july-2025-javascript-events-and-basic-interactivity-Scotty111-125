document.getElementById("myform").onsubmit =function(event){
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    


    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isvalid= true;


    if(username=== ""){
        document.getElementById("usernameError").innerText = "The username is required!";
        isvalid = false;

    }


    let passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if(password=== ""){
        document.getElementById("passwordError").innerText = "Your Password is required!";
        isvalid = false;
    } else if(!passwordpattern.test(password)){
        document.getElementById("passwordError").innerText = "Invalid Password formart! (8 characters including: lowercase and uppercase a number and special character)";
        isvalid = false;
    }


    if (isvalid){
        alert("Submitted Succesfully!");
        document.getElementById("my form").reset();
    }


    
}

function toggleTheme() {

    document.body.classList.toggle("dark");
}