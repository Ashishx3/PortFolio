import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed left-2 top-1/3 z-50 flex flex-col gap-4">
      <a
        href="https://github.com/AshishX3"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_6px_white] transition duration-300 text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/ashish-singh-4001012a5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_6px_white] transition duration-300 text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_6px_white] transition duration-300 text-2xl"
      >
        <FaTwitter />
      </a>
      <a
        href="https://instagram.com/_.ashish_h_"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white hover:drop-shadow-[0_0_6px_white] transition duration-300 text-2xl"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
