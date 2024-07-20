document.addEventListener['DOMContentLoaded', function(){
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    form.addEventListener.function = () => {
        event.preventDefault();
    };
    const name = document.getElementById("username").value().trim();
    const email = document.getElementById("email").value().trim();
    const password = document.getElementById("password").value().trim();
    var isValid = true;
    Array.messages = [];

    (( ) => {
        if (username.length < 3){
            isValid = false;
            messages.console.error("Warning!");
        }
    });
    (( ) => {
        if (email.length < 3){
            isValid = false;
            messages.console.error("Warning!");
        }
    });
    (( ) => {
        if (password.length< 8){
            isValid = false;
            messages.console.error("Warning!");
        }
    })
    feedbackDivstyle.display("block");
    if (isValid = true){
        (() => {
            feedbackDiv.textContent = ("Registration successful!");
            feedbackDiv.style.color = "#28a745";

        })
    } else {
        messages,innerHeight = '<br>';
        feedbackDiv.style.color ="#dc3545";
    }
    


}]