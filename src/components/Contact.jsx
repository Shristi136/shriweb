import React from "react";
import '../contact.css'

export const Contact=()=>{
    return(
        <>
        <div className="contact-container content ">
            <div className="form-container">
            <form >
        <h1>CONTACT FORM</h1>
        {/* <!-- udername --> */}
        <div className="form-holder">
        <div className="form-data">
            <span className="fa-solid fa-user"></span>
            <input type="text"
            className="form-control"
            name="username" 
            required
            placeholder="Your name"
            id="username"
            autoComplete="off"/>
        </div>
        </div>
        <div className="error" id="usernameError"></div>

         {/* <!-- email address  --> */}
         <div className="form-holder">
            <div className="form-data">
                <span className="fa-solid fa-envelope"></span>
                <input type="text"
                className="form-control"
                required
                placeholder="Email Address"
                id="email"
                autoComplete="off"/>
        </div>
        </div>
        <div className="error" id="emailError"></div>

        {/* <!-- phone number  --> */}
        <div className="form-holder">
            <div className="form-data">
                <span className="fa-solid fa-phone"></span>
                <input type="number"
                className="form-control"
                required
                placeholder="Phone Number"
                id="phone"
                autoComplete="off"/>
        </div>
        </div>
        <div className="error" id="phoneError"></div>


        {/* <!-- message --> */}
        <div className="form-holder">
            <div className="form-data">
                <span className="fa-solid fa-message"></span>
                <textarea name="" id="" 
                cols="30" rows="7"
                 className="form-control-message " 
                 required 
                 placeholder="Message" 
                 autoComplete="off">
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