import React from 'react';

const Card = (props) => {
    return(
        <>
                    <div className="container-mul-card">
        <div className="container-card">
            <div className="card">
                
                <img className='img' src={props.image} alt="Error" />
                <h2 className="title">{props.name}</h2>
                <p className="category">{props.category}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
        </div>   
        </>
    );
}

export default Card;