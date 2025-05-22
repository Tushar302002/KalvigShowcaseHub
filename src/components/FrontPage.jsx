import React from 'react'
import { BiSolidRightArrow } from "react-icons/bi";
import Home from './Home';

function FrontPage() {
    return (
        <div className='h-[100vh] flex flex-col items-center justify-center'>
            <img src="assets/Kalvig Logo.svg" alt="Kalvig" />
            <h1 style={{ fontSize: "var(--font-size-lg)" }}>WHERE IDEA MEETS EXECUTION</h1>
            <button
                className='flex items-center gap-2 rounded-[50px] px-4 py-2 mt-11 transition-all duration-200 hover:shadow-[0_0_30px_5px_#2098E3] '
                style={{ background: "var(--color-blue)", fontSize: "var(--font-size-md)" }}>
                <span>EXPLORE</span>
                <BiSolidRightArrow />
            </button>
        </div>
    )
}

export default FrontPage