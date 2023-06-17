/* eslint-disable @next/next/no-img-element */
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

const CONTENT = [
  {
    description:
      'As a software engineer at Rubrik, I had the invaluable opportunity to work on cutting-edge software solutions in the field of data security. Collaborating with a talented team, I contributed to designing and implementing secure data backup and recovery mechanisms, developing encryption techniques, and optimizing software performance.',
    jobTitle: 'Software Engineer',
    company: 'Rubrik',
    date: 'Aug 2021 - present',
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          className="object-contain w-[60%] h-[60%]"
          src="./rubrik.png"
          alt="rubrik"
        />
      </div>
    ),
  },
  {
    description:
      'As a computer science tutor at Tutor.com, I had the privilege of guiding students in their computer science journey. Through personalized tutoring sessions, I provided assistance in various computer science topics, including programming languages, algorithms, data structures, and software development.',
    jobTitle: 'Academic Tutor',
    company: 'Tutor.com',
    date: 'Jun 2018 - Oct 2022',
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          className="object-contain w-[60%] h-[60%]"
          src="./tutor.png"
          alt="rubrik"
        />
      </div>
    ),
  },
  {
    description:
      'As a computer science student at UC Berkeley, home to one of the best computer science programs, I immersed myself in rigorous coursework, hands-on projects, and collaboration with talented peers and renowned faculty. I gained a deep understanding of various computer science disciplines. My studies at UC Berkeley equipped me with a strong foundation in theoretical concepts and practical skills.',
    jobTitle: 'Student',
    company: 'UC Berkeley',
    date: 'Aug 2019 - May 2021',
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          className="object-contain w-[60%] h-[60%]"
          src="./uc-berkeley.png"
          alt="rubrik"
        />
      </div>
    ),
  },
]

export function Experience() {
  return (
    <div id="experience" className="section lg:h-[130vh]">
      <div className="container mx-auto">
        <div>
          <div className="flex flex-col mb-5 lg:mb-10 lg:items-center">
            <h5 className="text-sm text-primary">
              What I have been working on
            </h5>
            <h1 className="text-3xl font-bold lg:text-7xl text-primary">
              Experience
            </h1>
          </div>
          <VerticalTimeline>
            {CONTENT.map((content, i) => {
              return (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#9c5bff', color: '#fff' }}
                  contentArrowStyle={{
                    borderRight: '7px solid #fff',
                  }}
                  date={content.date}
                  iconStyle={{ background: '#1f1e20', color: '#000' }}
                  icon={content.icon}
                >
                  <h3 className="vertical-timeline-element-title">
                    {content.jobTitle}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {content.company}
                  </h5>
                  <p>{content.description}</p>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}
