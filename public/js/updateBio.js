const updateBio = async (event) => {
  // handle page refresh
  event.preventDefault();

  // declare refrences to input fields
  const userbioInput = document.querySelector("#update-user-bio").value;

  const updatebioRequest = await fetch("/profile/", {
    method: "PUT",
    body: JSON.stringify({
      biography: userbioInput,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (updatebioRequest.ok) {
    document.location.replace('/profile');
  } else {
    // **********do we want to handle this differently?
    alert("Biography failed to update");
  }
};
// event listener on submit 
document.querySelector("#bio-form").addEventListener("click", updateBio);