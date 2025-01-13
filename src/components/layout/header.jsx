import React, { useState, useEffect } from 'react';
import '../styles/layout/header.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
 const [scrolled, setScrolled] = useState(false);
 const navigate = useNavigate();
 const location = useLocation();

 // bella : 기능 페이지들의 경로 정의
 const functionalPaths = [
   '/login', '/payments', '/map', '/chat', 
   '/editor', '/calendar', '/ai'
 ];

 useEffect(() => {
   const handleScroll = () => {
     const isScrolled = window.scrollY > window.innerHeight;
     setScrolled(isScrolled);
   };

   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 // bella : 로고 클릭 시 함수
 const handleLogoClick = () => {
   // bella : 기능 페이지 -> 로고 클릭 시 메인으로 이동
   if (functionalPaths.includes(location.pathname)) {
     navigate('/');
     return;
   }
   
   // bella : 메인 스크롤 상단으로 이동
   scroll.scrollToTop({
     duration: 500,
     smooth: true
   });
 };

    const handleFunctionClick = () => {
      navigate('/login');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

 // bella : Function 페이지에서 null
 const menuItems = !functionalPaths.includes(location.pathname) 
   ? [
       { to: "about", text: "About ", hasB: true, bText: "me" },
       { to: "skill", text: "", hasB: true, bText: "Skill" },
       { to: "archiving", text: "Archiving", hasB: false },
       { to: "projects", text: "My ", hasB: true, bText: "Projects" },
       { to: "career", text: "", hasB: true, bText: "Career" },
       { to: "contact", text: "", hasB: true, bText: "Contact" },
     ]
   : []
   ;

 return (
   <header className={`header ${scrolled ? 'scrolled' : ''}`}>
     <nav className="nav-container">
       <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
         <b>Kyle's</b><span> Portfolio</span>
       </div>
       <ul className="nav-links">
         {menuItems.map((item, index) => (
           <li key={index}>
             <ScrollLink
               activeClass="active"
               to={item.to}
               spy={true}
               smooth={true}
               offset={90}
               duration={200}
             >
               {item.text}
               {item.hasB && <b>{item.bText}</b>}
             </ScrollLink>
           </li>
         ))}
         {location.pathname === '/' && (
           <li onClick={handleFunctionClick} style={{ cursor: 'pointer' }}>
             <span className="nav-links a"><b>Function</b></span>
           </li>
         )}
       </ul>
     </nav>
   </header>
 );
};

export default Header;