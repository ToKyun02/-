"use client";

import { motion } from "framer-motion";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={styles.container}
      >
        <h2 className={styles.title}>Get in Contact</h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.form}
        >
          <div className={styles.formGroup}>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              placeholder="Your Message"
              rows={6}
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={styles.button}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
