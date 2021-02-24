/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harshil's Portfolio",
  description:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Harshil Kothari Portfolio",
    type: "website",
    url: "http://harshilkothari.com/",
  },
};

//Home Page
const greeting = {
  title: "Harshil Kothari",
  logo_name: "harshil kothari",
  nickname: "",
  subTitle:
    "A passionate individual thriving to reduce the bridge between Human and Information Technology",
  resumeLink:
    "https://drive.google.com/file/d/1Cmic728ttWfMrro6yqJWfrXI-GxzUzkh/view?usp=sharing",
  portfolio_repository: "https://github.com/hjk1995/personalPortfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/hjk1995",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshil-kothari",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:harshilkothari1995@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/harshilism",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Quora",
    link: "https://www.quora.com/Harshil-Kothari-6/",
    fontAwesomeIcon: "fa-quora", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#b92b27", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/harshilism/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building Web application using multiple technologies to withstand complex architectures and features",
        "⚡ Developing Frontend using Angular, React",
        "⚡ Building Backend in Node, Express, Sails, Flask and Django",
        "⚡ Combine and Implement complex design pattern to deliver efficient results",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
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
          skillName: "Webpack",
          fontAwesomeClassname: "logos:webpack",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Sails",
          fontAwesomeClassname: "logos:sails",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "logos:express",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular-icon",
          style: {
            // backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#339933",
          },
        },
      ],
    },

    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing AI as a service applications",
        "⚡ Experience of working with Computer Vision and NLP",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
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
        "⚡ Developing Customization Scripts on Kubernetes and Helm to customize application deployment",
        "⚡ Setting up syncing jobs from DB to Another DB",
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
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MariaDB",
          fontAwesomeClassname: "logos-mariadb",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Elastic Search",
          fontAwesomeClassname: "logos-elasticsearch",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos-redis",
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
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "simple-icons:helm",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Media Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing attractives logos and other medias for application User Interface",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Designing banners for marketing campaign",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "vscode-icons:file-type-photoshop2",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Premiere Pro",
          fontAwesomeClassname: "file-icons:adobe-premiere",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
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
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/harshilkothari11",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/hjk1995",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@harshilkothari1995",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/harshilkothari",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Windsor",
      subtitle: "Masters of Applied Computing, Artificial Intelligence",
      logo_path: "uwindsor.png",
      alt_name: "University of Windsor",
      duration: "2019 - 2021",
      gpa: 3.9,
      descriptions: [
        "⚡ I have studied Advanced Database Topics, Advanced Computing Concepts, Advanced Systems Programming, Advanced Networking Concepts",
        "⚡ I have studied major elective subjects in Artificial Intelligence",
        "⚡ I was selected as coordinator for WinHacks coding competetion",
      ],
      website_link: "http://uwindsor.ca",
    },
    {
      title: "Uka Tarsadia University",
      subtitle: "Bachelors of Technology, Information Technology",
      logo_path: "utu.png",
      alt_name: "Uka Tarsadia University",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Studied concepts of OOP, Data Structures, Algorithm Analysis, Artificial Intelligence, NLP, Compiler Design",
        "⚡ Secured 3rd rank in academic year of 2013-14",
        "⚡ Organized TechFest and Cultural Fest for consecutive 3 years",
        "⚡ Recieved Letter Head from Director twice for organizing fest and conducting workshop",
      ],
      website_link: "http://utu.ac.in",
    },
  ],
};

