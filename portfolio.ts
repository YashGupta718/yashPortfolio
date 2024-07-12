import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Yash Gupta",
  title: "Hi all, I'm Yash",
  description:
    "Passionate B.Tech graduate deeply committed to continuous learning and innovation. Proven track record in software development, with a keen eye for detail and a belief that learning is the cornerstone of personal and professional growth. Driven by an unwavering commitment to excellence, I thrive on continuous learning, believing it to be the key to personal and professional growth. Seeking opportunities to apply my skills in software development and make a positive impact.",
  // resumeLink: "https://drive.google.com/file/d/13Vo0RCSErdZIcO25U5uCq-5SZnBHeOZE/view?usp=drivesdk",
  resumeLink: "https://drive.google.com/file/d/1-4YEPvor8thMr2Q4CW41PzLSGUPIqsKM/view?usp=drivesdk",
};

export const openSource = {
  githubUserName: "YashGupta718",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:yashmittal709.ym@gmail.com",
  linkedin: "https://www.linkedin.com/in/sdeYashGupta/",
  github: "https://github.com/YashGupta718",
  instagram: "https://www.instagram.com/yasxh.xd",
  // facebook: 'https://www.facebook.com/',
  // twitter: 'https://twitter.com/',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CONSTANLY CODING, CONTINUOUSLY LEARNING: Crafting innovative solutions one line of code at a time.",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ JavaScript , ReactJs , Redux , TypeScript , Postman , HTML , CSS , Java "),
        emoji(" C , C++ , Sql , Spring Boot , Git , Github"),
        emoji("...................................................................."),
        emoji(
          "In my role as a Software Developer at RS-Infy, I led the development and implementation of an Enterprise Resource Planning system (ERP) for leading e-commerce companies. This experience not only enhanced my frontend development skills but also provided valuable insights into backend architecture and database management."
        ),
        emoji("...................................................................."),
        emoji(
          "As a final-year B.Tech student, I bring a wealth of experience in frontend development and an unwavering commitment to expanding my expertise into backend development. "
        ),
        emoji("...................................................................."),
        emoji(
          "My journey in software development has been marked by a passion for learning and a dedication to mastering new technologies. I am currently exploring Spring Boot and other backend technologies to broaden my skill set and contribute to full-stack projects."
        ),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "devicon:typescript",
        },
        {
          skillName: "Postman",
          iconifyTag: "vscode-icons:file-type-postman",
        },
        {
          skillName: "HTML",
          iconifyTag: "logos:html-5",
        },
        {
          skillName: "CSS",
          iconifyTag: "logos:css-3",
        },
        {
          skillName: "Java",
          iconifyTag: "devicon:java-wordmark",
        },
        {
          skillName: "C",
          iconifyTag: "mdi:language-c",
        },
        {
          skillName: "Cpp",
          iconifyTag: "mdi:language-cpp",
        },
        {
          skillName: "SQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Spring Boot",
          iconifyTag: "simple-icons:springboot",
          css: "{color: #6aad3d}",
        },
        {
          skillName: "Git",
          iconifyTag: "devicon:git",
        },
        {
          skillName: "Github",
          iconifyTag: "devicon:github",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Guru Gobind Singh Indraprastha University",
    subHeader: "Bachelor of Technology",
    duration: "July 2020 - June 2024",
    desc: "Electronics and Communication",
    grade: "82.04%",
    descBullets: [
      "Teamwork",
      "Team Leadership",
      "Team Management",
      "Project Management",
      "Problem Solving",
      "Social Influence",
    ], // Array of Strings
  },
  {
    schoolName: "St. Xavier's School",
    subHeader: "Senior secondary (XII)",
    duration: "April 2019 - March 2020",
    desc: "Science with specialization in Computers",
    grade: "89.40%",
    descBullets: ["Social Intelligence", "PSD to HTML", "C, C++", "Collaborative Problem Solving", "SQL", "OOPs"], // Array of Strings
  },
  {
    schoolName: "St. Xavier's School",
    subHeader: "Secondary (X)",
    duration: "April 2017 - March 2018",
    desc: "",
    grade: "82.40%",
    descBullets: ["HTML", "CSS", "Communication", "Microsoft Excell", "Microsoft PowerPoint", "Microsoft Word"], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer Intern",
    company: "Rs Infy",
    companyLogo: "/img/icons/common/rs-infy.png",
    date: "June 2022 - April 2023",
    // desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
    desc: "ReactJs, React-Redux, TypeScript, JavaScript, API Integration, Postman, Git, JWT",
    descBullets: [
      "Successfully developed and implemented a highly efficient Enterprise Resource Planning System ERP for leading e-commerce companies, resulting a increase in revenue and decreasing manual errors.",
      "Developed and implemented user-friendly interfaces for web applications using ReactJS, resulting in a 20% improvement in overall user experience. And integrated various APIs with system.",
      "Collaborated with cross-functional teams to gather user requirements and feedback, resulting in the successful implementation of new features and enhancements that improved efficiency.",
    ],
  },
  {
    role: "(COLLEGE EXTRA PERSUIT)",
    company: "Tech Team Lead @ CodeChef ADGIPS Chapter",
    companyLogo: "/img/icons/common/gfgLogo.jpg",
    date: "December 2020 - Jan 2023",
    desc: "DSA, Event Management, Team Management, Team Building, SQL, Problem Setter, Netlify, Front-End Design",
    descBullets: [
      "Designed and uploaded problems for DSA Carnival at CodeChef and successfully organized Hackathons like Live the code attracting participation from hundreds of students and securing sponsorships.",
      "Conduct monthly contests like Campus Code focused on Competitive Programming to foster peer development",
    ],
  },
  {
    role: "(COLLEGE EXTRA PERSUIT)",
    company: "Campus Ambassador @ Coding Blocks",
    companyLogo: "/img/icons/common/cbLogo.jpg",
    date: "Feb 2021 - Jul 2022",
    desc: "Marketing, DSA",
    descBullets: [
      "Conduct programming events & workshops to engage and inspire students.",
      "Create a conducive coding environment and encourage students to explore development opportunities during their college years.",
    ],
  },
  {
    role: "(COLLEGE EXTRA PERSUIT)",
    company: `Campus Ambassador @ Infosys`,
    companyLogo: "/img/icons/common/infosysLogo.jpg",
    date: "July 2021 - Apr 2022",
    desc: "Information Technology, Competitive Programming, JavaScript",
    descBullets: [
      "Conduct programming events & workshops to engage and inspire students.",
      "Create a conducive coding environment and encourage students to explore development opportunities during their college years.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "IMO | International Math Olympiad",
    role: "Freelance Project",
    projectLogo: "/img/icons/common/imoLogo.jpg",
    github: "https://github.com/RS-Infy/imo-student",
    link: "https://imo-india.org/",
    desc: "API Integration · API Testing · JSON Web Token (JWT) · React.js · Postman · TypeScript · Continuous Integration and Continuous Delivery (CI/CD)",
    descBullets: [
      "Developed & implemented interactive Reactjs applications for the Maths Olympiad, enhancing user engagement and improving problem-solving experiences and Integrated various APIs.",
      "Conducted thorough testing and debugging of developed applications to ensure seamless functionality and optimal performance, leading to a significant reduction in user-reported issues.",
      "Collaborated with cross-functional teams to design and develop multiple user-friendly portals, launch new portals, meeting strict deadlines and ensuring a seamless user experience.",
    ],
  },
  {
    name: "Urban Karma | E-commerce Website",
    role: "Freelance Project",
    projectLogo: "/img/icons/common/ukarmaLogo.png",
    github: "https://github.com/RS-Infy/urban-fashion",
    link: "https://urbankarmagb.co.uk/",
    desc: " API Integration · API Testing · React.js · Continuous Integration and Continuous Delivery (CI/CD)",
    descBullets: [
      "Successfully developed and launched a highly responsive and visually appealing e-commerce website for Urban Karma, a prominent UK-based fashion company.",
      "Leveraged React.js framework to build a dynamic and interactive frontend, creating an engaging user interface and enhancing the overall user experience.",
      "Implemented effective SEO strategies, for improved website visibility and organic traffic growth for Urban Karma. Tested APIs and further integrated APIs with web app.",
    ],
  },
  {
    name: "Black Jack Game",
    role: "",
    projectLogo: "/img/icons/common/bjgameLogo.jpg",
    github: "https://github.com/YashGupta718/BlackJack-Game",
    link: "https://yashgupta718.github.io/BlackJack-Game/",
    desc: "HTML · CSS · JavaScript",
    descBullets: [
      "Developed a JavaScript-based Blackjack game with a mix of strategy and luck.",
      " Demonstrated proficiency in JavaScript and CSS through this project. Instructions on how to play are available in my GitHub repository.",
      // "",
    ],
  },
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/YashGupta718/portfolio",
    link: "https://sdeyashgupta.vercel.app/",
    descBullets: [
      "Developed & implemented interactive Reactjs applications for the Maths Olympiad, enhancing user engagement and improving problem-solving experiences and Integrated various APIs.",
    ],
  },
  {
    name: "Kankyo Sensie",
    role: "SIH Hackathon",
    projectLogo: "/img/icons/common/kankyoLogo.jpg",
    github: "https://github.com/YashGupta718/Senshi",
    link: "https://kankyo-senshi.netlify.app/",
    desc: "HTML · CSS · JavaScript · Teamwork",
    // descBullets: [
    //   "",
    //   "",
    //   "",
    // ],
  },
  {
    name: "Maxwell",
    role: "",
    projectLogo: "/img/icons/common/maxwellLogo.jpg",
    github: "https://github.com/YashGupta718/",
    link: "https://women-health.netlify.app/",
    desc: "HTML · CSS · JavaScript · TeamCoordination · Bootstrap",
    // descBullets: [
    //   "",
    //   "",
    //   "",
    // ],
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Shagun",
    mail: "mailto:shagun.saboo@rsinfy.com",
    role: "Co-founder at Rs-Infy",
    feedback:
      "You were a wonderful addition to our team Yash. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. He has contributed to the growth of our organization and continues to do so.",
  },
  {
    name: "Rishab Jain",
    role: "Project head at Clapingo",
    feedback:
      "Yash has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Yash is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Yash for any SD roles, React.js, and I wish him all the best in his future endeavors.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Yash Gupta",
  description: greetings.description,
  author: "Yash Gupta",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  image:
    "https://media.licdn.com/dms/image/D5603AQEWhYlcDQ3F9A/profile-displayphoto-shrink_200_200/0/1709036106053?e=1718236800&v=beta&t=kve76uox-qIQIEZ2ZZqOumtne-NrVIltgQX-B_0yDXw",
  url: "https://sdeyashgupta.vercel.app",
  keywords: [
    "Yash",
    "Yash Gupta",
    "@sdeYashGupta",
    "YashGupta718",
    "Yash Portfolio",
    "Web Developer",
    "ReactJs",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "API Integration",
    "Software Developer",
  ],
};
