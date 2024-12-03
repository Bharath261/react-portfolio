import {motion} from "framer-motion"
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";
import { SiTableau } from "react-icons/si";
import powerbi from "../assets/power-bi.svg";
import SiMysql from "../assets/mysql-official.svg";
import FaPython from "../assets/python-logo-only.svg";

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

const TechnologiesDA = () => {
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
                    <PiMicrosoftExcelLogoBold className="h-7 w-7 text-green-700"/>
                </motion.div>
                <motion.div 
                 variants={iconVariants(2)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                 <img src={SiMysql} alt="MySQL" className="h-7 w-7" />
                </motion.div>
                <motion.div
                 variants={iconVariants(1.8)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                 <img src={FaPython} alt="Python" className="h-7 w-7" />
                </motion.div>
                <motion.div
                 variants={iconVariants(1.8)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTableau className="h-7 w-7"/>
                </motion.div>
                <motion.div 
                 variants={iconVariants(2.2)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                 <img src={powerbi} alt="Power BI" className="h-7 w-7" />
                </motion.div>
        </motion.div>
    </div>
  )
}

export default TechnologiesDA