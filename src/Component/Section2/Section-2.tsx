import React from 'react'
import './Section-2.css'
import Card from './Card1'


const Section2 = () => {
    return (
        <div className='contentsection2'>
            <section className='Container1'>

                <h3>All you need from idea to launch</h3>
                <p>From collating your ideas to finding co-founders & founding teams to first launch and finding early adopters</p>
                <div className='cardcontainer'>
                    <Card title='ideation' text='leorem ispieum dommy twxt text' image={<img src='pen.png' alt='' />} />
                    <Card title='ideation' text='leorem ispieum dommy twxt text' image={<img src='handshake.png' alt='' />} />
                    <Card title='ideation' text='leorem ispieum dommy twxt text' image={<img src='code.png' alt='' />} />
                </div>
                <div className='cardcontainer'>
                    <Card title='ideation' text='leorem ispieum dommy twxt text' image={<img src='rocket.png' alt='' />} />
                    <Card title='ideation' text='leorem ispieum dommy twxt text' image={<img src='adminlinks.png' alt='' />} />
                    <Card title='ideation' text='leorem ispieum dommy twxt text' image={<img src='moneybag.png' alt='' />} />
                </div>
            </section>
        </div>
    )
}

export default Section2
