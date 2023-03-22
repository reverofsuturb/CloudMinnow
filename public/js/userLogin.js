const userLogin = async (event) => {
  // handle page refresh
  event.preventDefault();

  // declare refrences to input fields
  const usernameInput = document.querySelector("#username-input-login");
  const passwordInput = document.querySelector("#password-input-login");

  // post to login functionality under userRoutes.js and fetch response
  const loginRequest = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // if correct username and password move to page
  if (loginRequest.ok) {
    // **********document.location.replace('/'); route to which page?
  } else {
    // **********do we want to handle this differently?
    alert("Incorrect Username or Password, failed to login");
  }
};
// event listener on submit 
document.querySelector("#login-form").addEventListener("submit", userLogin);
