import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'
import { fadeIn } from 'apps/app/utils/variants'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Banner() {
  return (
    <div className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="mb-4">
            <motion.h5
              className="mb-4 text-primary"
              variants={fadeIn('up', 0.1)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: false, amount: 0.7 }}
            >
              Hi, I&apos;m
            </motion.h5>
            <motion.h1
              className="mb-4 text-6xl font-bold text-primary"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: false, amount: 0.7 }}
            >
              Nicholas De Leon
            </motion.h1>
            <motion.div
              className="mb-4"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <span className="text-primary">I like</span>
              <TypeAnimation
                sequence={[
                  ' building things',
                  2000,
                  ' playing video games',
                  2000,
                  ' writing code',
                  2000,
                  ' drinking hot chocolate',
                  2000,
                ]}
                speed={50}
                className="font-bold text-secondary"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              className="max-w-lg mb-4 text-primary"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: false, amount: 0.7 }}
            >
              Software engineering enthusiast and developer extraordinaire. I
              have a knack for crafting remarkable digital experiences that
              combine elegant code with intuitive designs. With a passion for
              problem-solving and a touch of creativity, I&apos;m here to create
              software solutions that leave a lasting impact. Let&apos;s embark
              on this exciting journey together!
            </motion.p>
            <motion.div
              className="flex flex-row mb-4 gap-x-2"
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <Link className="rounded-btn" href="#contact">
                Contact
              </Link>
              <button className="rounded-btn">
                <Link href="./resume.pdf" target="_blank">
                  Resumé
                </Link>
              </button>
            </motion.div>
            <motion.div
              className="flex flex-row items-start mb-4 gap-x-4 text-primary"
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <Link href={'mailto:ndianaty@gmail.com'} target="_blank">
                <MdEmail />
              </Link>
              <Link href={'https://github.com/roguedynamite'} target="_blank">
                <BsGithub />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/nicholas-deleon/'}
                target="_blank"
              >
                <BsLinkedin />
              </Link>
            </motion.div>
          </div>
          <motion.img
            className="rounded-full"
            src="./me.jpg"
            alt="me"
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
          />
        </div>
      </div>
    </div>
  )
}
