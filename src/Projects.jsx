import { useState } from 'react'
import{useNavigate} from "react-router-dom";
import './App.css'
function Projects()
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
    return(
        <div className="bg-gray-800">
           
            <button onClick={handleOkClick} 
            className="ml-[90%] mt-6">  Back</button>



           <div className="flex ml-[45%]">
            <p className=" pt-20 text-white text-xl"> Home</p>
            <p className="pl-3 pt-20 text-white text-xl"> /</p>
            <p className="pl-3 pt-20 text-white text-xl"> Projects</p>
            </div>

            <div className="flex">
                <h1 className="text-white font-bold text-5xl pl-20 pt-10"> All Projects</h1>
                <hr className="w-[60%] mt-[5%] ml-10"></hr>
            </div>

            <p className="text-white pl-[27%] pt-10 text-xl"> A comprehensive collection of web applications, web platforms, and full-stack </p>
            <p className="text-white pl-[33%] text-xl pt-1"> solutions I've developed using cutting-edge technologies.</p>
            
           
            <div className="flex mt-20">
                <div className="bg-white w-[28%] ml-[5%]">
                    <img src=" /image/Smart Resume.jpeg" className="w-full h-[40%]"/>
                    <p className="text-black pl-8  text-xl pt-10"> Featured Project</p>
                    <p className="pl-8 pt-7 text-blue-400 text-2xl">Smart Resume Scanner</p>
                    <p className="text-black text-justify w-[90%] pl-8 pt-8"> Smart Resume Scanner is an AI-powered web application designed 
                        to analyze resumes and match them with job requirements....</p>
                    <div className="flex ml-5 mt-[11%]">
                        <div className="bg-gray-900 w-[40%] rounded-xl h-8">
                            <p className="text-white  px-3"> REACT NATIVE</p>
                        </div>
                        <div className="bg-gray-900 w-[50%] rounded-xl h-8 ml-5">
                            <p className="text-white  px-3"> WEB PLATFORM</p>
                        </div>
                    </div>

                    <div className="flex ml-5 mt-2">
                        <div className="bg-gray-900 w-[30%] rounded-xl h-8">
                            <p className="text-white  px-3"> WINDOWS</p>
                        </div>
                        <div className="bg-gray-900 w-[15%] rounded-xl h-8 ml-5">
                            <p className="text-white  px-3"> IOS</p>
                        </div>
                    </div>
                    <br></br>
                </div>

                <div className="bg-white w-[28%] ml-9">
                     <img src=" /image/Gyan pargas.jpeg" className="w-full h-[40%]"/>
                     <p className="text-black pl-[7%] text-xl pt-[9%]"> Featured Project</p>
                     <p className="pl-8 pt-7 text-blue-400 text-2xl">Gyan Pargas Trust</p>
                    <p className="text-black text-justify w-[90%] pl-8 pt-8"> The Gyan Pargas Trust Website is a comprehensive 
                    digital platform developed using
                    React.js (Frontend) and Node.js with Express (Backend)....</p>
                    
                      <div className="flex ml-5 mt-7">
                        <div className="bg-gray-900 w-[40%] rounded-xl h-8">
                            <p className="text-white  px-3"> REACT NATIVE</p>
                        </div>
                        <div className="bg-gray-900 w-[50%] rounded-xl h-8 ml-5">
                            <p className="text-white  px-3"> WEB PLATFORM</p>
                        </div>
                    </div>

                    <div className="flex ml-5 mt-2">
                        <div className="bg-gray-900 w-[30%] rounded-xl h-8">
                            <p className="text-white  px-3">WINDOWS</p>
                        </div>
                        <div className="bg-gray-900 w-[15%] rounded-xl h-8 ml-5">
                            <p className="text-white  px-3"> IOS</p>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    
                    
                </div>

                <div className="bg-white w-[28%] ml-9">
                     <img src=" /image/Vyapar ERP.jpeg" className="w-full h-[40%]"/>
                     <p className="text-black pl-8 text-xl pt-10"> Featured Project</p>
                     <p className="pl-8 pt-7 text-blue-400 text-2xl">Vyapar ERP Software</p>
                    <p className="text-black text-justify w-[90%] pl-8 pt-8"> The Vyapar ERP System is a web-based enterprise resource planning solution developed to simplify and digitize 
                        daily business operations....</p>
                        <div className="flex ml-5 mt-7">
                        <div className="bg-gray-900 w-[40%] rounded-xl h-8">
                            <p className="text-white  px-3"> REACT NATIVE</p>
                        </div>
                        <div className="bg-gray-900 w-[50%] rounded-xl h-8 ml-5">
                            <p className="text-white  px-3"> WEB SOFTWARE</p>
                        </div>
                    </div>

                    <div className="flex ml-5 mt-2">
                        <div className="bg-gray-900 w-[30%] rounded-xl h-8">
                            <p className="text-white  px-3"> WINDOWS</p>
                        </div>
                        <div className="bg-gray-900 w-[15%] rounded-xl h-8 ml-5">
                            <p className="text-white  px-3"> IOS</p>
                        </div>
                       
                    </div>
                     <br/>
                      <br/>
                </div>
                <br/>
                <br/>
            </div>
            <br/>
            <br/>


            
    
        </div>
        
    )
}
export default Projects;