import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((Project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={Project.image}
                alt={Project.title}
                width={250}
                height={250}
                className="m-5 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: +100, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* <h5 className="mb-2 font-semibold text-lg"></h5> */}
              <a href={Project.link} className="mb-2 font-semibold text-lg">{Project.title}</a>
              <p className="mb-4 text-neutral-400">{Project.description}</p>
              {Project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
