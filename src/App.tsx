import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useGsapTimeline, useGsapTheme } from './hooks/useGsap';

function App() {
  useGsapTimeline();
  useGsapTheme();

  // 새로고침 시 최상단 강제 스크롤 및 브라우저 스크롤 복원 비활성화
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-content">본문 바로가기</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
