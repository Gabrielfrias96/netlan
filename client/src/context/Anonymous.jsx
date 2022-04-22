import React , {createContext, useState} from 'react'

export const anonymous = createContext()

const Anonymous = ({children}) => {

const [role, setRole] = useState(null)
const [isLogged, setIsLogged] = useState(false)
const [user,setUser] = useState(null)




  return (
      <anonymous.Provider value={{role , setRole , isLogged , setIsLogged, user,setUser}}>
        {children}
      </anonymous.Provider>
  )
}

export default Anonymous