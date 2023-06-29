/* ------ Assets ------ */
import mainBannerImage from '../../assets/images/main-banner.svg'
import dotsShape from '../../assets/images/3-dots.svg'


export default function LeftBanner() {
    return (
        <div className="bg-gradient-to-tr from-blue-900 to-blue-600 w-full">
            <img src={mainBannerImage} className='max-w-[90%] mx-auto' alt="main banner" />
            <div className='text-white font-bold text-center pb-7 flex flex-col gap-5'>
                <p>بازی کن، امتیاز جمع کن</p>
                <p>توکن بگیر</p>
                <img src={dotsShape} alt="dots shape" className='mx-auto w-8' />
            </div>
        </div>
    )
}
