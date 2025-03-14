// Header.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link as ScrollLink, Events, scrollSpy, scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/layout/header.css';
import Menu from '../../assets/ham.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);
  const adjustmentTimeoutRef = useRef(null);
  const isScrollingRef = useRef(false);
  const lastScrollTargetRef = useRef('');
  
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
      setActiveSection('');
      scrollSpy.update();
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
      isScrollingRef.current = true;
      setActiveSection(to);
    });
    
    Events.scrollEvent.register('end', (to, element) => {
      isScrollingRef.current = false;
      setActiveSection(to);
      scrollSpy.update();
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      if (adjustmentTimeoutRef.current) {
        clearTimeout(adjustmentTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  const cleanupScrolling = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    if (adjustmentTimeoutRef.current) {
      clearTimeout(adjustmentTimeoutRef.current);
    }
    
    isScrollingRef.current = false;
  };

  const scrollToElement = (elementId, immediate = false) => {
    cleanupScrolling();
    
    lastScrollTargetRef.current = elementId;
    const targetElement = document.getElementById(elementId);
    
    if (!targetElement) return;
    
    const headerOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: immediate ? 'auto' : 'smooth'
    });
    
    setActiveSection(elementId);
    
    adjustmentTimeoutRef.current = setTimeout(() => {
      if (lastScrollTargetRef.current !== elementId) return;
      
      const newPosition = targetElement.getBoundingClientRect().top;
  
      if (Math.abs(newPosition - headerOffset) > 2) {
        const adjustedPosition = window.pageYOffset + newPosition - headerOffset;
        
        window.scrollTo({
          top: adjustedPosition,
          behavior: 'auto'
        });
        
        setTimeout(() => {
          scrollSpy.update();
          setActiveSection(elementId);
        }, 50);
      }
    }, immediate ? 50 : 600);
  };

  const scrollToTop = (immediate = false) => {
    cleanupScrolling();
    lastScrollTargetRef.current = '';
    
    window.scrollTo({
      top: 0,
      behavior: immediate ? 'auto' : 'smooth'
    });
    
    setActiveSection('');
    
    scrollTimeoutRef.current = setTimeout(() => {
      scrollSpy.update();
    }, immediate ? 50 : 500);
  };

  const handleLogoClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToTop(true);
      }, 50);
      return;
    }
    
    scrollToTop(false);
  };

  const handleFunctionClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/login');
    setTimeout(() => {
      scrollToTop(true);
    }, 50);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSetActive = (to) => {
    if (!functionalPaths.includes(location.pathname)) {
      setActiveSection(to);
    }
  };

  const handleLinkClick = (to, e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    
    scrollToElement(to, false);
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
                smooth={false}
                offset={-80}
                duration={0}
                isDynamic={true}
                onSetActive={handleSetActive}
                onClick={(e) => handleLinkClick(item.to, e)}
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