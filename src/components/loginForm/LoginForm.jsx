import { User } from 'iconsax-react'

export default function LoginForm() {
  return (
    <div id="login-form">
      <h2 className='text-center font-bold mb-10'>لطفا وارد شوید</h2>
      <form>
        <div className="input-group">
          <label htmlFor="">نام کاربری</label>
          <div className='input-parent'>
            <User size={21} />
            <input type="text" placeholder="نام کاربری خود را وارد کنید" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="">نام کاربری</label>
          <div className='input-parent'>
            <User size={21} />
            <input type="text" placeholder="نام کاربری خود را وارد کنید" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="">نام کاربری</label>
          <div className='input-parent'>
            <User size={21} />
            <input type="text" placeholder="نام کاربری خود را وارد کنید" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="">نام کاربری</label>
          <div className='input-parent'>
            <User size={21} />
            <input type="text" placeholder="نام کاربری خود را وارد کنید" />
          </div>
        </div>
      </form>
    </div>
  )
}
