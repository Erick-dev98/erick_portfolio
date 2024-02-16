import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    swahilibox,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Designer",
      icon: mobile,
    },
    {
      title: "Article Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "SwahiliBox",
      icon: swahilibox,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Developed user interface components using React.js, focusing on state management and component lifecycle methods.",
        "Translated design mockups into responsive web pages, ensuring consistency across devices.",
        "Integrated third-party APIs and libraries to enhance application functionality.",
        "Implemented Redux or Context API for efficient state management in complex applications.",
      ],
    },
    {
      title: "Node.js Developer",
      company_name: "SwahiliBox",
      icon: swahilibox,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developed scalable and efficient server-side applications using Node.js, leveraging its asynchronous and event-driven architecture.",
        "Designed and implemented RESTful APIs for seamless communication between client-side and server-side components, adhering to best practices and standards.",
        "Utilized Express.js framework to streamline the development process and create robust web applications with minimal boilerplate code.",
        "Integrated MongoDB or other databases with Node.js applications for efficient data storage and retrieval, ensuring data consistency and integrity.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "SwahiliBox",
      icon: swahilibox,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Developed responsive and user-friendly websites using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and accessibility standards compliance.",
        "Utilized modern front-end frameworks like React.js to create interactive and dynamic user interfaces, enhancing user engagement and experience.",
        "Integrated backend technologies such as Node.js to build full-stack web applications, ensuring seamless communication between frontend and backend components.",
        "Designed and optimized web applications for performance, implementing techniques such as code splitting, lazy loading, and image optimization to improve loading times and runtime efficiency.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "SwahiliBox",
      icon: swahilibox,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Developed end-to-end web applications using a combination of front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, Node.js, and Express.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participated in Agile development methodologies, including sprint planning, daily stand-ups, and retrospectives, to deliver features iteratively and efficiently, ensuring timely delivery of high-quality software products.",
        "Stayed updated with the latest technologies and best practices in full-stack development, continuously learning and improving skills to deliver cutting-edge solutions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Their ability to grasp complex requirements and translate them into elegant solutions was truly impressive.",
      name: "Festus",
      designation: "Colleague",
      company: "Swahilibox",
      image: "",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Erick does.",
      name: "Kelyn",
      designation: "Business Lady",
      company: "Blue Economy",
      image: "",
    },
    {
      testimonial:
        "After Erick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Everlyne",
      designation: "Business Lady",
      company: "Eve Enterprises",
      image: "",
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
  
  export { services, technologies, experiences, testimonials, projects };