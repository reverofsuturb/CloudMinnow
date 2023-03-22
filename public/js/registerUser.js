const registerUser = async (event) => {
  // handle page refresh
  event.preventDefault();

  // declare refrences to input fields
  const usernameRegister = document.querySelector("#username-input-register");
  const emailRegister = document.querySelector("#email-input-register");
  const passwordRegister = document.querySelector("#password-input-register");
  const haspetsRegister = document.querySelector("#haspets-input-register");

  // post to /api/users/ to fetch response
  const registerUserRequest = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameRegister.value,
      email: (emailRegister = emailRegister.value),
      password: passwordRegister.value,
      has_pets: haspetsRegister.value,
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
document.querySelector("#registeruser-form").addEventListener("submit", registerUser);
