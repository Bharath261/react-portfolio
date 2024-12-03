import { PROJECTSDA } from "../constants"
import {motion} from "framer-motion"

const ProjectsDA = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity:1, y:0 }}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">
        Projects
        </motion.h1>
        <div>
            {PROJECTSDA.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                
            <motion.div
                whileInView={{opacity:1, x:0 }}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className="w-full lg:w-1/2 lg:p-8">
                <div
                className="my-4"
                dangerouslySetInnerHTML={{ __html: project.embedCode }}
              />
            </motion.div>

            <motion.div 
                whileInView={{opacity:1, x:0 }}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="w-full lg:w-1/2 lg:p-8">
                <h6 className="mb-2 font-semibold pt-5">{project.title}</h6>
                <p className="mb-4 text-neutral-400 ">{project.description}</p>
                {project.technologies.map((tech, index) => (
                    <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                    {tech}
                    </span>
            ))}
            </motion.div>
            
            
        </div>    
        ))}
        </div>
    </div>
  )
}

export default ProjectsDA