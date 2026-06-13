import { useState } from 'react'
import userContext from './UserContext'


function userContextProvider({childern}) {
    const [user, setUser] = useState(null)

  return (
    <userContext.Provider value={{user,setUser}}>
        {childern}
    </userContext.Provider>    
  )
}

export default userContextProvider