import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './index.css';

const Contact = () => {

    const [data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        message:'',
    });

    const InputEvent =(event)=>{
        const {name,value} = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name]:value,
            };
        });
    }

    const FormSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}, my phone no. is ${data.phone}, My email id is ${data.email}, Message is ${data.message}`);
    }

    return(
        <>
        <h1 className='heading'>Food Gallery</h1>
            <Navbar />
            <div className="contact-container">
                    <form onSubmit={FormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">FullName</label>
                        <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" aria-describedby="emailHelp" />

                    </div>

                    <div className="mb-3">
                       <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                       <input type="number" name="phone" value={data.phone} onChange={InputEvent} className="form-control" id="exampleInputEmail1" placeholder="Enter your Phone Number" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                       <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                       <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" id="exampleInputEmail1" placeholder="abc@gmail.com" aria-describedby="emailHelp" />
                       <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                       <input type="text" name="message" value={data.message} onChange={InputEvent} className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="col-12">
                       <button className='btn btn-outline-primary submit-btn'>Submit Form</button>
                    </div>
                    </form>
            </div>
            <Footer />

 
        </>
    );
}

export default Contact;