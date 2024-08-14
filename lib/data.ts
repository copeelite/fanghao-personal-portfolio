import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import plantGrowthMonitoringImage from "@/public/plantGrowthMonitoringImage.png";
import ucsSatelliteImage from "@/public/ucsSatelliteImage.png";
import minirelDatabaseImage from "@/public/minirelDatabaseImage.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "BS in Computer Science",
        location: "University of Wisconsin-Madison, WI",
        description:
            "Earned a Bachelor's degree in Computer Science from the University of Wisconsin-Madison, with a strong focus on software development. Acquired a comprehensive understanding of software engineering principles, including algorithms, data structures, and object-oriented programming. Demonstrated proficiency in multiple programming languages and frameworks, equipping myself to deliver innovative and efficient software solutions in dynamic tech environments.",
        icon: React.createElement(LuGraduationCap),
        date: "Jan. 2022 - May.2025",
    },
    {
        title: "BS in Computer Science",
        location: "College of Mount Saint Vincent, NY",
        description:
            "Studied foundational courses in Python programming and Calculus at the College of Mount Saint Vincent. This experience provided a strong academic base and solidified my interest in computer science. Successfully transferred to the University of Wisconsin-Madison to pursue advanced studies in the field.",
        icon: React.createElement(LuGraduationCap),
        date: "Jan.2021 - Dec.2021",
    },
    {
        title: "Associate of Science",
        location: "Southern Utah University, UT",
        description:
            "Completed an Associate of Science degree at Southern Utah University, bypassing high school courses to focus on general education. Explored a wide range of subjects, fostering a diverse academic foundation. This experience guided my decision to pursue a career in computer science and sparked a passion for photography.",
        icon: React.createElement(LuGraduationCap),
        date: "Sep.2019 - Dec.2020",
    },
]

export const experiencesDataZn = [
    {
        title: "计算机科学学士",
        location: "威斯康星大学麦迪逊分校, WI",
        description:
            "获得了威斯康星大学麦迪逊分校的计算机科学学士学位，重点学习软件开发。掌握了软件工程原理，包括算法、数据结构和面向对象编程。在多种编程语言和框架方面表现出色，具备在动态科技环境中提供创新和高效软件解决方案的能力。",
        icon: React.createElement(LuGraduationCap),
        date: "2022年1月 - 2025年5月",
    },
    {
        title: "计算机科学基础学习",
        location: "纽约圣文森特学院, NY",
        description:
            "在纽约圣文森特学院学习了Python编程和微积分的基础课程。这段经历为我提供了扎实的学术基础，并坚定了我对计算机科学的兴趣。成功转学到威斯康星大学麦迪逊分校，继续深入学习该领域。",
        icon: React.createElement(LuGraduationCap),
        date: "2021年1月 - 2021年12月",
    },
    {
        title: "理学副学士",
        location: "南犹他大学, UT",
        description:
            "在南犹他大学完成了理学副学士学位，跳过了高中课程，专注于通识教育。探索了广泛的学科领域，培养了多元的学术基础。这段经历引导我决定未来从事计算机科学领域，并激发了我对摄影的兴趣。",
        icon: React.createElement(LuGraduationCap),
        date: "2019年9月 - 2020年12月",
    },
];



export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "Plant Growth Monitoring System (In Development)",
        title_zh: "植物生长监测系统 (开发中)",
        description:
            "Developing a system using computer vision to monitor and record plant growth in large-scale farmland. Utilizes Meta's SAM2 for segmentation and OpenCV for image processing, automating the analysis of visual data to provide insights into crop health.",
        desc_zh: "开发中，使用计算机视觉技术监测并记录大规模农田中的植物生长。系统使用Meta的SAM2进行分割，结合OpenCV进行图像处理，自动分析视觉数据，获取作物生长数据。",
        tags: ["Computer Vision", "Meta SAM2", "OpenCV", "Python"],
        imageUrl: plantGrowthMonitoringImage,
        projectUrl: '',
        demoUrl: '',
    },
    {
        title: "UCS Satellite Database",
        title_zh: "UCS 卫星数据库",
        description:
            "Developed an automated system for Union of Concerned Scientists, using Scrapy to ensure real-time satellite data. Features a PostgreSQL database for efficient management, with a Vue interface for easy access by non-technical users.",
        desc_zh: "为关注科学家联盟（UCS）开发的自动化系统，使用Scrapy确保卫星数据实时更新。项目包含一个PostgreSQL数据库用于高效管理，并配备了Vue界面，方便非技术用户访问。",
        tags: ["Python", "Vue", "Scrapy", "PostgreSQL"],
        imageUrl: ucsSatelliteImage,
        projectUrl: 'https://github.com/matthew7838/CS639Skynet',
        demoUrl: '',
    },
    {
        title: "Minirel Database Project",
        title_zh: "迷你数据库项目",
        description:
            "A university project creating a single-user DBMS on UNIX, capable of executing SQL queries. Implemented heap files, database catalogs, and relational operators for high-performance data management.",
        desc_zh: "大学项目，开发了一个在UNIX系统上运行的单用户DBMS，能够执行SQL查询。实现了堆文件、数据库目录和关系运算符，确保了高性能的数据管理。",
        tags: ["DBMS", "SQL", "UNIX"],
        imageUrl: minirelDatabaseImage,
        projectUrl: '',
        demoUrl: '',
    },
    
]


export const skillsData = [
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Python",
    "HTML",
    "R",
    "React",
    "Spring Framework",
    "Vue3",
    "MySQL",
    "Express",
    "Git",
    "Github",
    "Docker",
    "Maven",
    "Postman",
    "Tailwind",
    "Boostrap",
    "Framer Motion",
] 
