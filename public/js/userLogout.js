const userLogout = async () => {
  // post to api/user/logout to fetch response
  const logoutRequest = await fetch("api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // if request goes through user is moved to page
  if (logoutRequest.ok) {
    document.location.replace('/');
  } else {
    // **********do we want to handle this differently?
    alert("Something went wrong, failed to log out, please try again");
  }
};
// // event listener on click
document.querySelector('#userLogout').addEventListener('click', userLogout());