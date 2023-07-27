import React, { ReactNode } from 'react'
import './SignupModal.css'

type Props = {
    children?: ReactNode;
    onClose?: () => void;
}

const SignupModal = ({ children, onClose }: Props) => {
    return (
        <div className='modal-frame'>
            <div className='modal-frame-contents'>
                <h2>NOT AVAILABLE </h2>
                <p>Under maintenance</p>
                <button type='button' className='btn2' onClick={() => onClose && onClose()}>OK</button>

            </div>
            {children}
        </div>
    )
}


export default SignupModal
