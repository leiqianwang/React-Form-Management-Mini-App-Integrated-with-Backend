import React from 'react'
import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import axios from './axios' // the custom axios instance we made
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
// const petsList = [
//   { petName: 'Fido', petType: 'dog' },
//   { petName: 'Tweetie', petType: 'canary' },
//   { petName: 'Goldie', petType: 'fish' },
// ]

const initialFormValues = { petName: '', petType: '' }

function SimpleForm() {

  //Use state to initialize the data to the state 

  const [pets, setPets] = useState([]);
  // const [petName, setPetName] = useState('');
  // onst [petType, setPetType] = useState('');

  const [formValues, setFormValues] = useState(initialFormValues);

useEffect(() => {
  

  //Make API call to get all pets from the backend
  // axios.get('/pets').then(res => {
  //   setPets(res.data)
  // }).catch(err => {
  //   console.error('Error fetching pets:', err)
  // })

  axios.get("/pets").then(res => {
     setPets(res.data);
     console.log('Pets state has changed:', res.data)
  }).catch(err => {
    console.error("Error fetching pets:", err);

  })
}, []);

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
    console.log('Submitting called');
    evt.preventDefault(); // prevent the default form submission behavior
    

    console.log('Form values before creating newPet:', formValues);
    // Create a new pet object with trimmed values
    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim(),
    };
    console.log('newPet object created:', newPet);

    //Make API call to add pet to backend
    axios.post('/pets/addPet', newPet).then(res => {
        console.log('Pet added successfully:', res.data);
        //Assuming backend returns the newly created pet object
        setPets([...pets, res.data]);
        setFormValues(initialFormValues); // clear the form
    })
    .catch(err => {
        console.error('Error adding pet:', err);
    });
  }



  return (
    <div className="container">
      <h1>Simple Form</h1>

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
