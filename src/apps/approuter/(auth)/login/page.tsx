import LoginForm from '@/components/loginform'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title : "Login"
}

const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  )
}

export default Login