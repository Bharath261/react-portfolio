import aboutImg from "../assets/about.jpg"
import {motion} from "framer-motion"

const About = ({ profile }) => {
  const description =
    profile === "frontend"
      ? "I'm Bharath Kumar, a passionate front-end developer specializing in building responsive, user-friendly websites. With expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I bring creativity and technical skill to every project. My goal is to craft intuitive and engaging web interfaces that elevate user experiences. Always eager to learn and innovate, I thrive on creating clean, efficient solutions to modern web challenges. Let's build something amazing together!"
      : "As a Data Analyst, I combine technical skills with a passion for storytelling through data. Experienced in using MySQL, Power BI, Tableau,Excel and Python, I transform large datasets into valuable insights that inform strategic decisions. Whether it’s visualizing trends or solving complex business challenges, I’m committed to delivering actionable, data-driven solutions. Continuously learning and adapting, I focus on enhancing my analytical expertise to provide businesses with the clarity they need to stay ahead in a competitive market.";

  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h1>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity: 1, x:0 }}
                initial={{opacity:0, x: -100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <img className="rounded-2xl" src={aboutImg} alt="About Image" /> 
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x:0 }}
            initial={{opacity:0, x: 100}}
            transition={{duration:0.5}}
             className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{description}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About;