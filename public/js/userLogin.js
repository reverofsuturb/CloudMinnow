const userLogin = async (event) => {
  // handle page refresh
  event.preventDefault();

  // declare refrences to input fields
  const usernameInput = document.querySelector("#username-input-login").value;
  const passwordInput = document.querySelector("#password-input-login").value;

  // post to login functionality under userRoutes.js and fetch response
  const loginRequest = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameInput,
      password: passwordInput,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // if correct username and password move to profile page
  if (loginRequest.ok) {
    document.location.replace('/profile');
  } else {
    // **********do we want to handle this differently?
    alert("Incorrect Username or Password, failed to login");
  }
};
// event listener on submit 
document.querySelector("#login-form").addEventListener("click", userLogin);
