import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a self taught Full Stack Developer, An experienced software developer who builds web applications. I love turning ideas into reliable and easy-to-use digital solutions. I focus on details and use the latest technologies to create applications that go beyond what clients expect. I combine creativity and technical skills to ensure everything works smoothly and provides a great user experience. My goal is to deliver outstanding web applications that shine in a competitive market.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Blog AI App",
    image: project1,
    description:
      "A highly responsive and interactive blog application, allowing users to read and publish blogs effortlessly. Powered by advanced AI, the app offers features such as blog summarization, ensuring an enhanced and engaging reading experience.",
    technologies: [
      "React",
      "Node.js",
      "Hono.js",
      "Cloudflare",
      "Prisma.io",
      "PostgreSql",
    ],
    link: "https://readpool-ai.vercel.app",
  },
  {
    title: "Social media app",
    image: project2,
    description:
      "An application inspired by Reddit, where users can create posts and engage with the community through comments, votes, and discussions.",
    technologies: ["React", "Node.js", "Express", "MongoDb"],
    link: "https://circlesss.vercel.app",
  },
  {
    title: "Hotel booking app",
    image: project3,
    description:
      "An app featuring an intuitive hotel registration form, allowing users to easily register their hotels and make bookings seamlessly.",
    technologies: ["React", "Node.js", "Express", "MongoDb"],
    link: "https://hotel-stay.onrender.com",
  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  email: "rishabhnegi175@gmail.com",
};
