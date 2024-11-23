import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I’m a pre-final year student and web developer pursuing a B.Tech from IET Lucknow. Proficient in React, Next.js, Node.js, and MongoDB, I specialize in crafting innovative solutions that enhance user experiences and drive business growth. With skills in C++, Java, JavaScript, HTML5, CSS3, Bootstrap 5, and Express.js, I offer a well-rounded approach to web development, covering both front-end design and back-end functionality.`;

export const ABOUT_TEXT = `I am a passionate Web developer. My expertise spans both front-end and back-end technologies, including React, Next.js, Node.js and MongoDB. I am proficient in C++, Java, and JavaScript, and skilled in HTML5, CSS3, and React JS. I have experience with frameworks like Bootstrap 5 and Express JS, and am knowledgeable in NoSQL databases, particularly MongoDB. Additionally, I am competent in using Git for version control and have a strong understanding of data structures, with extensive experience as a MERN stack developer. My goal is to leverage my skills to create innovative solutions that drive business growth and deliver exceptional user experiences.







`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Rick & Morty Wiki",
    image: project1,
    link: "https://rick-n-mortycharacter.netlify.app/",
    description:
      "This app is designed to help users explore and discover their favorite characters from a vast collection of over 800 characters. It comes with a user-friendly search bar that allows quick and easy searches for specific characters by name. To make navigating through such a large collection manageable, the app implements a pagination system that displays 20 characters per page, ensuring a smooth browsing experience.the app also features advanced filters that allow users to refine their search results based on various criteria, such as character traits or other labels provided by the API.",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Node.js"],
  },
  {
    title: "Yelp Camp App",
    image: project2,
    description:
      "This application is a comprehensive solution for managing and hosting campgrounds, offering a range of features designed to enhance the user experience and streamline the process of camp management.The user interface is built using HTML5, CSS3, and Bootstrap 5, ensuring that the application is not only visually appealing but also responsive across different devices. This means users can easily navigate and interact with the app whether they are on a desktop, tablet, or mobile device.The back-end is developed using JavaScript and the Express.js framework, which provides the necessary functionality for full CRUD (Create, Read, Update, Delete) operations.The app uses MongoDB, a NoSQL database, for storing campground data. Mongoose is utilized for schema design and managing data relationships, ensuring that the data is well-organized and easily accessible.",
    technologies: ["HTML", "CSS", "Bootstrap", "Expess", "Node.js", "Mongodb"],
  },
  {
    title: "To-do's List",
    image: project3,
    link: "https://simple-todo-listreact.netlify.app/",
    description:
      "This React-based to-do list app allows users to manage their daily tasks efficiently. Users can add, delete, and mark tasks as completed. The app stores tasks in the browser's local storage, ensuring they persist across sessions. Additionally, the app displays the current date and time, providing a complete overview of the day's activities. With a clean and responsive interface, this to-do list app is a practical tool for staying organized.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Pricing Platform",
    image: project4,
    description:
      "This dynamic pricing platform is designed to showcase various subscription plans using Bootstrap, providing a responsive and visually appealing layout. The platform allows users to compare different pricing tiers, each with its own set of features and benefits. With Bootstrap’s grid system and pre-built components, the plans are displayed in a clean, organized manner, ensuring an optimal viewing experience across all devices.",
    technologies: ["HTML", "CSS3", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Varanasi, UttarPradesh, India",
  phoneNo: "+918299639374",
  email: "arihant.singh9703@gmail.com",
};
