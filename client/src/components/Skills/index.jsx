const skills = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "WebSockets",
      "JWT",
    ],
  },
  {
    title: "Database",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Nginx",
      "Linux",
      "GitHub Actions",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
    ],
  },
  {
    title: "CS Fundamentals",
    items: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "Networking",
      "Operating Systems",
      "OOP",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-violet-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}