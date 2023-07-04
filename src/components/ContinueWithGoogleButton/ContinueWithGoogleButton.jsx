/* ------ Assets ------ */
import googleLogo from '../../assets/images/google-logo.svg'

// eslint-disable-next-line react/prop-types
export default function ContinueWithGoogleButton({ title = 'ورود' }) {
    return (
        <button type="button" className=" text-[#1C1C1C] font-semibold p-3 rounded-xl
         w-full mt-3 border border-[#D0D0D0] flex items-center justify-center gap-2 text-sm
         hover:bg-slate-100">
            <img src={googleLogo} alt="google logo" className='w-5' />
            {title}
        </button>
    )
}
