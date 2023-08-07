import React from 'react'
import './Section-2.css'
import Card from './Card1'
import { FaHandshake } from 'react-icons/fa';
import { PiCodeFill, PiLinkSimpleBold } from 'react-icons/pi';
import { BsPenFill, BsFillRocketTakeoffFill } from 'react-icons/bs'
import { AiFillDollarCircle } from 'react-icons/ai'


const Section2 = () => {
    return (
        <div className='contentsection2' style={{
            backgroundColor: `var(--primary-color)`
        }} >
            <section className='Container1'>

                <h3>All you need from idea to launch</h3>
                <p>From collating your ideas to finding co-founders & founding teams to first launch and finding early adopters</p>
                <div className='cardcontainer'>
                    <Card title='Ideation' text='leorem ispieum dommy twxt text' image={<BsPenFill size={100} color="var(--dark-color)" />} />
                    <Card title='Co-founder' text='leorem ispieum dommy twxt text' image={<FaHandshake size={100} color="var(--dark-color)" />} />
                    <Card title='Building' text='leorem ispieum dommy twxt text' image={<PiCodeFill size={100} color="var(--dark-color)" />} />
                </div>
                <div className='cardcontainer'>
                    <Card title='Lunch' text='leorem ispieum dommy twxt text' image={<BsFillRocketTakeoffFill size={100} color="var(--dark-color)" />} />
                    <Card title='Distribution' text='leorem ispieum dommy twxt text' image={<PiLinkSimpleBold size={100} color="var(--dark-color)" />} />
                    <Card title='Investment' text='leorem ispieum dommy twxt text' image={<AiFillDollarCircle size={100} color="var(--dark-color)" />} />
                </div>
            </section>
        </div>
    )
}

export default Section2
