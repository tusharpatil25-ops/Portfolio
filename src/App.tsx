import { lazy, Suspense, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { personalInfo } from './data/portfolio'
import BackToTop from './components/layout/BackToTop'
import CursorGlow from './components/layout/CursorGlow'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/layout/LoadingScreen'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/layout/ScrollProgress'
import About from './components/sections/About'
import Achievements from './components/sections/Achievements'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Stats from './components/sections/Stats'
import WorkExperience from './components/sections/WorkExperience'
import { ThemeProvider } from './hooks/useTheme'

const Projects = lazy(() => import('./components/sections/Projects'))
const GitHubSection = lazy(() => import('./components/sections/GitHubSection'))

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      <Helmet>
        <title>{personalInfo.name} | {personalInfo.title}</title>
        <meta
          name="description"
          content={`${personalInfo.name} - ${personalInfo.title}. ${personalInfo.tagline}. Portfolio showcasing web development, AI/ML projects, and professional experience.`}
        />
        <meta name="author" content={personalInfo.name} />
        <meta name="keywords" content="Software Developer, React, Python, AI, Machine Learning, Web Development, Portfolio, Tushar Patil" />
        <meta property="og:title" content={`${personalInfo.name} | Portfolio`} />
        <meta property="og:description" content={`${personalInfo.title} - ${personalInfo.tagline}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} | Portfolio`} />
        <meta name="twitter:description" content={`${personalInfo.title} - ${personalInfo.tagline}`} />
        <link rel="canonical" href="https://tusharpatil.dev" />
      </Helmet>

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <CursorGlow />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Stats />
            <Skills />
            <Suspense fallback={<div className="section-padding text-center text-muted">Loading projects...</div>}>
              <Projects />
            </Suspense>
            <WorkExperience />
            <Education />
            <Certifications />
            <Achievements />
            <Suspense fallback={<div className="section-padding text-center text-muted">Loading...</div>}>
              <GitHubSection />
            </Suspense>
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </ThemeProvider>
  )
}

export default App
