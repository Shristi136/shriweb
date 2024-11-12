import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import '../contact.css'


export const Contact=()=>{

    const [formState, handleSubmit] = useForm("manynzww");

    const [contact, setContact] =useState({
        username:"",
        email:"",
        phoneNumber:"",
        message:""
    })

    const handleInputChange=(e)=>{
        const {name , value} = e.target;
        setContact((prev)=>({...prev, [name]:value}))
    }

        // const handleFormSubmit=(e)=>{
        //     e.preventDefault();
        //     console.log(contact);
        // }
        if (formState.succeeded) {
            return<h1 className="content">Thanks for your message! We’ll be in touch soon.</h1>;
          }
          
    return(
        <>
        <div className="contact-container content ">
            <div className="form-container">
            <form onSubmit={handleSubmit} action="https://formspree.io/f/manynzww"
            >
        <h1>CONTACT FORM</h1>
        {/* <!-- username --> */}
        <div className="form-holder">
        <div className="form-data">
            <span className="fa-solid fa-user"></span>
            <input type="text"
            className="form-control"
            name="username" 
            required
            placeholder="Your name"
            id="username"
            autoComplete="off"
            value={contact.username}
            onChange={handleInputChange}/>
        </div>
        </div>
        <div className="error" id="usernameError"></div>

         {/* <!-- email address  --> */}
         <div className="form-holder">
            <div className="form-data">
                <span className="fa-solid fa-envelope"></span>
                <input type="email"
                className="form-control"
                name="email"
                required
                placeholder="Email Address"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInputChange}/>
        </div>
        </div>
        <div className="error" id="emailError"></div>

        {/* <!-- phone number  --> */}
        <div className="form-holder">
            <div className="form-data">
                <span className="fa-solid fa-phone"></span>
                <input type="number"
                className="form-control"
                name="phoneNumber"
                required
                placeholder="Phone Number"
                id="phone"
                autoComplete="off"
                value={contact.phoneNumber} 
                onChange={handleInputChange}/>
        </div>
        </div>
        <div className="error" id="phoneError"></div>


        {/* <!-- message --> */}
        <div className="form-holder">
            <div className="form-data">
                <span className="fa-solid fa-message"></span>
                <textarea name="message" id="message" 
                cols="30" rows="7"
                 className="form-control-message" 
                 required 
                 placeholder="Message" 
                 autoComplete="off"
                 value={contact.message}
                 onChange={handleInputChange}>
                 </textarea>
        </div>
        </div>

        {/* <!-- button  --> */}
        <button className="formSubmit">
            <span>Send</span>
        </button>
    </form>
    </div>

</div>
        </>
    )
}