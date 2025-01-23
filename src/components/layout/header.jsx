//Header.jsx
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/layout/header.css';
import Menu from '../../assets/ham.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const functionalPaths = [
    '/login', '/payments', '/map', '/chat',
    '/editor', '/calendar', '/ai'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogoClick = () => {
    if (functionalPaths.includes(location.pathname)) {
      navigate('/');
      return;
    }
    scroll.scrollToTop({
      duration: 500,
      smooth: true
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

    const toggleMobileMenu = () => {
      requestAnimationFrame(() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
      });
  };

    return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
      <nav className="nav-container">
            {isMobile && !functionalPaths.includes(location.pathname) && (
        <button className="hamburger-button" onClick={toggleMobileMenu}>
          <img src={Menu} alt="Menu" />
        </button>
      )}
        
        <div className="logo" onClick={handleLogoClick}>
          <b>Kyle's</b><span> Portfolio</span>
        </div>

        <ul className={`nav-links ${isMobile ? 'mobile' : ''} ${isMobileMenuOpen ? 'open' : ''}`}>
            {menuItems.map((item, index) => (
              <li key={index} style={{"--index": index}}>  {/* 각 아이템에 인덱스 변수 추가 */}
                <ScrollLink
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={90}
                  duration={200}
                  onClick={() => isMobile && setIsMobileMenuOpen(false)}
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