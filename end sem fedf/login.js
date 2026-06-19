const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();
const button = document.getElementById("loginForm").querySelector("input[type='submit']");

alert("fill the details");

button.addEventListener("click", function(event) {
    event.preventDefault();
    if (username === "" || password === "") {
        alert("Please fill in all fields.");
    } else {

        alert("Login Successful");
    }
});
label ("login Sucessful");
