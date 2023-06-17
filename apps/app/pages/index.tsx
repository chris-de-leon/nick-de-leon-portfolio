import {
  Experience,
  BackToTop,
  Projects,
  Contact,
  Banner,
  Header,
  About,
} from '../components'

export function Index() {
  return (
    <>
      <Header />
      <BackToTop />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default Index
