import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:arihant.singh9703@gmail.com?subject=Hey">{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contact;
