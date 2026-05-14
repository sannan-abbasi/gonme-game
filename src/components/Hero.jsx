import { motion } from "framer-motion";
import gnome from "../assets/gnome.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LAUGH.
          <br />
          PLAY.
          <br />
          <span>CAUSE CHAOS.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Welcome to the funniest gnome game
          on the internet.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: -3,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hero-btn"
        >
          PLAY CHAOS
        </motion.button>

      </div>

      {/* RIGHT SIDE */}
      <motion.div
        className="hero-right"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <img src={gnome} alt="gnome" />
      </motion.div>

      {/* GLOW */}
      <div className="purple-glow"></div>

    </section>
  );
};

export default Hero;