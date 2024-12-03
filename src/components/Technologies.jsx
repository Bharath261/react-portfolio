import {RiReactjsLine} from "react-icons/ri"
import {TiHtml5 } from "react-icons/ti"
import {FaCss3 } from "react-icons/fa"
import {FaJs } from "react-icons/fa"
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -20],
      transition: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                 variants={iconVariants(1.5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TiHtml5 className="text text-red-400"/>
                </motion.div>
                <motion.div 
                 variants={iconVariants(2)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3 className="text text-blue-400"/>
                </motion.div>
                <motion.div
                 variants={iconVariants(1.8)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJs className="text text-yellow-400"/>
                </motion.div>
                <motion.div 
                 variants={iconVariants(2.2)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text text-cyan-400"/>
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies