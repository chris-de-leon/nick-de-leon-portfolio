/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

export function Header() {
  return (
    <header className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between ">
          <Link
            href={'https://www.linkedin.com/in/nicholas-deleon/'}
            target="_blank"
          >
            <img
              className="w-10 lg:w-14"
              loading="lazy"
              src="./logo.png"
              alt="logo"
            />
          </Link>
          <div className="flex flex-row text-xs md:text-lg lg:text-lg gap-x-4 text-primary">
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
