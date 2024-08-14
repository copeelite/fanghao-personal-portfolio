"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("AboutSection");
  const sectionLan = useTranslations("SectionName");
  const activeLocale = useLocale();

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        <div className="flex flex-col gap-2">
          <div>
            我的编程之旅始于童年，受到程序员父亲的影响。我从基本的计算机技能和
            Python 开始，创建了一个简单的贪吃蛇游戏。那真的很有趣！在
            <a
              href="https://en.wikipedia.org/wiki/University_of_Wisconsin%E2%80%93Madison"
              target="_blank"
            >
              <u>威斯康星大学麦迪逊分校</u>
            </a>
            ，我正式学习了计算机科学，包括
            <b>
              <i>Java</i>
            </b>
            、<b>
              <i>数据库</i>
            </b>
            和<b>
              <i>软件开发</i>
            </b>
            。我将于<b>
              <i>2025 年春季</i>
            </b>
            获得<b>
              <i>计算机科学学士学位</i>
            </b>
            。我擅长编程，喜欢逐步解决复杂问题的过程。
          </div>
          <div>
            我对技术的热情不仅限于编码。我喜欢了解新技术和框架，总是
            <b>
              <i>渴望学习和创新</i>
            </b>
            。我能应对软件开发带来的挑战。
          </div>
          <div>
            闲暇时，我喜欢旅行和用相机捕捉美好瞬间。我在
            <a
              className="underline"
              href="https://www.xiaohongshu.com/user/profile/5918dbb850c4b44c0a329cd8?xhsshare=CopyLink&appuid=5918dbb850c4b44c0a329cd8&apptime=1722615177&share_id=baefdb29cc5148c8b928b0b101ac4da2"
              target="_blank"
            >
              小红书
            </a>
            和
            <a
              className="underline"
              href="https://www.instagram.com/frdhuy/"
              target="_blank"
            >
              Instagram
            </a>
            上分享我的摄影作品。<b>
              <i>摄影</i>
            </b>
            对我来说，不仅仅是一种爱好，而是讲述故事和捕捉瞬间精髓的一种方式。这种艺术洞察力让我能以独特的视角处理项目。
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
            My programming journey began in childhood, influenced by my father,
            who is a programmer. I started with basic computer skills and
            Python, creating a simple snake game. It was truly fascinating! At
            the{" "}
            <a href="https://en.wikipedia.org/wiki/University_of_Wisconsin%E2%80%93Madison">
              <u>University of Wisconsin-Madison</u>
            </a>
            , I formally studied computer science, including{" "}
            <b>
              <i>Java</i>
            </b>
            ,{" "}
            <b>
              <i>Databases</i>
            </b>
            , and{" "}
            <b>
              <i>Software Development</i>
            </b>
            . I am set to graduate with a{" "}
            <b>
              <i>Bachelor's in Computer Science</i>
            </b>{" "}
            in{" "}
            <b>
              <i>Spring 2025</i>
            </b>
            . I excel at programming and enjoy the step-by-step process of
            solving complex problems.
          </p>

          <p className="mb-3">
            My passion for technology extends beyond coding. I love exploring
            new technologies and frameworks, always{" "}
            <b>
              <i>eager to learn and innovate</i>
            </b>
            . I thrive on the challenges that come with software development.
          </p>

          <p className="mb-3">
            In my free time, I enjoy traveling and capturing beautiful moments
            with my camera. I share my photography works on{" "}
            <a href="https://www.xiaohongshu.com/user/profile/5918dbb850c4b44c0a329cd8?xhsshare=CopyLink&appuid=5918dbb850c4b44c0a329cd8&apptime=1722615177&share_id=baefdb29cc5148c8b928b0b101ac4da2">
              <u>Xiaohongshu</u>
            </a>{" "}
            and{" "}
            <a href="https://www.instagram.com/frdhuy/">
              <u>Instagram</u>
            </a>
            .{" "}
            <b>
              <i>Photography</i>
            </b>
            , for me, is not just a hobby but a way to tell stories and capture
            the essence of a moment. This artistic insight allows me to approach
            projects with a unique perspective.
          </p>
        </>
      )}
    </motion.section>
  );
}
