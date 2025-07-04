import { RevealOnScroll } from "../RevealOnScroll";
import hypefactor from "../../assets/hypefactor.png";
import odetokyo from "../../assets/odetokyo.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 245, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">HypefactorAI</h3>
              <p className="text-gray-400 mb-4">
                An AI powered marketing platform for solopreneurs to small
                businesses and growing teams, providing tools to seamlessly
                automate tedious tasks and generate meaningful content.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJS", "PhP", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 245, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <img
                src={hypefactor}
                alt="hype"
                className={`rounded-md cursor-default`}
              />
              <div className="flex justify-between items-center">
                <a
                  href="https://www.hypefactor.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Live Site{" "}
                </a>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 245, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Odetokyo Reservation Calendar
              </h3>
              <p className="text-gray-400 mb-4">
                React Web Application: Constructed a calendar website for
                customers of Odetokyo (located in SanFrancisco) to view other
                party's reservations. Created the front-end calendar interface
                and connected the site to a spreadsheet that automatically
                updates the calendar via API requests.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJS", "Python", "AWS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 245, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <img
                src={odetokyo}
                alt="ode"
                className={`rounded-md cursor-default`}
              />
              <div className="flex justify-between items-center">
                <a
                  href="https://odetokyo.com/reservations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Live Site{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
