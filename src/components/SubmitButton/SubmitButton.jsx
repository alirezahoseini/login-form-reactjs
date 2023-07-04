
// eslint-disable-next-line react/prop-types
export default function SubmitButton({title = 'ورود'}) {
  return (
    <button type="submit" className="bg-color-[#323EE2] p-3 rounded-xl w-full">
        {title}
    </button>
  )
}
