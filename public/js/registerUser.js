const registerUser = async (event) => {
  // handle page refresh
  event.preventDefault();

  // declare refrences to input fields
  const usernameRegister = document.querySelector("#username-input-register").value;
  const emailRegister = document.querySelector("#email-input-register").value;
  const passwordRegister = document.querySelector("#password-input-register").value;
  const haspetsRegister = document.querySelector("#haspets-input-register").checked;
  // post to /api/user/ to fetch response
  const registerUserRequest = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameRegister,
      email: emailRegister,
      password: passwordRegister,
      has_pets: haspetsRegister,
    }),
    headers: { "Content-Type": "application/json" },
  });
// if request goes through user is moved to profile page
  if (registerUserRequest.ok) {
    document.location.replace('/profile');
  } else {
    // **********do we want to handle this differently?
    alert("You couldn't register, please try again");
  }
};
// event listener on submit 
document.querySelector("#registeruser-form").addEventListener("click", registerUser);
