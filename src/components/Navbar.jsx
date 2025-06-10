import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/CircleNameWhiteText.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If user is scrolling up, expand navbar
      if (currentScrollY < lastScrollY.current) {
        setScrolledUp(true);
      } else {
        setScrolledUp(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const floatProps = {
    animate: {
      y: [0, -4, 0],
      opacity: [1, 0.8, 1],
    },
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      opacity: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    whileHover: {
      scale: 1.2,
      rotate: 3,
      textShadow: "0px 0px 8px rgba(255,255,255,0.6)",
    },
  };

  const floatWords = {
    animate: {
      y: [0, 0, 0],
      opacity: [1, 0.8, 1],
    },
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      opacity: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    whileHover: {
      scale: 1.1,
    },
  };

  return (
    <nav
      className={`
        fixed top-0 w-full z-40
        transition-all duration-300
        bg-black/25 backdrop-blur-md
        ${scrolledUp ? "py-8" : ""}
      `}
    >
      <motion.div
        animate={{
          scale: scrolledUp ? 1 : 0.8,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="max-w-5xl mx-auto px-4"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo - fades out when scrolling down */}
          <motion.img
            src={logo}
            alt="My Logo"
            className={`w-24 h-24 cursor-default`}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              ...floatProps.animate,
              opacity: scrolledUp ? [1, 0.8, 1] : 0,
              scale: scrolledUp ? 1 : 0.8,
            }}
            transition={{
              ...floatProps.transition,
              opacity: {
                duration: scrolledUp ? 2 : 0.3,
                repeat: scrolledUp ? Infinity : 0,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              scale: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            whileHover={scrolledUp ? floatProps.whileHover : {}}
          />

          {/* mobile hamburger */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* desktop menu + social icons */}
          <div className="hidden md:flex items-center space-x-6">
            {["home", "about", "projects", "contact"].map((section) => (
              <motion.a
                key={section}
                {...floatWords}
                href={`#${section}`}
                className="text-gray-300 hover:text-white transition text-3xl"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </div>

          {/* social icons - fade out when scrolling down */}
          <motion.div
            className="flex flex-row space-x-5"
            animate={{
              opacity: scrolledUp ? 1 : 0,
              scale: scrolledUp ? 1 : 0.8,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <motion.a
              {...floatProps}
              className="text-gray-300 hover:text-white transition"
              href="https://github.com/ttristten"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                ...floatProps.animate,
                opacity: scrolledUp ? [1, 0.8, 1] : 0,
              }}
              transition={{
                ...floatProps.transition,
                opacity: {
                  duration: scrolledUp ? 2 : 0.3,
                  repeat: scrolledUp ? Infinity : 0,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              whileHover={scrolledUp ? floatProps.whileHover : {}}
            >
              <FaGithub size={40} />
            </motion.a>

            <motion.a
              {...floatProps}
              className="text-gray-300 hover:text-white transition"
              href="https://linkedin.com/in/tristen-bizzaro-265633253"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                ...floatProps.animate,
                opacity: scrolledUp ? [1, 0.8, 1] : 0,
              }}
              transition={{
                ...floatProps.transition,
                opacity: {
                  duration: scrolledUp ? 2 : 0.3,
                  repeat: scrolledUp ? Infinity : 0,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              whileHover={scrolledUp ? floatProps.whileHover : {}}
            >
              <FaLinkedin size={40} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};
