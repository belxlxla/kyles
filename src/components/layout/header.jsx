import React, { useState, useEffect, useCallback } from 'react';
import { Link as ScrollLink, Events, scrollSpy, scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/layout/header.css';
import Menu from '../../assets/ham.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // activeSection state is used for tracking the current active section
  // even if not directly rendered, it's used in scroll events and navigation
  // eslint-disable-next-line no-unused-vars
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  const functionalPaths = [
    '/login', '/payments', '/map', '/chat',
    '/editor', '/calendar', '/ai'
  ];

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 100;
    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    Events.scrollEvent.register('begin', (to, element) => {
      setActiveSection(to);
    });
    
    Events.scrollEvent.register('end', (to, element) => {
      setActiveSection(to);
    });

    scrollSpy.update();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll]);

  const handleLogoClick = () => {
    // 모바일 메뉴가 열려있으면 닫기
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    // 현재 경로가 functionalPaths에 포함되어 있거나 메인 페이지가 아닌 경우
    if (functionalPaths.includes(location.pathname) || location.pathname !== '/') {
      navigate('/');
      return;
    }

    // 메인 페이지에서는 최상단으로 스크롤
    setActiveSection('');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFunctionClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/login');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSetActive = (to) => {
    if (!functionalPaths.includes(location.pathname)) {
      setActiveSection(to);
    }
  };

  const handleLinkClick = (to) => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    
    scroller.scrollTo(to, {
      duration: 500,
      smooth: true,
      offset: -80,
      spy: true
    });
  };

  const menuItems = !functionalPaths.includes(location.pathname)
    ? [
        { to: "about", text: "About ", hasB: true, bText: "me" },
        { to: "skill", text: "", hasB: true, bText: "Skill" },
        { to: "archiving", text: "Archiving", hasB: false },
        { to: "projects", text: "My ", hasB: true, bText: "Projects" },
        { to: "career", text: "", hasB: true, bText: "Career" },
        { to: "contact", text: "", hasB: true, bText: "Contact" },
      ]
    : [];

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
      <nav className="nav-container">
        {isMobile && !functionalPaths.includes(location.pathname) && (
          <button 
            className="hamburger-button" 
            onClick={toggleMobileMenu}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <img src={Menu} alt="Menu" draggable="false" />
          </button>
        )}
        
        <div className="logo" onClick={handleLogoClick}>
          <b>Kyle's</b><span> Portfolio</span>
        </div>
        <ul className={`nav-links ${isMobile ? 'mobile' : ''} ${isMobileMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} style={{"--index": index}}>
              <ScrollLink
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                isDynamic={true}
                onSetActive={handleSetActive}
                onClick={() => handleLinkClick(item.to)}
                ignoreCancelEvents={false}
              >
                {item.text}
                {item.hasB && <b>{item.bText}</b>}
              </ScrollLink>
            </li>
          ))}
          {location.pathname === '/' && (
            <li onClick={handleFunctionClick}>
              <span className="nav-links a"><b>Function</b></span>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;