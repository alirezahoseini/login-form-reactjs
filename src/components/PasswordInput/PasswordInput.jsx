import { Field } from 'formik'
import {Lock, Eye, EyeSlash } from 'iconsax-react'
import { useState } from 'react'

const PasswordInput = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <div className="input-group password-input">
            <label htmlFor="">کلمه عبور</label>
            <div className='input-parent'>
                <Lock className='input-icon' size="21" />
                <Field name='password' id='password'
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="کلمه عبور خود را وارد کنید" />
                <button type='button' className="show-pass-button" onClick={() => setIsShowPassword(prev => !prev)}>
                    {isShowPassword ? (
                        <EyeSlash size="21" />
                    ) : (
                        <Eye size="21" />
                    )}
                </button>
            </div>
        </div>
    )}


export default PasswordInput