import React from 'react'
import './Card1.css'



type cardprops = {
    title?: string
    text: string
    image: JSX.Element
}
const Card = ({ title, text, image }: cardprops) => {
    return (
        <div>
            <div className='container'>
                <div className="card">
                    <h5 className='card-title'>{title}</h5>
                    <div className='card-image'>{image}</div>
                    <h6 className='cardtext1'>{text}</h6>
                </div>
            </div>
        </div>
    )
}

export default Card
