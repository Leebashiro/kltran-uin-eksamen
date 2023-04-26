import React, { useState } from 'react';
import { fetchUserByEmail } from '../../lib/sanity/userService';

export default function Login({handleLogin}) {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState(null)
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = await fetchUserByEmail(email)

    if (userData) {
    console.log(userData)
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      handleLogin();
      
    } else {
      alert('Feil e-postadresse, prøv igjen')
    }
  }

  return (
    <>
      {!user ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-postadresse:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
          <button type="submit">Logg inn</button>
        </form>
      ) : null}
    </>
  )
}

