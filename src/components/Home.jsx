import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  return (
    isAuthenticated && (
      <div>
        <div style={{ display:'flex', flexDirection: 'row', justifyContent:'center' }}>
          <img src={user.picture} alt={user.name} />
          <div style= {{ marginLeft:'10px' }}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={() => logout({ returnTo: 'http://localhost:3000' })}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    )
      
    
    
  )
}

export default Home