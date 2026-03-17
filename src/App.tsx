import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import { GlobalStyle } from './styles/GlobalStyle'
import { ScrollToTop } from './ui/ScrollToTop'
import { TopNav } from './ui/Header'
import { Footer } from './ui/Footer'

import { FirstSlide } from './ui/FirstSlide'
import { Meokblo } from './ui/Meokblo'
import { Memories } from './ui/Memories'
import { About } from './ui/About'
import { Introduce } from './ui/Introduce'
import { Members } from './ui/Members'
import { Faq } from './ui/Faq'

const HERO_FADE_START = 80
const HERO_FADE_END = 320

const Main = styled.main`
  position: relative;
  pointer-events: auto;
  z-index: 1;
`

const HeroWrap = styled.div<{ $opacity: number; $y: number }>`
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  opacity: ${(p) => p.$opacity};
  transform: translateY(${(p) => p.$y}px);
`

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const t = Math.max(0, Math.min(1, (scrollY - HERO_FADE_START) / (HERO_FADE_END - HERO_FADE_START)))

  return (
    <PageLayout>
      <HeroWrap $opacity={1 - t} $y={-t * 24}>
        <FirstSlide />
      </HeroWrap>
      <Meokblo />
      <Memories />
    </PageLayout>
  )
}

const AboutPage     = () => <PageLayout><About /></PageLayout>
const IntroducePage = () => <PageLayout><Introduce /></PageLayout>
const MembersPage   = () => <PageLayout><Members /></PageLayout>
const FaqPage       = () => <PageLayout><Faq /></PageLayout>

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <TopNav />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/about"     element={<AboutPage />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/members"   element={<MembersPage />} />
        <Route path="/faq"       element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App