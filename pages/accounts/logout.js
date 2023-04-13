import React from 'react'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
const Logout = () => {
    const {logoutUser} = useContext(AuthContext)
  return (
    <div>
    <p>هل أنت متأكد أنك تريد تسجيل الخروج</p> <Button onClick={logoutUser}>خروج</Button>
    </div>
  )
}

export default Logout
