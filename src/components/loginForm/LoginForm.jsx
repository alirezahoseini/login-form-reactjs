import { Formik, Form } from 'formik'
import { User } from 'iconsax-react'


import PasswordInput from '../PasswordInput/PasswordInput'
import NormalInput from '../NormalInput/NormalInput'

export default function LoginForm() {

  return (
    <div id="login-form">
      <h2 className='text-center font-bold mb-10'>لطفا وارد شوید</h2>
      <Formik initialValues={{
        username: '',
        password: ''
      }}
        onSubmit={(values) => {
          console.log(values)
        }} >
        <Form>
          <NormalInput >
            <User className='input-icon' size='21' />
          </NormalInput>
          <PasswordInput />
        </Form>
      </Formik>
      <form>


      </form>
    </div>
  )
}

