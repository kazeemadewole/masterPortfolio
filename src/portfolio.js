/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kazeem Adewole Portfolio",
  description:
    "As a software engineer with over 5 years of experience, I am dedicated to delivering scalable solutions that drive rapid growth for companies. My expertise lies in developing high-performance software systems and providing innovative financial services using Event-Driven Architecture",
  og: {
    title: "Kazeem Adewole Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Kazeem Adewole",
  logo_name: "KazeemAdewole",
  nickname: "Kazeem",
  subTitle:
    "As a software engineer with over 5 years of experience, I am dedicated to delivering scalable solutions that drive rapid growth for companies. My expertise lies in developing high-performance software systems and providing innovative financial services using Event-Driven Architecture",
  resumeLink:
    "https://docs.google.com/document/d/1nVCoGjWuRQyuYzzgnfsu04r_ai4NKr1r0hFFLzA4xgo",
  portfolio_repository: "https://github.com/kazeemadewole/masterPortfolio",
  githubProfile: "https://github.com/kazeemadewole",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/kazeemadewole",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adewoleadebayo/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:adebayoadewole858@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building high scalable application",
        "⚡ Creating application backend in Node, Express, Nest, ExpressWebJs, FoalTs",
      ],
      softwareSkills: [
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ladoke Akintola University of Technology, Ogbomosho, Oyo State",
      subtitle: "B.Tech. in Mechanical Engineering",
      logo_path: "lautech_logo.png",
      alt_name: "lautech",
      duration: "2008 - 2013",
      descriptions: [
        "⚡ I have studied basic Mechanical engineering subjects like Engineering Design, Fluid Mechanism, Systems, measurements, and controls etc.",
      ],
      website_link: "https://lautech.edu.ng/",
    },
    {
      title: "Udacity",
      subtitle:
        "ALX-T Full Stack Developer Nanodegree Program, Computer Software Engineering",
      logo_path: "udacity_logo.png",
      alt_name: "Udacity",
      duration: "2020",
      descriptions: [
        "⚡ I have taken varity of courses related to computer software engineering concepts like data structure, system design, programming language in python",
        "⚡ Apart from this, I have also learn and work with AWS compute services",
      ],
      website_link:
        "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044?utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=12948014301_c_individuals&utm_term=127442641891&utm_keyword=full+stack+udacity_e",
    },
    {
      title: "Decagon",
      subtitle: "Software Engineering and Leadership Training Program",
      logo_path: "decagon.png",
      alt_name: "Decagon",
      duration: "2021",
      descriptions: [
        "⚡ I have taken varity of courses related to computer software engineering concepts like data structure, system design, programming language in nodejs, algorithm, architectural design",
        "⚡ Apart from this, I also collaborated with team members to build different projects ",
      ],
      website_link: "https://decagon.institute/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Scrum Fundamentals Certified (SFC)",
      subtitle: "- SCRUMstudy",
      logo_path: "scrum.png",
      certificate_link:
        "https://www.scrumstudy.com/certification/verify?type=SFC&number=833455",
      alt_name: "SCRUMstudy",
      color_code: "#8C151599",
    },
    {
      title: "The complete Node.js Developer course",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-603f5f82-61f6-42dd-97c2-c3a7cf7cda95/",
      alt_name: "udemy.com",
      color_code: "#00000099",
    },
    {
      title: "ALX-T Full Stack Developer Nanodegree Program",
      subtitle: "- Udacity",
      logo_path: "udacity_logo.png",
      certificate_link: "https://confirm.udacity.com/J5XDKMLZ",
      alt_name: "Udacity",
      color_code: "#0C9D5899",
    },
    {
      title: "Migrating from REST to GraphQL",
      subtitle: "- LinkedIn",
      logo_path: "linkedln.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/f33de72b1eed7ed6dc3175900c0a8b09d39fb28a8621450f2fb097c17098eba5",
      alt_name: "LinkedIn",
      color_code: "#1F70C199",
    },
    {
      title: "Learning Infrastructure for Developers",
      subtitle: "- LinkedIn",
      logo_path: "linkedln.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/e1a29fc83d9d765b2f38e055271b6b851677215ba01b88fa99fe1220c1db7749",
      alt_name: "LinkedIn",
      color_code: "#D83B0199",
    },
    {
      title: "Amazon EC2 Fundamentals",
      subtitle: "- LinkedIn",
      logo_path: "linkedln.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/95d30cdeeea72462cc5ea4be9638af3fe81c27a1e845d1d2049411acf1da871e",
      alt_name: "LinkedIn",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Metro Africa Express (MAX)",
          company_url: "https://max.ng",
          logo_path: "max_logo.svg",
          duration: "August 2021 - Present",
          location: "Lagos, Nigeria",
          description:
            "I worked on driver onboarding and vehicle activation of drivers, the projects involves automating driver onboarding and creating contracts for the drivers. I am currently working on a wealth creation platform doubling as a payment platform as well where payment transaction can be done and wealth generation features inclusive",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Decagon",
          company_url: "https://decagonhq.com/",
          logo_path: "decagon.png",
          duration: "Jan 2021 - Aug 2021",
          location: "Lagos, Nigeria",
          description:
            "Engaged in collaborative efforts with team members to develop a project tailored to meet specific client requirements while demonstrating proficiency in employing unit and integration tests to ensure code quality",
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "Lafrique Technologies",
          company_url: "",
          logo_path: "no_logo.jpeg",
          duration: "Nov 2018 - Dec 2020",
          location: "Lagos, Nigeria",
          description:
            "I worked on client project, decompose monolithic applications into different microservices",
          color: "#9b1578",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mentorship",
          company: "Metro Africa Express",
          company_url: "https://max.ng",
          logo_path: "max_logo.svg",
          duration: "Jan 2023 - Present",
          location: "Lagos, Nigeria",
          description:
            "I conduct daily/weekly meetings with each intern to review their progress, address any challenges, and provide guidance. I also assign interns to projects that align with their interest and development goals, allowing them to contribute meaningfully to the team. ",
          color: "#4285F4",
        },
        {
          title: "Tutor",
          company: "Schools",
          company_url: "",
          logo_path: "no_logo.jpeg",
          duration: "Jan 2023 - Present",
          location: "Lagos, Nigeria",
          description:
            "I involve school-age children in the educational process of acquiring coding skills that will be beneficial for them.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kazeem_adewole.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with creating scalable backend applications in Nodejs.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "16, Yaro Street, Ashipa, Ayobo Lagos",
    locality: "Ayobo",
    country: "NG",
    region: "Lagos",
    postalCode: "385520",
    streetAddress: "Yaro Steet",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
