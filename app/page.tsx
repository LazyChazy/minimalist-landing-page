// src/app/page.js
import { PageWrapper } from './components/PageWrapper'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="pt-16">
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
      <Footer />
    </main>
  )
}