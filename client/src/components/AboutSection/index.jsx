function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <p className="text-violet-400 font-semibold mb-3">
              ABOUT ME
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Scalable Products & Systems
            </h2>

            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p className="text-justify">
               I'm a Full Stack Developer passionate about building scalable web applications and backend systems. I enjoy working across the entire development lifecycle, from crafting responsive user interfaces with React to designing APIs and database architectures using Node.js and MongoDB. My interests extend into system design, cloud infrastructure, microservices, and AI-powered applications. I continuously explore modern technologies and engineering practices to understand how large-scale products are built and scaled. Currently, I'm focused on strengthening my expertise in backend architecture, distributed systems, and product engineering while developing solutions that solve real-world problems.

              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <h3 className="text-4xl font-bold text-violet-400">
                10+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects Built
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <h3 className="text-4xl font-bold text-violet-400">
                500+
              </h3>
              <p className="text-gray-400 mt-2">
                DSA Problems
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <h3 className="text-4xl font-bold text-violet-400">
                Full
              </h3>
              <p className="text-gray-400 mt-2">
                Stack Development
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <h3 className="text-4xl font-bold text-violet-400">
                AI
              </h3>
              <p className="text-gray-400 mt-2">
                & System Design
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;