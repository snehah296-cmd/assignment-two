import { useState } from 'react'
import{useNavigate} from "react-router-dom";
import React,{useRef} from "react"

import emailjs from "emailjs-com"
import './App.css'
function Email()
{
     
    return(
        <div>
           <Hello/>
        </div>
    )
}
function Hello()
{
    const navigate = useNavigate();
     
    const handleOkClick = () => {

    navigate("/");
    
  };
const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_pva6vxb", // Your EmailJS service ID
        "template_oxe07e9", // Your EmailJS template ID
        form.current,
        "QW0MgjCfXjXr9FHuj" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Failed to send message.");
        }
      );
  };

    return(
        <div>
            <button onClick={handleOkClick}>  Back</button>

            <div className="bg-white border border-gray-300 rounded-2xl md:w-[60%] md:h-[100%] md:ml-[10%] w-[85%] h-[80%] ml-7">
        <form ref={form} onSubmit={sendEmail}>
        <div className="flex mt-[4%]">
       <p className="text-green-500 font-bold text-3xl md:pl-8 pl-3">|</p>
       
       <h1 className="text-black font-bold md:text-3xl md:pl-8 pl-3 text-2xl pt-1">Send us a Message</h1>
       </div>
       <h1 className="text-black md:pl-8 md:pt-5 px-5 pt-5">Fill out the form below and we'll get back to you within 24 hours.</h1>

        <div className="hidden md:flex md:flex-row ">
      
        <h1 className="text-black md:pl-9 md:pt-5 pl-5 pt-5">Full Name*</h1>
        <h1 className="text-black md:pt-5 pt-10  md:pl-[35%] pl-5 ">Email Address*</h1>
        
        </div>
        <div className="hidden md:flex md:flex-row ">
        <input type="text" name="name" placeholder="enter your name" required className=" md:mr-100 ml-5 md:h-[100%] md:w-[40%] w-[60%] h-[10%] md:ml-9 mt-3 rounded-1xl border border-gray-200 md:mb-8 p-3 rounded-xl "></input>
        <input type="text" name="email address" placeholder="enter your email address" required className=" ml-5  w-[60%] md:h-[30%] md:w-[40%] md:ml-9 mt-3 rounded-1xl border border-gray-200 rounded-xl p-3"></input>
        </div>
        
       <h1 className="text-black md:pl-9  pl-5 text-xl">Category</h1>
       <input type="text" name="category" placeholder="general inquiry" required className=" rounded-xl p-3 ml-5  w-[60%] md:h-[30%] md:w-[30%] md:ml-9 mt-3  rounded-1xl border border-gray-200"></input>
       <h1 className="text-black md:pl-9  pt-10 pl-5 text-xl">Subject*</h1>
       <input type="text" name="subject" placeholder="what is this regarding?" required className=" rounded-xl p-3 ml-5 md:h-30  w-[60%]  rounded-1xl mt-3  md:w-[30%] md:ml-9 border border-gray-200"></input>
       <p className="text-black md:pl-9  pt-10 pl-5 text-xl">Message *</p>
       <input type="text" name="message" placeholder="Tell us how we can help you..." required className=" rounded-xl  ml-5 md:h-30  w-[60%]  rounded-1xl mt-3 p-[7%] md:w-[90%] md:ml-9 border border-gray-200"></input>
       
       <button type="submit" className="bg-green-600 md:h-20 md:w-[92%] md:mt-[5%] md:ml-[4%] rounded-2xl mt-5 ml-4 h-20 w-[89%] text-2xl text-white font-bold">
        Send Message
       </button>
       
       <br></br>
       <br></br>
       
       
      </form>
      </div>
            
        </div>
    )
}
export default Email;