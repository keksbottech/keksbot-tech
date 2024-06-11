'use client'

import Button from "../button/Button"

type NewsletterType = {
    toggleNewsLetterDisplay: (arg1: boolean) => void;
    isNewsLetterEnabled: boolean;
}
const Newsletter = ({ toggleNewsLetterDisplay, isNewsLetterEnabled }: NewsletterType) => {

    const disableNewsletterDisplay = () => toggleNewsLetterDisplay(!isNewsLetterEnabled)

    return (
        <section className="absolute duration-1000  top-[50%] left-[50%]  translate-x-[-50%] z-[200] w-full translate-y-[-50%]  p-4 flex flex-col items-center justify-center">

            <div className="bg-white p-5 rounded-lg  shadow-lg w-full max-w-[450px] flex flex-col relative items-end justify-end">
                <i className="fa fa-times absolute top-[20px]  left-5 text-lg" aria-hidden="true" onClick={disableNewsletterDisplay}></i>
                <p className="text-lg font-semibold mt-5 capitalize">subscribe to our newsletter</p>
                <span>Never miss an update</span>
                <form action=" relative">
                    <input className="bg-[#eee] mt-5 p-4 outline-red-100" placeholder="joedoe@gmail.com" />
                    <Button css=" p-4 px-7 ml-4 rounded-lg bg-gradient-to-r from-red-300 to-red-600" onClick={() => null} component={<i className="fa fa-paper-plane-o" aria-hidden="true"></i>} />

                </form>
            </div>
        </section>
    )
}

export default Newsletter