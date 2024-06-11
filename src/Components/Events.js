import React from 'react'
import InformationCard from './InformationCard'
import '../Styles/Events.css'
import workshop1 from '../Assets/workshop1.jpeg'
import workshop2 from '../Assets/workshop2.jpeg'
import workshop3 from '../Assets/workshop3.jpg'

const Events = () => {
    return (
        <div className='info-section' id='events'>
            <div className='info-title-content'>
                <h3 className="cards-title">
                    <span>Events</span>
                </h3>
                <div className="info-cards-content">
                    <InformationCard
                        title="Dance Workshop"
                        img={workshop2}
                    />

                    <InformationCard
                        title="Garba Events"
                       img={workshop3}
                    />

                    <InformationCard
                        title="Garba Workshop"
                        img={workshop1}
                    />
                </div>
            </div>
        </div>
    )
}

export default Events