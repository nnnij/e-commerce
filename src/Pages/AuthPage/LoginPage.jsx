import React from 'react'
import LogNav from '../../Component/Auth/LogNav'
import CardLogin from '../../Component/Auth/CardLogin'
import { Container } from 'react-bootstrap'
const LoginPage = () => {
  return (
    <Container>
      <LogNav/>
      <CardLogin/>
    </Container>
  )
}

export default LoginPage
