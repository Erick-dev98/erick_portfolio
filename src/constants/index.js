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
    commerce,
    drummachine
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
      title: "Web Designer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
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
      title: "Frontend Libraries",
      company_name: "SwahiliBox",
      icon: swahilibox,
      iconBg: "#383E56",
      date: "2024 - Present",
      points: [
        "Developed user interface components using ReactJs, Redux, NextJs, threeJs, Redux, Tailwind.css and Bootstrap focusing on state management and component lifecycle methods.",
        "Translated design mockups into responsive web pages, ensuring consistency across devices.",
        "Integrated third-party APIs and libraries to enhance application functionality.",
        "Implemented Redux or Context API for efficient state management in complex applications.",
      ],
    },
    {
      title: "Backend Frameworks",
      company_name: "SwahiliBox",
      icon: swahilibox,
      iconBg: "#E6DEDD",
      date: "2024 - Present",
      points: [
        "Developed scalable and efficient server-side applications using Node.js, leveraging its asynchronous and event-driven architecture.",
        "Designed and implemented RESTful APIs for seamless communication between client-side and server-side components, adhering to best practices and standards.",
        "Utilized Express.js framework to streamline the development process and create robust web applications with minimal boilerplate code.",
        "Integrated MongoDB and other databases like Firebase with Node.js applications for efficient data storage and retrieval, ensuring data consistency and integrity.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "SwahiliBox",
      icon: swahilibox,
      iconBg: "#383E56",
      date: "2024 - Present",
      points: [
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
      date: "2024 - Present",
      points: [
        "Developed end-to-end web applications using a combination of front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, Node.js, and Express.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participated in Agile development methodologies, including sprint planning, daily stand-ups, and retrospectives, to deliver features iteratively and efficiently, ensuring timely delivery of high-quality software products.",
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
      name: "E-Commerce",
      description:
        "Web-based platform that facilitates the sale of gender-neutral clothing and home collections, offering users a comprehensive e-commerce experience for their fashion and household needs.",
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
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: commerce,
      source_code_link: "https://github.com/Erick-dev98/ecommerce-frontend",
      project_link: "https://ecommerce-frontend-one-virid.vercel.app/",
    },
    {
      name: "Drum Machine",
      description:
        "This app boasts a sleek interface housing a versatile drum machine equipped with multiple drum pads. Each pad comes alive with its unique sound, perfectly synchronized with your taps.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "orange-text-gradient",
        },        
      ],
      image: drummachine,
      source_code_link: "https://github.com/Erick-dev98/drum_machine",
      project_link: "https://drum-machine-murex-gamma.vercel.app/",
    },
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };