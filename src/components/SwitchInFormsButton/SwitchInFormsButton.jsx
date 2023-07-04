import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SwitchInFormsButton({desc = 'حساب کاربری ندارید؟', title = "ثبت نام", path = "/signin"}) {
  return (
    <Link to={path} className="text-sm flex items-center gap-2 justify-center mt-16 hover:!text-blue-600">
        <span className="text-[#A0A1A6]">{desc}</span>
        <strong className="text-[#1C1C1C]">{title}</strong>
    </Link>
  )
}
