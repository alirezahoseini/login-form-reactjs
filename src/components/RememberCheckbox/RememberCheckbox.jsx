import { TickCircle, Record } from 'iconsax-react'
import { useState } from 'react'
import { Field } from 'formik'


export default function RememberCheckbox() {
    const [isChecked, setIsCheked] = useState(false)
    return (
        <div id='remember-checkbox'>
            <div>
                <Field onChange={() => setIsCheked(prev => !prev)} type="checkbox" name="remember-input" id="remember-input" />
                <label htmlFor="remember-input" id='checkbox'>
                    {isChecked ? (<TickCircle size='21' variant="Bold" color='#323EE2'  />) : (<Record size='21' color='#D0D0D0'/>)}
                </label>
            </div>
            <label htmlFor="remember-input">مرا به خاطر بسپار</label>
        </div>
    )
}
