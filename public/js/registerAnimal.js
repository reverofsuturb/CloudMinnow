const registerAnimal = async (event) => {
  // handle page refresh
  event.preventDefault();

  // declare refrences to input fields
  const animalName = document.querySelector('#animalname-input-register');
  const animalAge = document.querySelector('#animalage-input-register');
  const animalSpecies = document.querySelector('#animalspecies-input-register');
  const animalDescription = document.querySelector('#animaldescription-input-register');

   // post to /api/animals/ to fetch response
  const registerAnimalRequest = await fetch ('/api/animal', {
    method: 'POST',
    body: JSON.stringify({
      name: animalName.value,
      age: animalAge.value,
      species_id: animalSpecies.value,
      description: animalDescription.value,
      // user_id:? this.user.id?
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (registerAnimalRequest.ok) {
    document.location.replace('/profile');
  } else {
    // **********do we want to handle this differently?
    alert("You couldn't register your animal, please try again");
  }
};

// event listener on submit 
document.querySelector('#registeranimal-form').addEventListener('submit', registerAnimal);
