// App.jsx
import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Main from './components/pages/main';
import SecondSection from './components/pages/secondSection';
import About from './components/pages/about';
import Skill from './components/pages/skill';
import Archiving from './components/pages/archiving';
import Projects from './components/pages/projects';
import Career from './components/pages/career';
import Contact from './components/pages/contact';
import Login from './components/pages/login';
import Payments from './components/pages/payments';
import Map from './components/pages/map';
import Chat from './components/pages/chat';
import Editor from './components/pages/editor';
import Calendar from './components/pages/calendar';
import AI from './components/pages/ai';
import './styles/smoothScroll.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const sectionsRef = useRef([]);

  useEffect(() => {
    let isScrolling = false;
    let lastScrollTop = 0;
    const scrollThreshold = 100; // 스크롤 민감도 설정하는 부분
    const scrollDelay = 1500; // 스크롤 딜레이

    const preventContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    
    // 이미지 저장 방지
    const preventSave = (e) => {
      if (!e.target.closest('.nav-button')) {
        e.preventDefault();
        return false;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    // 스크롤 핸들러
    const handleScroll = () => {
      // form 작성 중일 때는 스크롤 효과 비활성화 되게............ㅜ
      if (document.activeElement.tagName === 'INPUT' || 
          document.activeElement.tagName === 'TEXTAREA') {
        return;
      }

      if (isScrolling) return;

      const currentScrollTop = window.scrollY;
      const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);

      if (scrollDelta > scrollThreshold) {
        isScrolling = true;
        
        const direction = currentScrollTop > lastScrollTop ? 1 : -1;
        const sections = Array.from(document.querySelectorAll('.scroll-section'));
        const currentSection = sections.findIndex(section => {
          const rect = section.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        });

        const nextSectionIndex = currentSection + direction;
        if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
          sections[nextSectionIndex].scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }

        setTimeout(() => {
          isScrolling = false;
          lastScrollTop = window.scrollY;
        }, scrollDelay);
      }
    };

    const throttledHandleScroll = (e) => {
      requestAnimationFrame(() => handleScroll(e));
    };

    document.addEventListener('contextmenu', preventContextMenu);
    window.addEventListener('scroll', throttledHandleScroll);
    
    const images = document.querySelectorAll('img:not(.nav-button img)');
    images.forEach(img => {
      img.addEventListener('touchstart', preventSave, { passive: false });
      img.addEventListener('contextmenu', preventSave);
    });

    document.querySelectorAll('.scroll-section').forEach(section => {
      observer.observe(section);
    });
  
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      window.removeEventListener('scroll', throttledHandleScroll);
      images.forEach(img => {
        img.removeEventListener('touchstart', preventSave);
        img.removeEventListener('contextmenu', preventSave);
      });
      observer.disconnect();
    };
  }, []);

  const wrapWithScrollSection = (Component) => (
    <div className="scroll-section">
      <Component />
    </div>
  );

  return (
    <Routes>
      <Route 
        path="/login"
        element={
          <>
            <Header />
            {wrapWithScrollSection(Login)}
          </>
        } 
      />
      <Route 
        path="/" 
        element={
          <>
            <Header />
            {wrapWithScrollSection(Main)}
            {wrapWithScrollSection(SecondSection)}
            {wrapWithScrollSection(About)}
            {wrapWithScrollSection(Skill)}
            {wrapWithScrollSection(Archiving)}
            {wrapWithScrollSection(Projects)}
            {wrapWithScrollSection(Career)}
            {wrapWithScrollSection(Contact)}
          </>
        } 
      />
      <Route 
        path="/payments"
        element={
          <>
            <Header />
            {wrapWithScrollSection(Payments)}
          </>
        } 
      />
      <Route 
        path="/map"
        element={
          <>
            <Header />
            {wrapWithScrollSection(Map)}
          </>
        } 
      />
      <Route 
        path="/chat"
        element={
          <>
            <Header />
            {wrapWithScrollSection(Chat)}
          </>
        } 
      />
      <Route 
        path="/editor"
        element={
          <>
            <Header />
            {wrapWithScrollSection(Editor)}
          </>
        }
      />
      <Route 
        path="/calendar"
        element={
          <>
            <Header />
            {wrapWithScrollSection(Calendar)}
          </>
        }
      />
      <Route 
        path="/ai"
        element={
          <>
            <Header />
            {wrapWithScrollSection(AI)}
          </>
        }   
      />
    </Routes>
  );
}

export default App;