import React from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialFormValues = { petName: '', petType: '' }

function SimpleForm() {

  //Use state to initialize the data to the state 

  const [pets, setPets] = useState(petsList);
  // const [petName, setPetName] = useState('');
  // onst [petType, setPetType] = useState('');

  const [formValues, setFormValues] = useState(initialFormValues);


  const [error, setError] = useState('');

  const change = (evt) => {
    const { name, value } = evt.target;
    // 🔥 STEP 1 - IMPLEMENT the change handler for our input
    setFormValues({
      ...formValues,
      [name]: value, // dynamically set the property name based on the input's name
    });
  }

  const submit = (evt) => {
    /* 🔥 STEP 2 - IMPLEMENT the submit handler
     * a) don't allow the browser to reload!
     * b) prevent further action if either petName or petType is empty string
     * c) add the new pet to the list of pets in state
     * d) clear the form
     * */

    evt.preventDefault(); // prevent the default form submission behavior
    
    // Create a new pet object with trimmed values
    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim(),
    };

    // Validate that both fields have content after trimming
    if (!newPet.petName || !newPet.petType) {
      setError('Both fields are required');
      return;
    }

    // Add the new pet using concat (creates new array)
    setPets(pets.concat(newPet));
    setFormValues(initialFormValues); // clear the form
    setError(''); // clear any previous error message
  }




  return (
    <div className="container">
      <h1>Simple Form</h1>

      {/* Display error message if there is one */}
      {error && <p className="error">{error}</p>}

      {/* Display list of pets */}
      {pets.map((pet, index) => (
        <div key={index} className="pet">
          <p>Pet Name: {pet.petName}</p>
          <p>Pet Type: {pet.petType}</p>
        </div>
      ))}
      
      <form onSubmit={submit} className="form">
        <input 
          value={formValues.petName}
          onChange={change}
          name="petName"
          type="text"
          placeholder="Pet Name"
        />

        <input 
          value={formValues.petType}
          onChange={change}
          name="petType"
          type="text"
          placeholder="Pet Type"
        />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  )
}

const root = createRoot(document.querySelector('#root'))
root.render(
  <>
    <SimpleForm />
    <App />
  </>
)
