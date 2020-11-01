import React from 'react'
import { Link } from 'react-router-dom';




const Welcome = (props) => {
  return(
      <div class="block">Welcome to the emigration laboratory!
       <Link to="/prec"><div class="block"> <button class = "button">Let's start!</button></div>  </Link>
      </div>)}

      export default Welcome