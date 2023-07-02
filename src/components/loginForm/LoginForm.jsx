import { User, Lock, Eye, EyeSlash } from 'iconsax-react'
import { useState } from 'react'

export default function LoginForm() {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div id="login-form">
      <h2 className='text-center font-bold mb-10'>لطفا وارد شوید</h2>
      <form>
        <div className="input-group">
          <label htmlFor="">نام کاربری</label>
          <div className='input-parent'>
            <User className='input-icon' size='21' />
            <input type="text" placeholder="نام کاربری خود را وارد کنید" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="">کلمه عبور</label>
          <div className='input-parent'>
            <Lock className='input-icon' size="21" />
            <input type={isShowPassword ? 'text' : 'password'} placeholder="نام کاربری خود را وارد کنید" />
            <button type='button' className="show-pass-button" onClick={() => setIsShowPassword(prev => !prev)}>
              {isShowPassword ? (
                <EyeSlash size="21" />
                ) : (
                <Eye size="21" />
              )}
              
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
