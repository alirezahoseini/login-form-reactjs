
// eslint-disable-next-line react/prop-types
export default function SubmitButton({title = 'ورود'}) {
  return (
    <button type="submit" className="bg-[#323EE2] text-white font-semibold p-3 rounded-xl 
    w-full mt-7 hover:bg-[#111cbb] text-sm">
        {title}
    </button>
  )
}
