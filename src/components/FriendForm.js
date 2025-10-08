import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const roleOptions = [
  "Trainer", 
  "Developer", 
  "Manager", 
  "Designer", 
  "Analyst"
];

  const onChange = evt => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    const inputName = evt.target.name //either 'username', 'email'
    // b) pull the value of the input from the event object
    const { value } = evt.target //   who knows, the current value
    // c) use the `update` callback coming in through props
    update(inputName, value) // call the update function with the input name and value coming
    //in through props, this will update the form state in the parent component
  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    evt.preventDefault()
    // c) use the `submit` callback coming in through props
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}

              <input 
                      type="text"
                      value={values.username}
                      onChange={onChange}
                      name="username"
                      placeholder="Enter username"
                   />
        </label>


        <label>Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}

          <input 
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      name="email"
                      placeholder="Enter email"
                   />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role.
          
          Now the local data for role options will be integrated with Backend data.
          The UI will be driven by the local data, but the options will be fetched from the backend.
          Controlled dropdown needs `value` and `onChange` props. The data will be iterated 
          dynamically using the `map` method.
          At each change, a change handler fires to change app state.
          
          */}
          <select 
                      value={values.role}
                      onChange={onChange}
                      name="role"
                   >
            <option value="">---Select a role---</option>
            {roleOptions.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
            {/* <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
            <option value="TL">Team Lead</option>
            <option value="Alumni">Alumni</option> */}

        </select>
        </label>

        <div className='submit'>
          <button disabled={!values.username || !values.email || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}
