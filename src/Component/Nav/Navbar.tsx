import React, { useState } from 'react'
import './Navbar.css'
import SignupModal from '../Modal/SignupModal'
import { BsMoonFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'

const Navbar = () => {

    const [showModal, setshowModal] = useState(false)

    // const icon = document.getElementById('darkClick');

    // icon.onclick = function () {
    //     document.body.classList.toggle("dark-theme")
    // }


    return (
        <div className="nav">
            <div>Logo</div>
            <div className='aside1'>
                <div className='same1'>Products</div>
                <div className='same1'>Community</div>
                <div className='same1'>Creator</div>
                <div className='same1'>About</div>
            </div>
            <div className='aside2'>
                <div className='loginbtn'><button >Log in</button></div>
                <div className='signupbtn'><button onClick={() => { setshowModal(true) }}>Sign Up</button></div>
                <button onClick={() => { document.body.classList.toggle("dark-theme") }} className='moon'> <BsMoonFill /></button>
            </div>
            {
                showModal &&
                <SignupModal onClose={() => setshowModal(false)} />
            }
        </div>
    )
}

export default Navbar
