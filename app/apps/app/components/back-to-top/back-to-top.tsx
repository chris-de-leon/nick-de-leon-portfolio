import { AiOutlineArrowUp } from 'react-icons/ai'
import Link from 'next/link'

export function BackToTop() {
  return (
    <nav className="fixed z-50 w-full bottom-2">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-around w-full rounded-full bg-black/20 h-[25px] max-w-[25px] backdrop-blur-2xl mx-auto text-2xl">
          <Link className="text-primary" href="/">
            <AiOutlineArrowUp />
          </Link>
        </div>
      </div>
    </nav>
  )
}
