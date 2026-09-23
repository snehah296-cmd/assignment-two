import { useState } from 'react'
import {useNavigate} from "react-router-dom";
import './App.css'
 function Profile()
 {
    return(
        <div>
            <Assignment/>
            <Name/>
            <My/>
            
        </div>
    )
 }

 function Assignment()
 {

    const[isMenuOpen,setIsMenuOpen]=useState(false);

    const AOB=[
        {id:"one",name1:"Home"},
        {id:"two",name1:"MySelf"},
        
        {id:"four",name1:"MyWork"},
        {id:"five",name1:"AllProjects"},
        
       
        {id:"nine",name1:"Contact"},
        ];

    return(
        <div className="flex bg-gray-50 " id="one"> 
            <img
  src="/image/pic3.jpeg"
  className="rounded-full md:h-20 h-12 ml-2 w-12 md:w-20 md:ml-10 mt-10"
  alt="Profile"
/>
            <a href="/image/Sneha_Professional_Resume(1).pdf" download className="text-red-600 hover:rounded-xl 
            pl-[2%] md:w-[15%] mt-[1%] md:ml-[67%] ml-[42%]
              hover:bg-red-500 pt-[2%] hover:text-yellow-400" > 
            Curriculum Vitae | CV  </a>

             

             
                <div className="absolute mt-[2%] ml-[24%] hidden md:block">
                    <div className="px-4 py-4">
                        {AOB.map((v,i)=>(
                            <a href={`#${v.id}`} 
                            className="text-green-900 hover:text-green-600 px-3 py-2">
                                {v.name1}
                            </a>
                        ))}
                        </div>
                    </div>
             
            
        </div>
    )
 }


 function Name()
 {
    
     const navigate = useNavigate();
     
    const handleOkClick = () => {

    navigate("/email");
    
  };
  
    return(
        <div className="bg-gray-50 " >
        <div className="flex">
            <h1 className="md:text-7xl text-5xl font-bold text-black md:pl-20 pl-4  pt-10"> G'day, I'm</h1>
        </div>
        <div className="flex">
            <h1 className="md:text-7xl text-5xl font-bold text-black md:pl-20 pl-4 pt-2"> Sneha,</h1>
        </div>
        <h1 className="text-red-500 font-bold md:text-4xl text-2xl md:pl-20 pl-5 pt-6"> A Full Stack Web Developer</h1>
        <p className="md:pl-20 px-4 pt-8 md:w-[50%] text-justify">
        I’m a skilled web developer  in the IT industry. 
                Using React Native, I create full-stack web applications that cater
                to the needs of diverse clients. My expertise lies in developing hybrid web applications for both Android and iOS platforms, ensuring that users have 
        access to efficient and user-friendly packages. With a deep
        understanding of the web development process, I am able to 
        deliver high-quality results that exceed expectations. If you’re looking for 
        a reliable web developer to bring your ideas to life, I’m here to
        help!</p>
        <div id="nine">

        <button className=" text-red-600 border border-red-600 p-4  mt-10 md:ml-20 ml-4 hover:bg-red-500
             hover:text-yellow-400" onClick={handleOkClick}> Contact Me</button>
             </div>

             <br></br>
             <br></br>
        </div>
    )
 }

 
 function My()
 {
     const navigate = useNavigate();
     
    const handleOkClick = () => {

    navigate("/projects");
    
  };

  const handleOkClicks =()=>
  {
    navigate("/email");
  }

    return(
        <div className="bg-gray-800 " id="two" >
        <div className="flex ">
            <h1 className="font-bold text-white text-4xl md:pl-[15%] pl-4 md:pt-20 pt-10"> My Portfolio</h1>
            <p className="md:pt-[7%] pt-[21%] md:pl-2 pl-2  text-white">____________________________________________________</p>
        </div>
        <div className="flex">

            

    

        {/* <div className="flex flex-cols-2 "> */}

         <div className="flex flex-col md:flex-row">
            <div className="order-2 md:order-1">
                <p className="text-blue-400 md:pl-[21%] pt-6 md:w-[78%] px-4  text-justify"> Greetings, I'm Sneha, a seasoned
                     web developer with  a passionate and dedicated CS & AI 
                 student currently pursuing my Bachelor of Technology (B.Tech) degree. 
                 I have a strong interest in web development and enjoy creating modern,
                 responsive, and user-friendly web applications that solve real-world problems.</p>

                <p className="text-blue-400 md:pl-[21%] pt-6 md:w-[78%] px-4 text-justify">I am constantly learning new technologies and 
                    improving my development skills through academic projects and self-learning. 
                    My goal is to become a skilled software engineer capable of building 
                    innovative digital solutions that positively impact businesses and communities.</p>

                <p className="text-blue-400 md:pl-[21%] pt-6 md:w-[78%] px-4 text-justify"> I am passionate about continuous learning and growth, both in my professional 
                and personal life. Beyond my role as a web developer, My dedication to learning is reflected in my constant pursuit of 
                 knowledge to deepen my understanding of Islam and improve my spiritual 
                 practices.</p>

                <p className="text-blue-400 md:pl-[21%] pt-6 md:w-[78%] px-4 text-justify">I am enthusiastic about exploring new opportunities that challenge and expand 
                my skills. The prospect of working in an environment that fosters continuous 
                learning and skill development aligns with my belief that there is always room
                 for improvement. I invite open communication and collaboration, welcoming
                 opportunities to contribute to meaningful projects that make a positive impact 
                on the world.</p>

                

                <p className="text-blue-400 md:pl-[21%] pt-6 md:w-[78%] px-4 text-justify"> I enjoy exploring new technologies, 
                    solving challenging problems,
                     and working on projects that enhance my technical knowledge and practical experience.</p>

                    

                <p className="text-blue-400 md:pl-[21%] pt-6 md:w-[78%] px-4 text-justify"> Over the time I've specialized in many 
                    technologies some of them are...</p>

                {/* <p className="text-blue-400 font-bold text-2xl pt-5 text-justify w-[90%] pl-[30%] md:pl-[34%]">
                    Technical Skills</p> */}

                    <p className="text-blue-400 font-bold text-2xl pt-5 text-justify md:w-[90%] md:pl-[34%] px-4">
                    Technical Skills
                    </p>
                    {/* <div className="flex flex-cols-2 w-[90%]"> */}

                    <div className="flex flex-col md:flex-row md:w-[90%]">
                        {/* <div className="md:ml-[23%] ml-20">
                        <p className="text-white pt-5 text-justify">Frontend Development</p> */}

                        <div className="ml-4 md:ml-[23%]">
                        <p className="text-white pt-5 pl-2 text-justify">
                            Frontend Development
                         </p>

                        <p className="text-blue-400 pt-5 text-justify"> . HTML</p>
                        <p className="text-blue-400 pt-5 text-justify"> . CSS</p>
                        <p className="text-blue-400 pt-5 text-justify"> . JavaScript</p>
                        <p className="text-blue-400 pt-5 text-justify"> . React.js</p>
                        <p className="text-blue-400 pt-5 text-justify"> . Bootstrap</p>
                        <p className="text-blue-400 pt-5 text-justify"> . Tailwind CSS</p>
                        </div>
                       <div className="ml-4 md:ml-[15%]">
                        <p className="text-white pt-5 text-justify">Backend Development</p>
                        <p className="text-blue-400 pt-5 text-justify"> . Node.js</p>
                        <p className="text-blue-400 pt-5 text-justify"> . Express.js</p>
                        <p className="text-blue-400 pt-5 text-justify"> . Data Structures</p>
                        
                       
                        
                        
                        </div>
                    </div>
                    {/* <div className="flex flex-cols-2 pt-5"> */}
                    <div className="flex flex-col md:flex-row pt-5">

                        <div className="ml-4 md:ml-[21%]">
                        <p className="text-white pt-5 text-justify"> Database</p>
                        <p className="text-blue-400 pt-5 text-justify"> . MongoDB</p>
                        <p className="text-blue-400 pt-5 text-justify"> . Postgres SQL</p>
                        </div>
                      <div className="ml-4 md:ml-[22%]">
                        <p className="text-white pt-5 text-justify">Tools & Technologies</p>
                        <p className="text-blue-400 pt-5 text-justify"> . Git & GitHub</p>
                        <p className="text-blue-400 pt-5 text-justify"> . Netlify</p>
                        <p className="text-blue-400 pt-5 text-justify"> . Vercel</p>
                        
                        <p className="text-blue-400 pt-5 text-justify"> . Visual Studio Code</p>
                        </div>
                    </div>
                
            </div>

            <div className="md:mt-8 md:mr-[14%] order-1 md:order-2 " >
                <img className="w-32 h-32 mt-2 mx-8 object-cover mx-auto md:w-auto md:h-auto"
                src="/image/pic3.jpeg"/>
            </div> 
        </div>
        </div>

        <div className="flex ml-20 md:mt-20 mt-10" id="four" >
        <p className="md:text-4xl text-3xl font-bold text-white md:pl-12  pt-20"> Things I've Worked on, Some of Them</p>
        <hr className="md:w-[27%] md:mt-[9%] ml-2 mt-20 "/>
        </div>

        <div className="flex flex-cols-2" >
            <div className="md:ml-[10%] mx-3">
                <p className="text-white pt-10"> Featured Project</p>
                <p className="text-blue-400 text-2xl pt-4"> Smart Resume Scanner</p>
                <div className="border border-gray-800 mt-4 bg-gray-600 md:w-[45%] ">
                    <p className="text-white text-justify w-[100%] py-4 px-6"> Smart Resume Scanner is an AI-powered web application designed 
                        to analyze resumes and match them with job requirements. The platform helps job seekers improve their resumes by 
                        identifying strengths, weaknesses, missing skills, and formatting issues. Users can upload their resume in 
                        PDF or DOCX format, and the system automatically scans the content 
                        to provide detailed feedback and suggestions.</p>
                </div>
                <p className="text-blue-400 pt-4 "> React Native | Hybrid Web application | Windows | iOS</p>

                
                
                
            </div>
              
            <div>
                
            </div>

             
        </div>
        



        <div classNamme="flex flex-cols-2">
            <div>

            </div>

             <div className="md:ml-[50%] mx-3">
                <p className="text-white pt-10"> Featured Project</p>
                <p className="text-blue-400 text-2xl pt-4"> Gyan Pargas Trust</p>
                <div className="border border-gray-800 mt-4 bg-gray-600 md:w-[85%]">
                    <p className="text-white text-justify w-[100%] py-4 px-6"> The Gyan Pargas Trust Website is a comprehensive 
                    digital platform developed using
                    React.js (Frontend) and Node.js with Express (Backend).
                    Its main objective is to give an online presence to Gyan Pargas Trust, an organisation
                  actively working in the fields of education, health, women empowerment, and community upliftment.
                   The website aims to Showcase trust activities,
                  Provide transparent information about leadership,
                 Display event photos and gallery,
                      Allow public interaction through contact forms,
                    Spread awareness about social programs,
                   Accept donations (optional module),
                The platform is modular and scalable for future expansion.</p>
                </div>
                <p className="text-blue-400 pt-4 "> React Native | Hybrid Web application | Windows | iOS</p>

                </div>
            
        

        </div>
        
        

        
        <div className="flex flex-cols-2">
            <div className="md:ml-[10%] mx-3">
                <p className="text-white pt-10"> Featured Project</p>
                <p className="text-blue-400 text-2xl pt-4"> Vyapar ERP Software</p>
                <div className="border border-gray-800 mt-4 bg-gray-600 md:w-[45%]">
                    <p className="text-white text-justify w-[100%] py-4 px-6">The Vyapar ERP System is a web-based enterprise resource planning solution developed to simplify and digitize 
                        daily business operations. This system is built using modern technologies such as Node.js for 
                        backend processing, React for building an interactive user interface, and Tailwind CSS for 
                        responsive and efficient styling.
                         The application enables users to create and manage ledgers, record financial transactions through various voucher types,
                       and maintain a structured database of business activities. The voucher system includes payment vouchers for cash purchases, receipt vouchers for cash sales, journal vouchers for credit-based transactions, sale vouchers, and service payment vouchers.</p>
                </div>
                <p className="text-blue-400 pt-4 "> React Native | Hybrid Web application | Windows | iOS</p>

                 </div>

            <div >
                
            </div>
        </div>

        

        


     
       


       <div className="mt-20 md:ml-[45%]  ml-20" id="five" >
        <button className="text-white bg-gray-800  px-10 py-3 border border-white hover:bg-white hover:text-gray-500 hover:border-none"
         onClick={handleOkClick}  >
           
             VIEW ALL PROJECTS </button>
        </div>


     
        

        
       

       <div className="mt-20 "  >
        <p className="text-center md:text-2xl text-3xl text-white"> Get in touch</p>
    
        <p className="md:text-5xl text-4xl text-center text-white  pt-5 " >Let’s Work Together</p>

        <p className="md:pl-[30%] px-4 text-justify pt-8 md:w-[70%] text-white"> I’m open for new opportunities – especially ambitious or large projects. However, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!.</p>
       
       <button className="border border-white mt-10 text-white hover:bg-orange-200 bg-gray-800
        hover:text-black md:ml-[47%] ml-[35%] px-3 py-4" onClick={handleOkClicks}> Say Hello</button>
      
       </div>
       <br/>
       <br/>
   
        </div>
    )
 }

 
       

       
    
   
export default Profile;