const certifications = {
  certifications: [],
  // certifications: [
  //   {
  //     title: "Machine Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "stanford_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
  //     alt_name: "Stanford University",
  //     color_code: "#8C151599",
  //   },
  //   {
  //     title: "Deep Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "Data Science",
  //     subtitle: "- Alex Aklson",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Big Data",
  //     subtitle: "- Kim Akers",
  //     logo_path: "microsoft_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
  //     alt_name: "Microsoft",
  //     color_code: "#D83B0199",
  //   },
  //   {
  //     title: "Advanced Data Science",
  //     subtitle: "- Romeo Kienzler",
  //     logo_path: "ibm_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Advanced ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "DL on Tensorflow",
  //     subtitle: "- Laurence Moroney",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "Fullstack Development",
  //     subtitle: "- Jogesh Muppala",
  //     logo_path: "coursera_logo.png",
  //     certificate_link:
  //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
  //     alt_name: "Coursera",
  //     color_code: "#2A73CC",
  //   },
  //   {
  //     title: "Kuberenetes on GCP",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  //   {
  //     title: "Cryptography",
  //     subtitle: "- Saurabh Mukhopadhyay",
  //     logo_path: "nptel_logo.png",
  //     certificate_link:
  //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
  //     alt_name: "NPTEL",
  //     color_code: "#FFBB0099",
  //   },
  //   {
  //     title: "Cloud Architecture",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link:
  //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  // ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience and Volunteership",
  description:
    "I have worked with many clients while working as Freelancer. This client project includes project development in Ecommerce domain, Billin domain and many other systems. I started working in startup company as Software Developer. Other than this, I love managing and organising events and also love managing projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Security Software Developer ",
          company: "Nokia",
          company_url: "https://nokia.com/",
          logo_path: "nokia.png",
          duration: "Sept 2020 - Apr 2021",
          location: "Ottawa, Canada",
          descriptions: [
            "Technology: Helm, Kubernetes, Docker, Keycloak, Centos Linux, Java, Shell Scripting, Mariadb, Nginx, SSL, Wildfly, JIRA",
            "⚡ Implemented new features to support automation of data and deployment process",
            "⚡ Developed new logger extension as wrapper extension for Keycloak",
            "⚡ Developed scripts for Helm deployment and Widlfly server to support customization feature",
            "⚡ Communicated with Customer to help them solve their issues and bugs they have reported.",
          ],
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "ScrumStart",
          company_url:
            "https://www.linkedin.com/company/scrumstart/?originalSubdomain=in",
          logo_path: "scrumstart.png",
          duration: "June 2017 - Aug 2019",
          location: "Pune, Maharashtra",
          descriptions: [
            "1) Serenaway :",
            "https://app.serenaway.com",
            "Overview: Serena way is an application build specially for getting customer experience on the basis of the Survey they received.",
            "Tech- Stacks: AngularJS, NodeJS(Express), MongoDB",
            "Roles and Responsibilities:",
            "⚡ Developed 'Take Snapshot' feature using Javascript and it was mobile-friendly",
            "⚡ Developed Validation scripts and Frontend scripts for Multilanguage feature for SurveyJs Editor",
            "2) Hirest:",
            "https://app.hirest.net",
            "Overview: Hirest is an application which helps the user to hire a candidate through Campus Drive,",
            "Consultancy, and General Application. Its main motive is to hire the best.",
            "Tech- Stacks: Angular4, NodeJS, MongoDB",
            "Responsibilities:",
            "⚡ Worked as Full Stack Developer",
            "⚡ Developed Nunjucks APIs for generating Offer-Letter and Report in Hirest",
            "⚡ Used LDAP for User authentication",
            "3) Phoneix Work-Force Application:",
            "https://ss-twg.co.nz",
            "Overview: Phoneix is an application of The Warehouse Group from New Zealand which is about managing sales data, a workforce of the branch, and its stores situated all around the world.",
            "Tech- Stacks: Angular6, Spring Boot, POSTGRESQL",
            "Responsibilities:",
            "⚡ Worked as Full Stack Developer",
            "⚡ Implemented Okta Authentication in application",
            "⚡ Used Okta for User authentication with Multi-Factor Authentication",
            "4) SRK One :",
            "https://next.srk.one",
            "Overview: SRK One is an eCommerce web application that sells diamonds and gemstones online with respect to different events based on Searching of stones and Views Request of stones.",
            "Tech- Stacks: Angular7, NodeJS, MongoDB. REDIS, SQL Server, ElasticStack",
            "Responsibilities:",
            "⚡ Worked as Backend Developer",
            "⚡ Developed Global Search API using Elastic Search",
            "⚡ Implemented Combined Design Patterns of Command, Chain of Responsibility and Decorator pattern",
            "⚡ Developed Push-Notification Framework using SQL, Crons, REDIS, Node, and FCM",
            "⚡ Developed Python Scripts and developed pooling of connection in SQL Server",
          ],
          color: "#9b1578",
        },
        {
          title: "Software Developer",
          company: "Freelance",
          company_url: "",
          logo_path: "freelancer.png",
          duration: "Sept 2019 - Apr 2020",
          location: "Windsor, Canada",
          descriptions: [
            "Technology: AWS, PHP, Node, MongoDB, Digital Ocean, Docker, Nginx",
            "⚡ Worked as Freelancer and working on local projects from India",
          ],
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "SciClone Organizer",
          company: "UTU",
          company_url: "https://utu.ac.on/",
          logo_path: "utu.png",
          duration: "Feb 2015 - Feb 2017",
          location: "Bardoli, India",
          descriptions: [
            "⚡ Organized TechFest and took the responsilbity of IT head",
          ],
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Projects developed with multiple technologies as main ingredients in the dish and deploying them to Cloud Infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactHarshil.png",
    description:
      "I am open to any opportunities including Backend, Frontend, ML, AI and Infrastructure. You can contact me anytime to discuss about new opportunities",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://HarshilKothari.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Toronto, Ontario, Canada",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 4379874353",
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
  contactPageData,
};
