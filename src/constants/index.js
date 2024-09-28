import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    sulogo,
    dmslogo,
    googlogo,
    sylologo,
    masailogo,
    pwclogo,
    python,
    pytorch,
    pandas,
    bootstrap,
    tensorflow,
    numpy,
    tableau,

  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "certifications",
      title: "Certifications",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Science",
      icon: web,
    },
    {
      title: "Artificial Intelligence",
      icon: mobile,
    },
    {
      title: "Generative AI",
      icon: backend,
    },
    {
      title: "Web Development",
      icon: reactjs,
    },
    {
      title: "Software Development",
      icon: creator,
    },
    {
      title: "IOT",
      icon: backend,
    },
    {
      title: "Cloud Computing",
      icon: mobile,
    },
    {
      title: "More Learning...",
      icon: web
    }
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "NumPy",
      icon: numpy,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    }, // ThreeJS was having trouble with memory with more balls than this so I removed a few.. 
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "Bootstrap",
    //   icon: bootstrap,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
  ];
  
  const experiences = [
    {
      title: "Generative AI",
      company_name: "Syllogistek Systems",
      icon: sylologo,
      iconBg: "#383E56",
      date: "August 2024",
      points: ["Convolutional Neural Network", "Recurrent Neural Network","LSTMs","RAG","Prompt Engineering","Google Gemini"
      ],
    },
    {
      title: "Introduction to Data Analytics",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "September 2024",
      points: ["Introduction to DA","OSEMN Framework","Modelling Data","Data Interpretation","Data Storytelling"
      ],
    },
    {
      title: "Data Analytics | Foundation",
      company_name: "Google",
      icon: googlogo,
      iconBg: "#383E56",
      date: "September 2024",
      points: [
        "Introduction to Data Analytics","Making Data Driven Decisions","Data Storytelling","Basic Visualization"
      ],
    },
    {
      title: "Cloud Launchpad Program",
      company_name: "PWC",
      icon: pwclogo,
      iconBg: "#FFFFFF",
      date: "July 2024",
      points: [
        "Cloud Computing","Java Programming","RDBMS - MYSQ","Responsive Web Design","DevOPS","Computer Fundamentals"
      ],
    },
    {
      title: "Data Science, ML & Deep Learning using Python",
      company_name: "Syllogistek Systems",
      icon: sylologo,
      iconBg: "#383E56",
      date: "August 2023",
      points: [
        "ML, Deep Learning","Python","SciKit Learn, Pandas and Numpy","Data Modelling and visualization"
      ],
    },
    {
      title: "Data Analytics Internship Program",
      company_name: "Masai School",
      icon: masailogo,
      iconBg: "#FFFFFF",
      date: "September 2022",
      points: [
        "Data Analysis","SQL","Tableau","MS-Excel",
      ],
    },
    {
      title: "For More Courses and Certifications",
      company_name: "Visit LinkedIn",
      icon: mobile,
      iconBg: "#383E56",
      // date: "July 2024",
      points: [
        "LinkedIn : ","www.linkedin.com/in/bishnutosh-p"
      ],
    },
  ];

  const educations = [
    {
      date: "2021 - 2025",
      institution_name: "Silicon University",
      degree: "B.Tech in Computer Science and Engineering",
      icon: sulogo,
      iconBg: "#383E56",
      points: [
        "Relevant coursework: Machine Learning, Data Structures.",
        "GPA : 8.47/10"
      ],
    },
    {
      date: "2019 - 2021",
      institution_name: "Demonstration Multipurpose School, BBSR",
      degree: "Senior School (11th - 12th)",
      icon: dmslogo,
      iconBg: "#FFFFFF",
      points: [
        "CBSE : Central Board of Secondary Education",
        "83.4 %",
      ],
    },
    {
      date: "2009 - 2019",
      institution_name: "Demonstration Multipurpose School, BBSR",
      degree: "High School (1st - 10th)",
      icon: dmslogo,
      iconBg: "#FFFFFF",
      points: [
        "CBSE : Central Board of Secondary Education",
        "93%",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, educations };