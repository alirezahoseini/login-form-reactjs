import { Field } from 'formik'
// eslint-disable-next-line react/prop-types
export default function NormalInput({children}) {
  return (
    <div className="input-group">
      <label htmlFor="username">نام کاربری</label>
      <div className='input-parent'>
        {children}
        <Field name='username' id='username' type="text" placeholder="نام کاربری خود را وارد کنید" />
      </div>
    </div>
  )
}


