import React, { useEffect, useState } from 'react'
import FormLogin from '../login/FormLogin'
import LoggedIn from '../login/LoggedIn'

const Login = () => {

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        setIsLogged(localStorage.getItem('token'))
    }, [])
    

  return (
    <main>
        {
            isLogged ?
            <LoggedIn setIsLogged={setIsLogged} isLogged={isLogged}/>
            :
            <FormLogin setIsLogged={setIsLogged}/>
        }
    </main>
  )
}

export default Login