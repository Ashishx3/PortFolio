import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./Card.css";

const Card = ({ title, imagelink, livelink, githublink, content, langs = [] }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,         // 30% of the card is visible before triggering
    triggerOnce: false,     // allow re-triggering on scroll up/down
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 60 });
    }
  }, [inView, controls]);

  return (
    <div className="relative">
  <motion.div
    ref={ref}
    animate={controls}
    initial={{ opacity: 0, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="cardc transform-gpu will-change-transform bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-lg overflow-hidden"
  >
      {/* Image */}
      <a style={{ cursor: "none" }} rel="noopener noreferrer">
        {/* <div className="relative w-full h-56">
          <Image
            src={imagelink}
            alt={title}
fill


           
            className= "ingg object-cover rounded-t-xl"
            priority
          />
        </div> */}
        <div className="relative khiched w-full h-[260px]">
  <Image
    src={imagelink}
    alt={title}
    fill
    className="imageformobile object-cover rounded-t-xl"
    priority
  />
</div>

      </a>

      {/* Content */}
      <div className="divc p-5">
        <a
          href={livelink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-3 text-xl font-semibold tracking-tight  text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-400 hover:underline hover:text-purple-600 transition-colors"
        >
          {title}
        </a>

        <p className="mb-4 text-gray-400 text-sm leading-relaxed">
          {content}
        </p>

        <div style={{marginLeft: "3px"}} className="flex gap-2.5 p-2">
          {langs.map((lang, index) => (
           <span
  key={index}
  className="text-xs spann text-white border border-gray-700 inline-flex items-center justify-center me-2 mb-2 sm:text-sm sm:me-2 sm:mb-2"
>
  {lang}
</span>

          ))}
        </div>

        <span className="buttonn inline-flex items-center justify-center text-sm font-medium text-white bg-gradient-to-br from-slate-950 to-purple-950 rounded-lg cursor-default pointer-events-none select-none">
          Visit :
        </span>

        <a
          href={livelink}
          target="_blank"
          rel="noopener noreferrer"
          className="buttonn inline-flex items-center justify-center px-5 text-sm font-medium text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-800"
        >
          Live Link
        </a>

        <a
          href={githublink}
          target="_blank"
          rel="noopener noreferrer"
          className="buttonn inline-flex items-center justify-center px-5 text-sm font-medium text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-800"
        >
          GitHub Link
        </a>
      </div>
    </motion.div>
    </div>
  );
};

export default Card;



// import Image from "next/image";
// import "./Card.css";

// const Card = ({title, imagelink, livelink, githublink, content, langs =[]}) => {
//   return (
//     <div className="cardc bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
//       {/* Image */}
//       <a

//         style={{cursor: "none"}}
//         rel="noopener noreferrer"
//       >
//         <div className="relative w-full h-56">
//           <Image
//             src={imagelink}
//             alt={title}
//             fill
//             className="object-cover rounded-t-xl"
//             priority
//           />
//         </div>
//       </a>

//       {/* Content */}
//       <div className="p-5">
//         <a
//           href={livelink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block mb-3 text-xl font-semibold tracking-tight text-white hover:text-blue-400 transition-colors"
//         >
//           {title}
//         </a>

//         <p className="mb-4 text-gray-400 text-sm leading-relaxed">
//          {content}
//         </p>
//         <div className="flex gap-2.5  p-2">
//   {langs.map((lang, index) => (
//           <span
//             key={index}
//             className="text-gray-900 border border-gray-800 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 bg-white dark:bg-transparent h-[28px] w-[40px] inline-flex items-center justify-center"
//           >
//             {lang}
//           </span>
//         ))}


// {/* <span className="text-gray-900 border border-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 bg-white dark:bg-transparent h-[38px] inline-flex items-center justify-center">
//     Frontend Developer
//   </span>

//   <span className="text-gray-900 border border-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 bg-white dark:bg-transparent h-[38px] inline-flex items-center justify-center">
//     Backend Engineer
//   </span>

//   <span className="text-gray-900 border border-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 bg-white dark:bg-transparent h-[38px] inline-flex items-center justify-center">
//     UI/UX Designer
//   </span> */}
// </div>


//         <span className="buttonn inline-flex items-center justify-center text-sm font-medium text-white bg-gradient-to-br from-slate-950 to-purple-950 rounded-lg cursor-default pointer-events-none select-none">
//           Visit :
//         </span>

       
//         <a
//           href={livelink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="buttonn inline-flex items-center justify-center px-5 text-sm font-medium text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-800"
//         >
//           Live Link
//         </a>

//         <a
//           href={githublink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="buttonn inline-flex items-center justify-center px-5 text-sm font-medium text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-800"
//         >
//           GitHub Link
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Card;
