import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiBootstrap, SiGit } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion";
import { IconsManifest } from "react-icons";

const iconVariantsp = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const iconVariantsn = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap  items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariantsp(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariantsn(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariantsp(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariantsn(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariantsp(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVariantsn(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGit className="text-7xl " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
