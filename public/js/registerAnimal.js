const registerAnimal = async (event) => {
  // handle page refresh
  event.preventDefault();

  // declare refrences to input fields
  const animalName = document.querySelector('#animalname-input-register').value;
  const animalAge = document.querySelector('#animalage-input-register').value;
  const animalSpecies = document.querySelector('#animalspecies-input-register').value;
  const animalDescription = document.querySelector('#animaldescription-input-register').value;
console.log(animalName);
console.log(animalAge);
console.log(animalSpecies);
console.log(animalDescription);
   // post to /api/animals/ to fetch response
  const registerAnimalRequest = await fetch ('/api/animal', {
    method: 'POST',
    body: JSON.stringify({
      name: animalName,
      age: animalAge,
      species_id: animalSpecies,
      description: animalDescription,
      // user_id:? this.user.id?
    }),
    headers: { 'Content-Type': 'application/json' },
  });
console.log(registerAnimalRequest);
  if (registerAnimalRequest.ok) {
    document.location.replace('/profile');
  } else {
    // **********do we want to handle this differently?
    alert("You couldn't register your animal, please try again");
  }
};

// event listener on submit 
document.querySelector('#registeranimal-form').addEventListener('submit', registerAnimal);
