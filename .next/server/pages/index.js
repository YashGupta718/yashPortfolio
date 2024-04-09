"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/SEO.tsx




function SEO() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: portfolio/* seoData.author */.hD.author
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: portfolio/* seoData.keywords.join */.hD.keywords.join(", ")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "Index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "./favicon.png"
            })
        ]
    });
}
// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };
/* harmony default export */ const components_SEO = (SEO);

;// CONCATENATED MODULE: ./pages/index.tsx


const Navigation = dynamic_default()(()=>__webpack_require__.e(/* import() */ 581).then(__webpack_require__.bind(__webpack_require__, 581)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/Navigation"
        ]
    }
});
const Greetings = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(471)]).then(__webpack_require__.bind(__webpack_require__, 471)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Greetings"
        ]
    }
});
const Skills = dynamic_default()(()=>__webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(__webpack_require__, 7)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Skills"
        ]
    }
});
const Proficiency = dynamic_default()(()=>__webpack_require__.e(/* import() */ 440).then(__webpack_require__.bind(__webpack_require__, 440)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Proficiency"
        ]
    }
});
const Education = dynamic_default()(()=>__webpack_require__.e(/* import() */ 380).then(__webpack_require__.bind(__webpack_require__, 380)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Education"
        ]
    }
});
const Experience = dynamic_default()(()=>__webpack_require__.e(/* import() */ 949).then(__webpack_require__.bind(__webpack_require__, 949)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Experience"
        ]
    }
});
const Projects = dynamic_default()(()=>__webpack_require__.e(/* import() */ 668).then(__webpack_require__.bind(__webpack_require__, 668)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Projects"
        ]
    }
});
const Feedbacks = dynamic_default()(()=>__webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(__webpack_require__, 85)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Feedbacks"
        ]
    }
});
const GithubProfileCard = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 77)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/GithubProfileCard"
        ]
    }
});


function Home({ githubProfileData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SEO, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Greetings, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Education, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Projects, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Feedbacks, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(GithubProfileCard, {
                ...githubProfileData
            })
        ]
    });
}
// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };
async function getStaticProps() {
    const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then((res)=>res.json());
    return {
        props: {
            githubProfileData
        }
    };
}


/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bv": () => (/* binding */ SkillBars),
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "KK": () => (/* binding */ feedbacks),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "q": () => (/* binding */ projects),
  "hD": () => (/* binding */ seoData),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.ts

