
import profilePic from "../assets/bharathProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible:{
        x: 0,
        opacity: 1,
        transition: {duration:0.5, delay: delay}
    },
})

const Hero = ({ profile }) => {
  const title = profile === "frontend" ? "Front-End Developer" : "Data Analyst";
  const description =
    profile === "frontend"
      ? "I'm a dedicated front-end developer with a passion for creating engaging and efficient web interfaces. Proficient in HTML, CSS, JavaScript, React.js, Bootstrap and Tailwind, I specialize in designing user-friendly and responsive websites. I bring creativity and strong problem-solving abilities to every project, aiming to deliver smooth and intuitive user experiences. Always eager to learn and innovate, I thrive on building modern, effective solutions."
      : "I’m a skilled Data Analyst focused on turning raw data into clear insights. With expertise in tools like Tableau, Power BI, Excel, and MySQL, I specialize in analyzing trends and creating visualizations that help businesses make smarter, data-driven decisions. I approach each project with a passion for accuracy and clarity, ensuring that complex data is accessible and actionable. My goal is to empower businesses by delivering solutions that drive informed decision-making and sustainable growth.";

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl">
              Bharath Kumar
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              {title}
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {description}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
         
          <div className="flex justify-center lg:justify-end">
            
            <motion.img 
              initial={{x:100, opacity: 0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1, delay:1.2}}
              className="rounded-full max-w-xs lg:max-w-md" 
              src={profilePic}
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
