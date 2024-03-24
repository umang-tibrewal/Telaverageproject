import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
        <nav >
   
              <ul>

             

                
                <li>

                    <Link to="/Login">Login</Link>
                  
                </li>

                  
                <Link to="/Acess">   <button>Acess</button> </Link>
      

              </ul>
            </nav>

      
    </div>
  )
}

export default Home
