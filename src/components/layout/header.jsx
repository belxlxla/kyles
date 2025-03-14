import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link as ScrollLink, Events, scrollSpy, scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/layout/header.css';
import Menu from '../../assets/ham.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // activeSection state is used for tracking scroll events and navigation
  // eslint-disable-next-line no-unused-vars
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);
  
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
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');

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
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const scrollToTop = (immediate = true) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    if (immediate) {
      window.scrollTo(0, 0);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      setActiveSection('');
      scrollSpy.update();
    }, 10);
  };

  const handleLogoClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    if (location.pathname !== '/') {
      navigate('/');
      scrollToTop(true);
      return;
    }
    scrollToTop(true);
    setActiveSection('');
  };

  const handleFunctionClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/login');
    scrollToTop(true);
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
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    setActiveSection('');
    
    scrollTimeoutRef.current = setTimeout(() => {
      scroller.scrollTo(to, {
        duration: 500,
        smooth: true,
        offset: -80,
        spy: true,
        ignoreCancelEvents: true
      });
      
      setTimeout(() => {
        scrollSpy.update();
        setActiveSection(to);
      }, 510);
    }, 10);
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
                ignoreCancelEvents={true}
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