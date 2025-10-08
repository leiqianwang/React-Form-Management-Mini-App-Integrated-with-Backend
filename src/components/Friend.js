import React from 'react'

export default function Friend(props) {
  const { details, onDelete } = props

  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${details.username}?`)) {
      onDelete(details.id);
    }
  }

  return (
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
      <button 
        onClick={handleDelete}
        className="delete-button"
        style={{
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Delete
      </button>
    </div>
  )
}
