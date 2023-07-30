import React from 'react'
import Navbar from '../Nav/Navbar'
import './Sectionhead.css'

const Sectionhead = () => {
    return (
        <div className='body111'>
            <div className='backg1' ></div>
            <Navbar />
            <section style={{
                backgroundImage: `url(Vector.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "650px",
                backgroundPositionY: "70px"


            }} >
                <div className='section1' >

                    <div className='text1'><h1 className='line1'>Find and launch <div className='colored1'>digital</div></h1> <h1 className='line2'><br /> <div className='colored'>products </div> for Aftica</h1></div>
                    <div className='text2'> We connect creators & teams to their desired market of customers, partners. <br /> talents and investors needed to build great companies</div>
                    <div className='btns2'>
                        <div className='btnn1'><button>Launch my product</button></div>
                        <div className='btnn2'><button>Explore products</button></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sectionhead
