// components/Contact.js
import { FaEnvelope, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
   
    <main className="flex justify-center items-center min-h-screen ">
    
    <div className="flex flex-col items-center gap-4 p-6  bg-gray-100  rounded-2xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
      
      {/* Email */}
      <a
        href="mailto:youremail@gmail.com"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <FaEnvelope /> ashishsinghyt111@gmail.com
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ashish-singh-4001012a5"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <FaLinkedin /> LinkedIn Profile
      </a>

      {/* Resume Download */}
      <a
        href="/resume.pdf"
        download
        className="flex items-center justify-center gap-2 h-[40px] bg-blue-600 text-white px-4 py-2 w-[180px] text-center rounded-lg shadow hover:bg-blue-700 transition"
      >
        <FaDownload />Download Resume
      </a>
    </div>
    </main>
  );
}
