"use client";

import { motion } from "framer-motion";
import styles from "./skills.module.css";

const skills = [
  {
    category: "Frontend Development",
    items: [
      {
        name: "React & Next.js",
        description:
          "서버 컴포넌트 및 서버 액션의 기능을 이해하고 있습니다.\nTanStack Query를 사용하여 전역 서버 상태 관리를 합니다.\nReact-Hook-Form과 zod를 사용하여 실시간 form validation 및 Controller를 사용할 줄 압니다.\ngenerateMetadata 등을 활용하여 SEO를 높힙니다.",
      },
      {
        name: "TypeScript",
        description:
          "any 타입을 지양합니다. 추론이 힘든 경우에는 unknown 타입으로 대체합니다.\nzod의 스키마와 safeParse를 활용하여 타입 안정성을 높힙니다.",
      },
      {
        name: "CSS",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique molestias, nobis, perspiciatis fugit consectetur expedita debitis quas quae quasi fuga assumenda, temporibus ipsa id veritatis neque sapiente provident aliquid.",
      },
    ],
  },
  {
    category: "Etc Tools & Others",
    items: [
      {
        name: "Version Control",
        description: "GitFlow, Github Flow",
      },
      {
        name: "CLS",
        description: "이미지 크기 조정",
      },
      {
        name: "스타일링",
        description:
          "Tailwind, Modern CSS, CSS in JS를 사용할 줄 알고, Mobile First 디자인 원칙을 지켜서 반응형 웹을 구현합니다.",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Skills & Expertise
      </motion.h2>
      <div className={styles.grid}>
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className={styles.category}
          >
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.skillsList}>
              {category.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.2 + skillIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={styles.skillItem}
                >
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
