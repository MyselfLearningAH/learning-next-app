import RegisterForm from '@/components/registerform'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title : "Register"
}

const Login = () => {
  return (
    <>
      <RegisterForm />
    </>
  )
}

export default Login