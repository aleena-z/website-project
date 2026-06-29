document.getElementById("registerForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;

    const message = document.getElementById("message");

    if(username.length < 3){
        message.innerHTML = "Username must be at least 3 characters";
        return;
    }

    if(email === "" || password === ""){
        message.innerHTML = "Required fields cannot be empty";
        return;
    }

    const userData = {
        username,
        email,
        password,
        phone,
        address,
        dob
    };

    try{

        const response = await fetch("http://localhost:5000/api/users/register",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        message.innerHTML = data.message;

    }
    catch(error){
        message.innerHTML = "Error connecting to server";
    }

});