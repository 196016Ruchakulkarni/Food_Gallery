import React from 'react';
import Navbar from './Navbar';
import Abou from './Images/abou1.png';
import Footer from './Footer';

const About = () => {
    return(
        <>
        {/* https://therisinghomechefs.com/traditional-indian-food-and-its-many-heath-benefits/ */}
            <h1 className='heading'>Food Gallery</h1>
            <Navbar />

           <div className="about">
           <h3 className='cuisine'>Elements of Indian cuisine</h3>
           <p className='p cuisine'>Many varieties of fruits and vegetables are indigenous to India, such as a range of gourds, eggplant (brinjal), Indian gooseberry (called amla in Hindi), jackfruit, and mango. While the origin of okra (called bhindi in Hindi), coconuts, and plantains has not been traced with certainty, they have been used in cuisine in India for several thousand years. </p>
           <marquee behavior="alternate" className='change-text'>
            <span className="marquee about-heading">Feeding your body,</span><span className="marquee about-cons"> Feeding your soul.</span>
            </marquee> 
            </div> 
            <div className="img-container">
            <img className='about-img' src={Abou} alt="Err" />
            </div>

            <div className="new-about">
                <h1>About Us</h1>

                <h2 className='awareness'>Motto<br/>
                Awaring People about Indian Food</h2>

                <p className="description">
                Indian cuisine is meant to be eaten socially, in groups, until everyone is fully satisfied. You will be served all your courses at once on a plate of food called a thali. A thali is a large tray that is used to serve all the foods at once. Some foods are mild, sweet and some are spicy and hot. Most dinners are served later at night since many Indians eat several smaller meals during the day. The food ranges from very simple vegetarian fare to exotic dishes layered with texture and flavor. Great care is taken in the planning and preparation of meals no matter how simple or complex.
                </p>

            </div>

            <Footer/>
        </>
    );
}

export default About;