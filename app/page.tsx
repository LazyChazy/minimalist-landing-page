import { PageWrapper } from './components/PageWrapper'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <PageWrapper key="hero">
        <Hero />
      </PageWrapper>
      <PageWrapper key="features">
        <Features />
      </PageWrapper>
      <PageWrapper key="projects">
        <Projects />
      </PageWrapper>
      <PageWrapper key="contact">
        <Contact />
      </PageWrapper>
    </main>
  )
}