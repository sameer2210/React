import React from 'react'
import SignIN from './components/SignIn'
import SignUp from './components/SignUp'
import Registered_user from './components/Registered_user'

const App = () => {
  return (
    <div>
      <SignIN/>
      <br/>
      <hr/>
      <br/>
      <SignUp/>
      <br/>
      <hr/>
      <br/>
      <Registered_user/>

    </div>
  )
}

export default App
