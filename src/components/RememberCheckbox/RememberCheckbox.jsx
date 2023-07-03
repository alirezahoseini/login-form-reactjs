import { TickCircle, Record } from 'iconsax-react'
import { useState } from 'react'
import { Field } from 'formik'


export default function RememberCheckbox() {
    const [isChecked, setIsCheked] = useState(false)
    return (
        <div id='remember-checkbox'>
            <div>
                <Field onChange={() => setIsCheked(prev => !prev)} type="checkbox" name="remember-input" id="remember-input" />
                <label htmlFor="remember-input">
                    {isChecked ? (<TickCircle size='21' variant="Bold" />) : (<Record size='21' />)}
                </label>
            </div>
            <label htmlFor="remember-input">مرا به خاطر بسپار</label>
        </div>
    )
}
