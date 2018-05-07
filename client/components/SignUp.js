import React from 'react';
import { Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div id="container">       
      <form>
      <label htmlFor="name">name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <label htmlFor="password">Confirm Password:</label>
      <input type="password" id="password" name="password" />
      <div id="lower">
      <input type="checkbox" />
      <label htmlFor="checkbox">Keep me logged in</label>
      <input type="submit" value="Sign Up" />
      </div>
      </form>
      <label>Been here before?</label> <Link to={`/login`}><button>Login</button></Link>
    </div>
  )
}