import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold">
            Siva Ranjani
          </h3>

          <p className="text-sm text-gray-400">
            Full Stack Developer
          </p>
        </div>

        {/* Center */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Siva Ranjani.
          All rights reserved.
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-violet-400 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-violet-400 transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;