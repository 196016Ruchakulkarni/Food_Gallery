import React, { useState } from 'react';
import './index.css';
// import Card from './Card';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer';


const Gallery =  (props) => {

   const [items,setItems] = useState(Menu);
   
   const Check_Category = (categ_item) => {
      const updateditem = Menu.filter((curele)=>{
          return curele.category === categ_item;
      });
      
      setItems(updateditem);
   }

    return(
        <>
           <h1 className='heading'>Food Gallery</h1>
           <Navbar />

        <div className="col-12">

           <div className="btn btn-category btn-outline-success" onClick={()=>Check_Category('South Indian')}>South Indian</div>
           <div className="btn btn-category btn-outline-success" onClick={()=>Check_Category('North Indian')}>North Indian</div>
           <div className="btn btn-category btn-outline-success" onClick={()=>Check_Category('West Indian')}>West Indian</div>
           <div className="btn btn-category btn-outline-success" onClick={()=>Check_Category('Chinese')}>Chinese</div>
           <div className="btn btn-category btn-outline-success" onClick={()=>Check_Category('Sweet')}>Sweet</div>
        </div>   

        {
       items.map((elem)=>{     
              const {image,name,category,desc} = elem;
        
        return(
            <div className="container-mul-card">
            <div className="container-card">
                <div className="card">
                    
                    <img className='img' src={image} alt="Error" />
                    <h2 className="title">{name}</h2>
                    <p className="category">{category}</p>
                    <p className="desc">{desc}</p>
                </div>
            </div>
            </div>  
       );
     
   })
}


        {/* <Card /> */}
        <Footer />
        </>
    );
} 

export default Gallery;
