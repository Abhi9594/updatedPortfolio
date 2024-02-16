import { iipc, kiet, infosys,school  } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Infosys Summer Internship Program",
        company_name: "Infosys",
        icon: infosys,
        iconBg: "#accbe1",
        date: "July 2023 - August 2023",
        points: [
            "Developing a foundational understanding of Data Science, Artificial Intelligence and Machine Learning principle.",
            "Analyzed data sets to derive actionable insights and presented findings to colleagues and supervisors",
            "Perform data wrangling and manipulation with the help of Pandas.",
            "Learn efficient practices of writing code in large projects.",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "KIET IIPC",
        icon: iipc,
        iconBg: "#fbc3bc",
        date: "August 2021 - September 2021",
        points: [
            "Developed and maintained web applications using React, JavaScript, HTML5, CSS3, MySQL database.",
            "Contributed in code for fetching resources from Server by using fetch API and Asynchronous Programming.",
            "Implementing responsive design by the help of tailwind CSS and ensuring cross-browser compatibility.",
            "Participating in code reviews and learn from Senior developers.",
        ],
    },
    {
        title: "Kiet group of Institutions, Ghaziabad",
        company_name: "Bachelor's Degree",
        icon: kiet,
        iconBg: "#b7e4c7",
        date: "July 2020 - June 2024",
        points: [
            "Pursuing Bachelor of Technology in Information Technology from 2020 to 2024.",
            "Current CGPA is 7.75.",
            "Developed the basic fundamental of computer science such as Database, Computer Networks and Data Structure and Algorithms.",
            "Member of college Cricket team."
        ],
    },
    {
        title: "Gyan Deep Senior Secondary School",
        company_name: "Schooling",
        icon: school,
        iconBg: "#a2d2ff",
        date: "April 2015 - March 2019",
        points: [
            "Developed and build the basic fundamentals of Science and Mathematics.",
            "Secured 88.% in 12th class.",
            "Secured 9.6 CGPA in 10th class.",
            "Represent school as Captain and secured the 2nd positon in state under-17 kabaddi tournament.",
            "Represent school and secured the 3nd positon in state under-19 kabaddi tournament."

        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Abhi9594',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhimanyu-yadav-471820215/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link:'https://github.com/Abhi9594/priceTrackerApp',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/Abhi9594/threadClone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/Abhi9594/carGindingApp',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/Abhi9594/socialMediaApp',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/Abhi9594/realStateApp',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Abhi9594/AI-Summarizer-Application',
    }
];