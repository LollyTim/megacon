import React, { useState } from 'react'
import './Navbar.css'
import SignupModal from '../Modal/SignupModal'

const Navbar = () => {

    const [showModal, setshowModal] = useState(false)

    return (
        <div className='nav'>
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
            </div>
            {
                showModal &&
                <SignupModal onClose={() => setshowModal(false)} />
            }
        </div>
    )
}

export default Navbar