const greetings = {
    name: "Yash Gupta",
    title: "Hi all, I'm Yash",
    description: "Passionate B.Tech student deeply committed to continuous learning and innovation. Proven track record in software development, with a keen eye for detail and a belief that learning is the cornerstone of personal and professional growth. Driven by an unwavering commitment to excellence, I thrive on continuous learning, believing it to be the key to personal and professional growth. Seeking opportunities to apply my skills in software development and make a positive impact.",
    resumeLink: "https://drive.google.com/file/d/13Vo0RCSErdZIcO25U5uCq-5SZnBHeOZE/view?usp=drivesdk"
};
const openSource = {
    githubUserName: "YashGupta718"
};
const contact = {};
const socialLinks = {
    email: "mailto:yashmittal709.ym@gmail.com",
    linkedin: "https://www.linkedin.com/in/sdeYashGupta/",
    github: "https://github.com/YashGupta718",
    instagram: "https://www.instagram.com/yasxh.xd"
};
const skillsSection = {
    title: "What I do",
    subTitle: "CONSTANLY CODING, CONTINUOUSLY LEARNING: Crafting innovative solutions one line of code at a time.",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: "/lottie/skills/fullstack.json",
            skills: [
                external_react_easy_emoji_default()("⚡ JavaScript , ReactJs , Redux , TypeScript , Postman , HTML , CSS , Java "),
                external_react_easy_emoji_default()(" C , C++ , Sql , Spring Boot , Git , Github"),
                external_react_easy_emoji_default()("...................................................................."),
                external_react_easy_emoji_default()("In my role as a Software Developer at RS-Infy, I led the development and implementation of an Enterprise Resource Planning system (ERP) for leading e-commerce companies. This experience not only enhanced my frontend development skills but also provided valuable insights into backend architecture and database management."),
                external_react_easy_emoji_default()("...................................................................."),
                external_react_easy_emoji_default()("As a final-year B.Tech student, I bring a wealth of experience in frontend development and an unwavering commitment to expanding my expertise into backend development. "),
                external_react_easy_emoji_default()("...................................................................."),
                external_react_easy_emoji_default()("My journey in software development has been marked by a passion for learning and a dedication to mastering new technologies. I am currently exploring Spring Boot and other backend technologies to broaden my skill set and contribute to full-stack projects.")
            ],
            softwareSkills: [
                {
                    skillName: "JavaScript",
                    iconifyTag: "logos:javascript"
                },
                {
                    skillName: "Reactjs",
                    iconifyTag: "vscode-icons:file-type-reactjs"
                },
                {
                    skillName: "Redux",
                    iconifyTag: "logos:redux"
                },
                {
                    skillName: "TypeScript",
                    iconifyTag: "devicon:typescript"
                },
                {
                    skillName: "Postman",
                    iconifyTag: "vscode-icons:file-type-postman"
                },
                {
                    skillName: "HTML",
                    iconifyTag: "logos:html-5"
                },
                {
                    skillName: "CSS",
                    iconifyTag: "logos:css-3"
                },
                {
                    skillName: "Java",
                    iconifyTag: "devicon:java-wordmark"
                },
                {
                    skillName: "C",
                    iconifyTag: "mdi:language-c"
                },
                {
                    skillName: "Cpp",
                    iconifyTag: "mdi:language-cpp"
                },
                {
                    skillName: "SQL",
                    iconifyTag: "logos:mysql"
                },
                {
                    skillName: "Spring Boot",
                    iconifyTag: "simple-icons:springboot",
                    css: "{color: #6aad3d}"
                },
                {
                    skillName: "Git",
                    iconifyTag: "devicon:git"
                },
                {
                    skillName: "Github",
                    iconifyTag: "devicon:github"
                }
            ]
        }
    ]
};
const SkillBars = [
    {
        Stack: "Frontend/Design",
        progressPercentage: "85"
    },
    {
        Stack: "Backend",
        progressPercentage: "90"
    },
    {
        Stack: "Programming",
        progressPercentage: "95"
    }
];
const educationInfo = [
    {
        schoolName: "Guru Gobind Singh Indraprastha University",
        subHeader: "Bachelor of Technology",
        duration: "July 2020 - June 2024",
        desc: "Electronics and Communication",
        grade: "82.86%",
        descBullets: [
            "Teamwork",
            "Team Leadership",
            "Team Management",
            "Project Management",
            "Problem Solving",
            "Social Influence"
        ]
    },
    {
        schoolName: "St. Xavier's School",
        subHeader: "Senior secondary (XII)",
        duration: "April 2019 - March 2020",
        desc: "Science with specialization in Computers",
        grade: "89.40%",
        descBullets: [
            "Social Intelligence",
            "PSD to HTML",
            "C, C++",
            "Collaborative Problem Solving",
            "SQL",
            "OOPs"
        ]
    },
    {
        schoolName: "St. Xavier's School",
        subHeader: "Secondary (X)",
        duration: "April 2017 - March 2018",
        desc: "",
        grade: "82.40%",
        descBullets: [
            "HTML",
            "CSS",
            "Communication",
            "Microsoft Excell",
            "Microsoft PowerPoint",
            "Microsoft Word"
        ]
    }
];
const experience = [
    {
        role: "Software Developer",
        company: "Rs Infy",
        companyLogo: "/img/icons/common/rs-infy.png",
        date: "June 2022 - April 2023",
        // desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
        desc: "ReactJs, React-Redux, TypeScript, JavaScript, API Integration, Postman, Git, JWT",
        descBullets: [
            "Successfully developed and implemented a highly efficient Enterprise Resource Planning System ERP for leading e-commerce companies, resulting a increase in revenue and decreasing manual errors.",
            "Developed and implemented user-friendly interfaces for web applications using ReactJS, resulting in a 20% improvement in overall user experience. And integrated various APIs with system.",
            "Collaborated with cross-functional teams to gather user requirements and feedback, resulting in the successful implementation of new features and enhancements that improved efficiency."
        ]
    },
    {
        role: "Tech Team Lead",
        company: "CodeChef ADGIPS Chapter",
        companyLogo: "/img/icons/common/gfgLogo.jpg",
        date: "December 2020 - Jan 2023",
        desc: "DSA, Event Management, Team Management, Team Building, SQL, Problem Setter, Netlify, Front-End Design",
        descBullets: [
            "Designed and uploaded problems for DSA Carnival at CodeChef and successfully organized Hackathons like Live the code attracting participation from hundreds of students and securing sponsorships.",
            "Conduct monthly contests like Campus Code focused on Competitive Programming to foster peer development"
        ]
    },
    {
        role: "Campus Ambassador",
        company: "Coding Blocks",
        companyLogo: "/img/icons/common/cbLogo.jpg",
        date: "Feb 2021 - Jul 2022",
        desc: "Marketing, DSA",
        descBullets: [
            "Conduct programming events & workshops to engage and inspire students.",
            "Create a conducive coding environment and encourage students to explore development opportunities during their college years."
        ]
    },
    {
        role: "Campus Ambassador",
        company: "Infosys",
        companyLogo: "/img/icons/common/infosysLogo.jpg",
        date: "July 2021 - Apr 2022",
        desc: "Information Technology, Competitive Programming, JavaScript",
        descBullets: [
            "Conduct programming events & workshops to engage and inspire students.",
            "Create a conducive coding environment and encourage students to explore development opportunities during their college years."
        ]
    }
];
const projects = [
    {
        name: "IMO | International Math Olympiad",
        role: "Freelance Project",
        projectLogo: "/img/icons/common/imoLogo.jpg",
        github: "https://github.com/RS-Infy/imo-student",
        link: "https://imo-india.org/",
        desc: "API Integration \xb7 API Testing \xb7 JSON Web Token (JWT) \xb7 React.js \xb7 Postman \xb7 TypeScript \xb7 Continuous Integration and Continuous Delivery (CI/CD)",
        descBullets: [
            "Developed & implemented interactive Reactjs applications for the Maths Olympiad, enhancing user engagement and improving problem-solving experiences and Integrated various APIs.",
            "Conducted thorough testing and debugging of developed applications to ensure seamless functionality and optimal performance, leading to a significant reduction in user-reported issues.",
            "Collaborated with cross-functional teams to design and develop multiple user-friendly portals, launch new portals, meeting strict deadlines and ensuring a seamless user experience."
        ]
    },
    {
        name: "Urban Karma | E-commerce Website",
        role: "Freelance Project",
        projectLogo: "/img/icons/common/ukarmaLogo.png",
        github: "https://github.com/RS-Infy/urban-fashion",
        link: "https://urbankarmagb.co.uk/",
        desc: " API Integration \xb7 API Testing \xb7 React.js \xb7 Continuous Integration and Continuous Delivery (CI/CD)",
        descBullets: [
            "Successfully developed and launched a highly responsive and visually appealing e-commerce website for Urban Karma, a prominent UK-based fashion company.",
            "Leveraged React.js framework to build a dynamic and interactive frontend, creating an engaging user interface and enhancing the overall user experience.",
            "Implemented effective SEO strategies, for improved website visibility and organic traffic growth for Urban Karma. Tested APIs and further integrated APIs with web app."
        ]
    },
    {
        name: "Black Jack Game",
        role: "",
        projectLogo: "/img/icons/common/bjgameLogo.jpg",
        github: "https://github.com/YashGupta718/BlackJack-Game",
        link: "https://yashgupta718.github.io/BlackJack-Game/",
        desc: "HTML \xb7 CSS \xb7 JavaScript",
        descBullets: [
            "Developed a JavaScript-based Blackjack game with a mix of strategy and luck.",
            " Demonstrated proficiency in JavaScript and CSS through this project. Instructions on how to play are available in my GitHub repository."
        ]
    },
    {
        name: "developer-portfolio",
        desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
        github: "https://github.com/YashGupta718/portfolio",
        link: "https://developer-portfolio-1hanzla100.vercel.app/",
        descBullets: [
            "Developed & implemented interactive Reactjs applications for the Maths Olympiad, enhancing user engagement and improving problem-solving experiences and Integrated various APIs."
        ]
    },
    {
        name: "Kankyo Sensie",
        role: "SIH Hackathon",
        projectLogo: "/img/icons/common/kankyoLogo.jpg",
        github: "https://github.com/YashGupta718/Senshi",
        link: "https://kankyo-senshi.netlify.app/",
        desc: "HTML \xb7 CSS \xb7 JavaScript \xb7 Teamwork"
    },
    {
        name: "Maxwell",
        role: "",
        projectLogo: "/img/icons/common/maxwellLogo.jpg",
        github: "https://github.com/YashGupta718/",
        link: "https://women-health.netlify.app/",
        desc: "HTML \xb7 CSS \xb7 JavaScript \xb7 TeamCoordination \xb7 Bootstrap"
    }
];
const feedbacks = [
    {
        name: "Shagun",
        mail: "mailto:shagun.saboo@rsinfy.com",
        role: "Co-founder at Rs-Infy",
        feedback: "You were a wonderful addition to our team Yash. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. He has contributed to the growth of our organization and continues to do so."
    },
    {
        name: "Rishab Jain",
        role: "Project head at Clapingo",
        feedback: "Yash has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Yash is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Yash for any SD roles, React.js, and I wish him all the best in his future endeavors."
    }
];
// See object prototype on /types/section.ts page
const seoData = {
    title: "Yash Gupta",
    description: greetings.description,
    author: "Yash Gupta",
    image: "https://media.licdn.com/dms/image/D5603AQEWhYlcDQ3F9A/profile-displayphoto-shrink_200_200/0/1709036106053?e=1718236800&v=beta&t=kve76uox-qIQIEZ2ZZqOumtne-NrVIltgQX-B_0yDXw",
    url: "https://sdeyashgupta.vercel.app/",
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
        "Software Developer"
    ]
};


/***/ }),

/***/ 895:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(174)));
module.exports = __webpack_exports__;

})();