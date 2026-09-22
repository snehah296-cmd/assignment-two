import { useState } from 'react'
import{useNavigate} from "react-router-dom";
import React,{useRef} from "react"

import emailjs from "emailjs-com"
import './App.css'
function Email()
{
     
    return(
        <div>
         <Table/>
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
          <div className="bg-white rounded-2xl md:w-[100%] w-[90%] mx-3 md:mx-[8%]">
        <div className="flex mt-[4%]">
        <p className="font-bold text-green-600 text-4xl md:pl-10 px-1">|</p>
            <p className="text-black font-bold text-2xl md:pl-10 px-2">Send us a Message</p>
            </div>

             <br />
          <p className="text-black md:pl-10 pb-1 pt-1 px-2">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <br />
       
        <div className="hidden md:flex md:flex-row ">
      
        <h1 className="text-black md:pl-9 text-xl md:pt-5 pl-5 pt-5">Full Name*</h1>
        <h1 className="text-black md:pt-5 pt-10 text-xl  md:pl-[35%] pl-5 ">Email Address*</h1>
        
        </div>
        <div className="hidden md:flex md:flex-row ">
        <input type="text" 
        name="name" 
        placeholder="enter your name" required 
        className=" md:mr-100 ml-5 md:h-[100%] md:w-[40%] w-[60%] h-[10%] md:ml-9 mt-3 rounded-1xl border border-gray-200 md:mb-8 p-3 rounded-xl "></input>
        
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
       
       </div>
      </form>
      </div>
            
        </div>
    )
}




function Table() {

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
       "_q8JevuSXul_YHO0m" // Your EmailJS public key
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

  return (
    <div>
      <button onClick={handleOkClick}>  Back</button>
    <div className="bg-white border border-gray-300 rounded-2xl md:w-[60%] md:mt-10 md:h-[100%] md:ml-[16%] w-[85%] h-[80%] ml-7">
       
      <br />
     
        {/* RIGHT COLUMN (Form) */}
        <div className="bg-white rounded-2xl md:w-[70%] w-[90%] mx-3 md:mx-[8%]">
          <br />
          <div className="flex">
            <p className="font-bold text-green-600 text-4xl md:pl-10 px-1">|</p>
            <p className="text-black font-bold text-2xl md:pl-10 px-2">Send us a Message</p>
          </div>
          <br />
          <p className="text-black md:pl-10 pb-1 pt-1 px-2">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <br />

         <form ref={form} onSubmit={sendEmail} className="bg-white rounded-2xl md:w-[100%] w-[90%] mx-3 md:mx-[8%] p-6">
  <div className="flex flex-col md:flex-row md:space-x-8">
    {/* Full Name */}
    <div className="flex flex-col mb-4 md:w-1/2">
      <label htmlFor="user_name" className="text-black font-semibold mb-1">Full Name *</label>
      <input
        type="text"
        id="user_name"
        name="user_name"
        placeholder="Enter your full name"
        required
        className="border rounded-xl p-2"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col mb-4 md:w-1/2">
      <label htmlFor="user_email" className="text-black font-semibold mb-1">Email Address *</label>
      <input
        type="email"
        id="user_email"
        name="user_email"
        placeholder="Enter your email address"
        required
        className="border rounded-xl p-2"
      />
    </div>
  </div>

  {/* Category */}
  <div className="flex flex-col mb-4">
    <label htmlFor="category" className="text-black font-semibold mb-1">Category</label>
    <input
      type="text"
      id="category"
      name="category"
      placeholder="General inquiry"
      className="border rounded-xl p-2"
    />
  </div>

  {/* Subject */}
  <div className="flex flex-col mb-4">
    <label htmlFor="subject" className="text-black font-semibold mb-1">Subject *</label>
    <input
      type="text"
      id="subject"
      name="subject"
      placeholder="What is this regarding?"
      required
      className="border rounded-xl p-2"
    />
  </div>

  {/* Message */}
  <div className="flex flex-col mb-6">
    <label htmlFor="message" className="text-black font-semibold mb-1">Message *</label>
    <textarea
      id="message"
      name="message"
      placeholder="Tell me how can we help you"
      required
      className="border rounded-xl p-2 h-32 resize-none"
    />
  </div>

  <button
    type="submit"
    className="bg-green-500 text-white font-bold py-3 rounded-xl w-full md:w-auto md:px-10"
  >
    Send a Message
  </button>
</form>
 {/* ✅ FORM ENDS HERE */}
          <br />
        </div>
      </div>
     </div>
   
  );
}


export default Email;