import React from "react";
import Card from "@/ui/Card";

const Projects = () => {

  return (
    
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh]">
      {/* Title section with full width, blue background, and increased height */}
      <div className="w-full items-center justify-center flex bg-white py-10 h-[65px] brightness-105 text-center">
        <span className="text-3xl font-bold">Projects</span>
      </div>

      {/* Card section with spacing */}
      <div className="container flex flex-wrap flex-row justify-center mt-10 mb-10 px-4">
        <Card
        imagelink="/projectsimage/Examsavior.png"
        langs={["Ejs","Css","Js","Sql","Router","Postgres"]}
          title="Exam Savior"
          content="A notes platform with TTS, last-year papers, and key questions for quick exam prep.
Built with Express (API + Routes), EJS, HTML/CSS/JS, and PostgreSQL.
Includes Controller Based user authentication for login and signup to personalize the experience."
          livelink="https://examsavior.net"
          githublink="https://github.com/Ashishx3/ExamSavior"
        />
        <Card
        imagelink="/projectsimage/Notessubmission.png"
        langs={["React JS","Tailwind","Router","Express","UplaodThing"]}
          title="Notes Submission Platform"
          content="A notes platform with TTS, last-year papers, and key questions for quick exam prep.
Built with Express (API + Routes), EJS, HTML/CSS/JS, and PostgreSQL.
Includes user authentication for login and signup to personalize the experience."
          livelink="https://notes-submitter.vercel.app"
          githublink="https://github.com/Ashishx3/NotesUploaderFrontend"
        />
       <Card
  imagelink="/projectsimage/tts.png"
  langs={["HTML", "CSS", "JS","Python"]}
  title="Text-To-Speech Web App"
  content="A lightweight web app that converts written text into speech using the Web Speech API. Designed for quick revision and accessibility. Built using only HTML, CSS, and JavaScript and Python."
  livelink="https://textospeech-one.vercel.app"
  githublink="https://github.com/Ashishx3/Text-to-speech"
/>
<Card
  imagelink="/projectsimage/comp.png"
  langs={["React.JS", "Tailwind", "Express", "SQL", "Node"]}
  title="College Level Competition Website"
  content="A college-focused platform showcasing 30+ industries and storing contact data using a full-stack setup. 
Frontend built with React and deployed on Vercel; backend built with Express and SQL, deployed on Render."
  livelink="https://lnct-competetion-website.vercel.app"
  githublink="https://github.com/Ashishx3/ExamSavior"
/>

        <Card
        imagelink="/projectsimage/Examsavior.png"
        langs={["Ejs","Css","Js","Sql",""]}
          title="Exam Savior"
          content="A notes platform with TTS, last-year papers, and key questions for quick exam prep.
Built with Express (API + Routes), EJS, HTML/CSS/JS, and PostgreSQL.
Includes user authentication for login and signup to personalize the experience."
          livelink="https://examsavior.net"
          githublink="https://github.com/Ashishx3/ExamSavior"
        />
        <Card
        imagelink="/projectsimage/Examsavior.png"
        langs={["Ejs","Css","Js","Sql",""]}
          title="Exam Savior"
          content="A notes platform with TTS, last-year papers, and key questions for quick exam prep.
Built with Express (API + Routes), EJS, HTML/CSS/JS, and PostgreSQL.
Includes user authentication for login and signup to personalize the experience."
          livelink="https://examsavior.net"
          githublink="https://github.com/Ashishx3/ExamSavior"
        />
      </div>
    </div>
  );
};
  
export default Projects;
