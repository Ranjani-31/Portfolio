const projects = [
  {
    title: "Multi Vendor Ecommerce",
    description:
      "A scalable ecommerce platform supporting multiple vendors, inventory management, order processing, payments, and real-time notifications.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Docker",
    ],

    github: "#",
    demo: "#",

    features: [
      "Vendor Dashboard",
      "Inventory Management",
      "Cart & Checkout",
      "Payment Integration",
      "Real-Time Notifications",
    ],
  },

  {
    title: "Real-Time Chat Application",
    description:
      "A scalable chat platform built with WebSockets supporting direct messaging, group chats, online presence, and message delivery tracking.",

    tech: [
      "React",
      "Node.js",
      "Socket.IO",
      "Redis",
      "MongoDB",
    ],

    github: "#",
    demo: "#",

    features: [
      "1-to-1 Messaging",
      "Group Chats",
      "Online Presence",
      "Typing Indicators",
      "Message Status",
    ],
  },

  {
    title: "Portfolio Builder",
    description:
      "A drag-and-drop portfolio builder with reusable components, live preview, JSON-based layouts, and export functionality.",

    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "DnD Kit",
    ],

    github: "#",
    demo: "#",

    features: [
      "Drag & Drop",
      "Live Editing",
      "Component Library",
      "JSON Layout Engine",
      "Theme Customization",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Preview */}
                <div className="h-72 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
                  <span className="text-lg text-gray-400">
                    Project Preview
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-8">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-gray-300"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="px-5 py-2 rounded-xl border border-white/10 hover:border-violet-500 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}