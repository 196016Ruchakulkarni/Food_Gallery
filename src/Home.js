import React from 'react';
import Navbar from './Navbar';
import './index.css'
import bgImage  from '../src/Images/bg20.png';
import bgImage2 from '../src/Images/bg21.webp';
import bgImage3  from '../src/Images/img23.png';
import bgImage4 from '../src/Images/img24.png';
import Footer from './Footer';

const Home = () =>{
    return(
        <>
         <div className="home-container">
          {/* <h1 className='heading'>Food Gallery</h1> */}
              <Navbar />
              <img className="image-con" src={bgImage} alt="Error" />
              <div className="home-heading">
                  <h1 className='head-text1'>Be Healthy.</h1>
                  <h1 className='head-text2'>Understand what</h1>
                  <h1 className="head-text3">You Eat</h1> 
              </div>

              <h4 className='importance-head'>Food in India is an identity marker of caste, class, family, kinship, tribe affiliation, lineage, religiosity, ethnicity, and increasingly, of secular group identification.</h4>


           <div className="text">
                <img  className='bg-image-blue' src={bgImage2} alt="Error" />
                <p className='para'>Top Reasons Why You Should Eat Indian Food</p>
                <p className='para-heading'>Indian Food uses all Kinds of Fresh Vegetables</p>
                <p className='data'>That’s true. Indians love vegetables and make the best of them while cooking food. The different ways vegetables are cooked make sure that the freshness and nutrient value of them are retained. Most of the Indian cooking process is done in a way that the vegetables used do not lose their health benefits and make the food more enjoyable.</p>

                <p className='para-heading'>Food is Prepared from Scratch</p>
                <p className='data'>Indians believe in cooking food in a more organic way. Almost all traditional Indian food makes great use of fresh ingredients. Preparing food from scratch ensures that the cooking involves negligible use of preservatives. This results in healthier food which can be consumed by anyone. Indians don’t believe in consuming prepared meals as they lack the important nutrients required by the body to function properly.</p>

                <p className='para-heading'>Indian Spices have Medicinal Properties</p>
                <p className='data'>Scientists have done their research on various spices that indigenous to India. We are talking about spices like turmeric, ginger, garlic, and various kinds of chillies. These spices act as major ingredients in Indian food. The medicinal and healing properties of such ingredients have been proven again and again. Thus, these spices don’t just make the food taste good; they also are good for the body.</p>

                <p className='para-heading'>Indian Food Provides all Important Nutrients</p>
                <p className='data'>The vegetables in Indian food provide the all-important Vitamins and contribute to improve vision and lower cholesterol. It fuels your body and helps your body produce energy. Pulses are rich in Vitamins A, B, C and E. They also contain a good proportion of minerals like potassium, iron, and zinc. Rice and flour fulfils the required carbohydrate, protein, and fiber consumption of the body.</p>
 
            </div>

        <div className="poll">
        <p className='poll-subject'>Tamil nadu Food survey taken on day 20/09/2023</p>
            <img className="imgpoll1" src={bgImage3} alt="Error" />
            <img className='imgpoll2' src={bgImage4} alt="Error" />

        </div>
         </div>
         
         <Footer />
        </>
    );
}

export default Home;