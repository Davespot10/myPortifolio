import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  springBoot,
  html,
  css,
  Angular,
  MySql,
  spring,
  nodejs,
  mongodb,
  git,
  aws,
  docker,
  meta,
  Huawie,
  tesla,
  Singtan,
  library,
  question_and_answer,
  to_do,
  House_Rental,
  threejs,
  Kafka,
  apiGatway,
  Hibernate,
  jenkins,
  neo4j,
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
  {
    id: "blog",
    title: "Blog",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Rest API Developer",
    icon: backend,
  },
  {
    title: "Spring and Spring Boot Develoepr",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "Kafka",
  //   icon: Kafka,
  // },
  // {
  //   name: "apiGatway",
  //   icon: apiGatway,
  // },
  {
    name: "Hibernate",
    icon: Hibernate,
  },
  {
    name: "springBoot",
    icon: springBoot,
  },

  {
    name: "jenkins",
    icon: jenkins,
  },
  {
    name: "neo4j",
    icon: neo4j,
  },

  {
    name: "aws",
    icon: aws,
  },

  {
    name: "MySql",
    icon: MySql,
  },
  {
    name: "spring",
    icon: spring,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Angular",
    icon: Angular,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Huawie",
    icon: Huawie,
    iconBg: "#383E56",
    date: "April 2021 - April 2022",
    points: [
      "Develop enterprise-level applications using RESTful web services using java,Spring and Spring Boot.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Changing old modular monolith architecture and monolith architecture into microservice architecture using cross-cutting technologies like Apache threejs, Spring Cloud, Service discovery, Load balancing, Circuit breaking, Monitoring, and logging tools (ELK stack), API gateway, and Distributed tracing (Zipkin).",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Back-End Developer",
    company_name: "SINGITAN ENGINEERING PLC",
    icon: Singtan,
    iconBg: "#E6DEDD",
    date: "March 2017 - April 2021",
    points: [
      "Used AOP and IOC features of Spring framework, and JPA/Hibernate for ORM.",
      "Performed highly efficient back-end programming.",
      "Developed new applications and new functionality for existing applications using J2EE technologies.",
      "Contributed to all phases of the Software Development Life Cycle using Agile/Scrum software development methodology",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dawit did a great job in my Enterprise Applications course in September of 2022. He handed in a nearly perfect midterm and final exam. All in all I found Dawit very easy to work with, he was always punctual and communicated well.",
    name: "Michael Zijlstra",
    designation: "Assistant Professor of Computer Science",
    company: "MIU University",
    image: "https://res.cloudinary.com/diyjdfac9/image/upload/v1679377561/Michael_ezqkiy.png",
  },
  {
    testimonial:
      "Dawit was a graduate student in my class for the course CS572 - Modern Web Applications Programming. He was one of the top students who always finds out of the box solutions. He worked very hard and he earned a top grade. ",
    name: "Assad Saad",
    designation: "Associate Professor of Computer Science",
    company: "MIU University",
    image: "https://res.cloudinary.com/diyjdfac9/image/upload/v1679377561/Assad_e8x8ab.png",
  },
  
];

const projects = [
  {
    name: "Library Management System",
    description:
      "Developed a Java Microservice-based library management system.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Eureka Registry",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Spring Cloud",
        color: "pink-text-gradient",
      },
      {
        name: "Kafka",
        color: "green-text-gradient",
      },
      {
        name: "Zipkin ",
        color: "pink-text-gradient",
      },
      
    ],
    image: library,
  },
  {
    name: "question_and_answer System (Slack) ",
    description:
      "Developed Java Microservice-based system resembling Slack and Stack Overflow.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Spring Cloud",
        color: "pink-text-gradient",
      },
    ],
    image: question_and_answer,
  },
  {
    name: "To-Do Website ",
    description:
      "Created a to-do checklist application allowing users to check and plan the progress of daily activities.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Express Js",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
    ],
    image: to_do,
  },
  {
    name: "House Rental System (Airbnb)",
    description:
      "Created a web app for housing reservations like Airbnb. Enables users to post their home to be rented. Also enables users to reserve a home for rent. Users can give ratings and comments on the home they rent. ",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Hibernate",
        color: "pink-text-gradient",
      },
    ],
    image: House_Rental,
  },
];

export { services, technologies, experiences, testimonials, projects };
