window.onload = function() {
  
  const form = document.getElementById("regForm");
 
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh


    const fname = document.getElementById("fname").value;
    const sname = document.getElementById("sname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <h3>Registration Details:</h3>
      <p>First Name: ${fname}</p>
      <p>Second Name: ${sname}</p>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
      <p>Address: ${address}</p>
    `;
  });
};
