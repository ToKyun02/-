"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./about.module.css";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className={styles.about} id="about">
      <motion.div style={{ y, opacity }} className={styles.content}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.text}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam
              eos sit, facere nostrum fuga consequatur incidunt blanditiis
              commodi possimus sint temporibus assumenda. Illo facilis, quis hic
              veritatis maxime quas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.image}
          >
            <img src="/placeholder.svg?height=400&width=400" alt="Profile" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
