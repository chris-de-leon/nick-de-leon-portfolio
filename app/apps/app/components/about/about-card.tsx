import { fadeIn } from 'apps/app/utils/variants'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import Link from 'next/link'

export interface AboutCardProps {
  readonly animationDelay: number
  readonly title: string
  readonly icon: {
    readonly elem: JSX.Element
    readonly url: string
  }
}

export function AboutCard(props: AboutCardProps) {
  return (
    <Tilt>
      <Link href={props.icon.url} target="_blank">
        <motion.div
          className="shadow-md bg-secondary rounded-xl"
          variants={fadeIn('right', props.animationDelay)}
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex flex-col items-center p-10 gap-y-6 text-primary">
            <div className="text-4xl">{props.icon.elem}</div>
            <h1 className="w-24 max-w-xs text-xl font-bold text-center">
              {props.title}
            </h1>
          </div>
        </motion.div>
      </Link>
    </Tilt>
  )
}
