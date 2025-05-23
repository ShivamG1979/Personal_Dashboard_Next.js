const personalData = {
  profile: {
    name: "Shivam Gupta",
    title: "Full Stack Web Developer",
    bio: "Passionate about creating intuitive, responsive, and accessible web applications. I love solving complex problems and turning innovative ideas into reality through clean and efficient code. Currently pursuing my degree in Computer Science while working on freelance web development projects.",
    image: "/profile.jpg",
    contact: {
      email: "shivam@example.com",
      phone: "+91 9907714067",
      location: "Indore, Madhya Pradesh, India",
      github: "shivam1504",
      linkedin: "shivam1504"
    }
  },
  
  academics: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2022 - Present",
      description: "Focusing on software engineering, algorithm design, and web technologies. Current GPA: 3.8/4.0.",
      achievements: [
        "Dean's List for Academic Excellence (2022-2023)",
        "Won 1st place in University Hackathon (2023)"
      ]
    },
    {
      degree: "Associate Degree in Web Development",
      institution: "Community College of Design",
      year: "2020 - 2022",
      description: "Completed specialized courses in front-end and back-end web development technologies.",
      achievements: [
        "Graduated with Distinction",
        "Best Student Project Award"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Westside High School",
      year: "2016 - 2020",
      description: "Graduated with honors. Participated in science and coding clubs."
    }
  ],
  
  skills: [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "UI/UX Design", level: "Basic" },
    { name: "Python", level: "Basic" },
    { name: "Java", level: "Basic" },
    { name: "Docker", level: "Basic" }
  ],
  
  projects: [
    {
      title: "E-commerce Platform",
      description: "A fully functional e-commerce website with product listings, shopping cart, user authentication, and payment integration.",
      image: "/images/E-commerce Platform.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      demoUrl: "https://ecommerce-demo.example.com",
      githubUrl: "https://github.com/shivam1504/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop task management application with features like task categories, due dates, and team collaboration.",
      image: "/images/Task Management App.webp",
      technologies: ["React", "Firebase", "Material UI", "React DnD"],
      demoUrl: "https://taskapp-demo.example.com",
      githubUrl: "https://github.com/shivam1504/task-management-app"
    },
    {
      title: "Weather Dashboard",
      description: "A weather forecast application that displays current weather conditions and 5-day forecasts for any location worldwide.",
      image: "/images/Weather Dashboard.webp",
      technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
      demoUrl: "https://weather-app.example.com",
      githubUrl: "https://github.com/shivam1504/weather-dashboard"
    },
    {
      title: "Personal Finance Tracker",
      description: "An application to track income, expenses, and generate monthly reports with visualizations.",
      image: "/images/Personal Finance Tracker.jpg",
      technologies: ["Next.js", "Chart.js", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://finance-tracker.example.com",
      githubUrl: "https://github.com/shivam1504/finance-tracker"
    }
  ],
  
  achievements: [
    {
      title: "Web Development Certification",
      year: "2023",
      description: "Completed an advanced web development certification covering modern frontend frameworks and backend technologies.",
      url: "https://certification.example.com/web-dev"
    },
    {
      title: "Hackathon Winner",
      year: "2023",
      description: "Won first place in the University Tech Hackathon for developing an innovative accessibility tool for visually impaired users."
    },
    {
      title: "Google Cloud Certification",
      year: "2022",
      description: "Earned Google Cloud Developer Certification after completing a comprehensive course on cloud architecture and deployment.",
      url: "https://certification.example.com/google-cloud"
    },
    {
      title: "Outstanding Student Award",
      year: "2022",
      description: "Recognized for academic excellence and contribution to the computer science department projects."
    }
  ],
  
  hobbies: [
    {
      name: "Photography",
      description: "Capturing beautiful landscapes and urban environments. My work has been featured in local exhibitions."
    },
    {
      name: "Reading",
      description: "Science fiction, technology books, and biographies. Currently reading 'Clean Code' by Robert C. Martin."
    },
    {
      name: "Hiking",
      description: "Exploring nature trails and mountains on weekends. Completed the Himalayan Base Camp trek in 2022."
    },
    {
      name: "Playing Guitar",
      description: "Self-taught guitarist focusing on acoustic music. Perform occasionally at local open mic events."
    },
    {
      name: "Cooking",
      description: "Experimenting with international cuisines and baking. Specialized in Italian and Mediterranean recipes."
    }
  ]
};

export default personalData;