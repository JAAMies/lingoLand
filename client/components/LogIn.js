import React from 'react';
import { Link} from 'react-router-dom';

export default function Login() {
  return (
    <div id="container">   
      <div>    
      <form>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <div id="lower">
      <input type="checkbox" />
      <label htmlFor="checkbox">Keep me logged in</label>
      <input type="submit" value="Login" />
      </div>
      </form>
      <label>First time here?</label> <Link to={`/signup`}><button>Sign Up</button></Link>
      </div>
    </div>
  )
}