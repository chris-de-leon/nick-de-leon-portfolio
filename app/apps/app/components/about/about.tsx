import { AboutCard, AboutCardProps } from './about-card'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { fadeIn } from 'apps/app/utils/variants'
import { BsCodeSlash } from 'react-icons/bs'
import { GiGamepad } from 'react-icons/gi'
import { TfiWrite } from 'react-icons/tfi'
import { motion } from 'framer-motion'

const CONTENT: ReadonlyArray<AboutCardProps> = [
  {
    animationDelay: 0.2,
    title: 'Tutoring',
    icon: {
      elem: <FaChalkboardTeacher />,
      url: 'https://www.linkedin.com/in/nicholas-deleon/',
    },
  },
  {
    animationDelay: 0.4,
    title: 'Blogging',
    icon: {
      elem: <TfiWrite />,
      url: 'https://nicholasdeleon.netlify.app/post/shawshank-redemption-review/',
    },
  },
  {
    animationDelay: 0.6,
    title: 'Gaming',
    icon: {
      elem: <GiGamepad />,
      url: 'https://steamcommunity.com/id/roguedynamite/',
    },
  },
  {
    animationDelay: 0.8,
    title: 'Coding',
    icon: {
      elem: <BsCodeSlash />,
      url: 'https://leetcode.com/RogueDynamite/',
    },
  },
]

export function About() {
  return (
    <div id="about" className="section">
      <div className="container mx-auto">
        <div className="lg:mb-10">
          <motion.div
            className="mb-10"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h5 className="text-sm text-primary">Introduction</h5>
            <h1 className="mb-4 text-3xl font-bold text-primary">About Me</h1>
            <p className="text-primary">
              I&apos;m a recently graduated Computer Science student. My main
              academic passions are developing programs that do incredibly cool
              things and learning how to do math that enables people to solve
              interesting problems. I&apos;m currently learning about
              distributed systems and real analysis.
            </p>
          </motion.div>
          <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:justify-between">
            {CONTENT.map((c, i) => {
              return <AboutCard key={i} {...c} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
