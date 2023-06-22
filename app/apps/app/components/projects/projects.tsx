import { fadeIn } from 'apps/app/utils/variants'
import { ProjectCard } from './project-card'
import { motion } from 'framer-motion'

export function Projects() {
  return (
    <div id="projects" className="section">
      <div className="container mx-auto">
        <div>
          <motion.div
            className="mb-10"
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h5 className="text-sm text-primary">My Work</h5>
            <h1 className="mb-4 text-3xl font-bold text-primary">Projects</h1>
            <p className="text-primary">
              Welcome to the Project Showcase! In this section, I am thrilled to
              present a collection of my most impactful software engineering
              projects. As a passionate and dedicated software engineer, I have
              poured my creativity and expertise into developing innovative
              solutions that tackle real-world challenges. From elegant web
              applications to robust backend systems, each project embodies my
              commitment to excellence and my relentless pursuit of pushing the
              boundaries of technology. Take a moment to explore this portfolio
              and witness the power of code in action.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-4 lg:grid-cols-3"
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.4 }}
          >
            <ProjectCard
              animationDelay={0.2}
              title="Bearchat"
              projectUrl="https://github.com/BearCloud/sp21-bearchat-starter"
              description="A social media platform built from microservices in Go and MySQL."
              imgSrc="./bearchat.png"
              imgAlt="bearchat"
              tags={['swe', 'berkeley', 'microservices']}
            />
            <ProjectCard
              animationDelay={0.4}
              title="Justine"
              projectUrl="https://github.com/RogueDynamite/Justine"
              description="A Discord bot built from the ground up in Typescript and deployed using functions as a service."
              imgSrc="./justine.png"
              imgAlt="justine"
              tags={['discord', 'bot', 'automation']}
            />
            <ProjectCard
              animationDelay={0.6}
              title="Banana Pie"
              projectUrl="https://github.com/RogueDynamite/Banana-Pie"
              description="A simple Discord bot that posts a picture of a pie when the bp!pie command is invoked."
              imgSrc="./pie.png"
              imgAlt="pie"
              tags={['discord', 'bot', 'pie']}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
