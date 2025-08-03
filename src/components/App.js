import React, { useState, useEffect } from 'react'
import Friend from './Friend'
import FriendForm from './FriendForm'
import axios from '../axios'

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

export default function App() {
  const [friends, setFriends] = useState([]) // careful what you initialize your state to

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues); // fix this using the state hook

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({
      ...formValues,
      [inputName]: inputValue, // dynamically set the property name based on the input's name
    })
  }

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    //  b) prevent further action if either username or email or role is empty string after trimming
    if(!newFriend.username || !newFriend.email || !newFriend.role) {
      alert('All fields are required');
      return;
    }
    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    axios.post('/friends/addFriend', newFriend).then(res => {
      const friendFromBackend = res.data // includes a unique 'id' - from real Spring Boot API
      setFriends([friendFromBackend, ...friends]) // add new friend at the beginning
      setFormValues(initialFormValues); // reset the form values to initial state
    }).catch(err => {
      console.error('Error adding friend:', err);
      alert('An error occurred while adding the friend');
    });
  }

  const deleteFriend = (friendId) => {
    // 🔥 DELETE function - Remove friend from database and update state
    axios.delete(`/friends/${friendId}`).then(res => {
      // Remove friend from state after successful deletion
      setFriends(friends.filter(friend => friend.id !== friendId));
    }).catch(err => {
      console.error('Error deleting friend:', err);
      alert('An error occurred while deleting the friend');
    });
  }

  useEffect(() => {
    axios.get('/friends').then(res => {
      console.log('Friends data received:', res.data)
      setFriends(res.data)
    })
      .catch(err => {
        console.error('Error fetching friends:', err)
        console.error('Error details:', err.response?.data)
        console.error('Error status:', err.response?.status)
        console.error('Error message:', err.message)
      })
  }, [])

  return (
    <div className='container'>
      <h1>Form App</h1>

      <FriendForm
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of FriendForm
        //  to see what props it expects.
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />

      {
        friends.map(friend => {
          return (
            <Friend 
              key={friend.id} 
              details={friend} 
              onDelete={deleteFriend}
            />
          )
        })
      }
    </div>
  )
}
