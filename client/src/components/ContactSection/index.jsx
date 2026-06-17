import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-20 "
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently open to Software Engineer opportunities,
            freelance projects, and exciting collaborations.
            Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:sivaranjani312004@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition"
              >
                <MdEmail size={24} />
                <span>sivaranjani312004@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+916369195056"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition"
              >
                <FiPhone size={22} />
                <span>+91 63691 95056</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Ranjani-31"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/sivaranjani31"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* CTA Card */}
          <div className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">
              Let's Build Something Amazing
            </h3>

            <p className="text-gray-400 mb-8">
              Whether it's a full-time role, freelance project,
              startup idea, or collaboration, I'd love to hear
              about it.
            </p>

            <a
              href="mailto:sivaranjani312004@gmail.com"
              className="w-fit px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition duration-300"
            >
              Say Hello 👋
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;