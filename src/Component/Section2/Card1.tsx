import React from 'react'

type cardprops = {
    title?: string
    text: string
    // image: JSX.Element
}
const Card = ({ title, text }: cardprops) => {
    return (
        <div>
            <div className='container'>
                <div className="card">
                    <h5 className='h5'>{title}</h5>
                    {/* <div>{image}</div> */}
                    <h6 className='h6'>{text}</h6>
                </div>
            </div>
        </div>
    )
}

export default Card
