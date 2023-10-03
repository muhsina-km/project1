import React, { useState } from 'react'

const Home = (props) => {

  return (
    <div>
      
      <h1> Welcome </h1>

      <button type='submit' onClick={props.onLogout}>Logout</button>

    </div>
  )
}

export default Home
