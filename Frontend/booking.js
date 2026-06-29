document.getElementById("bookingForm")
.addEventListener("submit",
async function(e){

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value;

    const email =
    document.getElementById("email").value;

    const destination =
    document.getElementById("destination").value;

    const travelDate =
    document.getElementById("travelDate").value;

    const persons =
    document.getElementById("persons").value;

    const message =
    document.getElementById("message");


    if(

        fullname === "" ||

        email === "" ||

        destination === "" ||

        travelDate === "" ||

        persons === ""

    ){

        message.innerHTML =
        "All fields are required";

        return;
    }


    if(persons <= 0){

        message.innerHTML =
        "Persons must be greater than 0";

        return;
    }


    const bookingData = {

        fullname,
        email,
        destination,
        travelDate,
        persons

    };


    try{

        const response = await fetch(

            "http://localhost:5000/api/bookings",

            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(bookingData)

            }

        );

        const data =
        await response.json();

        message.style.color =
        "green";

        message.innerHTML =
        data.message;

        document.getElementById(
        "bookingForm").reset();

    }
    catch(error){

        message.style.color =
        "red";

        message.innerHTML =
        "Error connecting to server";

    }

});


function logout(){

    localStorage.removeItem(
    "loggedInUser");

    window.location.href =
    "login.html";

}