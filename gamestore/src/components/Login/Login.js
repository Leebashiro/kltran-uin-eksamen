import { fetchUserByEmail } from '../../lib/sanity/userService';

export default function Login({ handleLogin, setEmail, email, setUser, user }) {
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = await fetchUserByEmail(email);

    if (userData) {
      console.log(userData);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      handleLogin();
    } else {
      alert('Feil e-postadresse, prøv igjen');
    }
  };

  return (
    <>
      <div id="login-container">
        {!user ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-postadresse:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
            <button type="submit">Logg inn</button>
          </form>
        ) : null}
      </div>
    </>
  );
}