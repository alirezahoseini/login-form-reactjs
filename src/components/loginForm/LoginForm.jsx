import { Formik, Form } from 'formik'
import { User } from 'iconsax-react'
import { Link } from 'react-router-dom'

/* ------ Components ------ */
import PasswordInput from '../PasswordInput/PasswordInput'
import NormalInput from '../NormalInput/NormalInput'
import RememberCheckbox from "../../components/RememberCheckbox/RememberCheckbox"

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
          <div className='flex items-center justify-between'>
            <RememberCheckbox />
            <Link to='#' className='text-sm text-[#484FE8]'>بازیابی رمز عبور</Link>
          </div>
        </Form>
      </Formik>
      <form>


      </form>
    </div>
  )
}

