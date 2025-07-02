import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "C++", "HTML", "CSS", "JS", "Java"];
  const backendSkills = [
    "Python",
    "Node.js",
    "AWS",
    " SQL Server",
    "Django",
    "Docker",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="bg-gray-800 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="mb-2 text-justify">
              I am a Software Engineer based in Chino Hills, California, with a
              strong passion for creating intuitive user interfaces and seamless
              digital experiences. The challenge of transforming complex ideas
              into polished, user-friendly applications that make a real impact
              drives me to be work hard and diligently. Whether I'm
              collaborating with teams to meet tight deadlines or exploring the
              latest developments in AI, I'm always looking for creative
              solutions to complex problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 245, 0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 245, 0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 bg-gray-800">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul>
                <li>
                  <strong>B.S. in Computer Science</strong> - Cal Poly Pomona
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Software Engineering,
                  Object Oriented Programming, GUI Programming, Design and
                  Analysis of Algorithms, Data Structures, Discrete Structures,
                  Operating Systems
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border bg-gray-800 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Developer at HypefactorAI (2024 - present)
                  </h4>
                  <p>
                    - Development of user interfaces for AI-powered marketing
                    software, enhancing the brand personality creation process
                    and streamlining marketing asset generation, leading to
                    higher user satisfaction scores.
                  </p>
                  <p>
                    - Coordinated with backend teams to ensure seamless
                    functionality and meet tight deadlines.
                  </p>
                  <p>
                    Stripe integration, and leveraged user interaction data to
                    guide strategic decisions, leading to a more secure,
                    efficient user experience
                  </p>
                  <p>
                    - Headed the creation of OpenAI-powered assets, improving
                    the training process for AI assistants and reducing
                    development time by 50% by implementing prompt chaining
                    techniques and agentic systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
