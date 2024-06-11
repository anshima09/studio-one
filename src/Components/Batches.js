import React from 'react'
import BatchesCard from './BatchesCard'
import '../Styles/Batches.css'

const Batches = () => {
    return (
        <div className='batch-section' id='batches'>
            <div className='batch-title-content'>
                <h3 className="cards-title1">
                    <span>Batches</span>
                </h3>
                <div className="batch-cards-content">
                    <BatchesCard
                        title="Beginners Batch"
                        description="Our Beginners Batch is perfect for those who are new to dance. This
                         class introduces students to the basics of various dance styles, ensuring a 
                         solid foundation. With patient, expert instruction and a supportive environment,
                          you'll gain confidence and skills."
                    />

                    <BatchesCard
                        title="Kids Batch"
                        description="Tailored specifically for young dancers, our Kids Batch is designed
                         to be fun and engaging. This class helps children develop coordination, rhythm,
                          and creativity through age-appropriate dance routines. Our friendly instructors
                           ensure a positive and nurturing atmosphere."
                    />

                    <BatchesCard
                        title="Semi-Classical Girls Batch"
                        description="The Semi-Classical Girls Batch is a unique offering that blends 
                        classical dance techniques with contemporary movements. This class is ideal for
                         girls who want to explore the elegance of semi-classical dance in a supportive,
                          all-girls environment."
                    />

                    <BatchesCard
                        title="Weekend Flexible Batches"
                        description="Our Weekend Flexible Batches are designed for those with busy 
                        schedules. Whether you're a working professional, a student, or a parent, these 
                        classes offer the flexibility you need to pursue your passion for dance. Choose
                         from a variety of styles and levels."
                    />
                </div>
            </div>
        </div>
    )
}

export default Batches