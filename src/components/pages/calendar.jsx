// Calendar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/pages/calendar.css';

const Calendar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');
  
  // bella : 컴포넌트 마운트 시 body 배경색 변경되도록 설정
  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const path = location.pathname.substring(1);
    setActiveTab(path || 'calendar');
  }, [location]);

  // bella : 네비게이션 탭 목록
  const navTabs = [
    { name: 'Login', path: '/login' },
    { name: 'Payments', path: '/payments' },
    { name: 'Map', path: '/map' },
    { name: 'Chat', path: '/chat' },
    { name: 'Editor', path: '/editor' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'AI', path: '/ai' }
  ];

  return (
    <div className="calendar-wrapper">
      <div className="calendar-container">
        <div className="navigation-container">
          <nav className="tab-navigation">
            {navTabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className={`tab ${activeTab === tab.name.toLowerCase() ? 'active' : ''}`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
          <div className="nav-border"></div>
        </div>

        {/* bella : 작성 필요 */}
        <div className="content-container">
          <div className="description">
            <h2>Description</h2>
            <p>카카오, 네이버, 구글, 디스코드 REST API 로그인 기능 데이터를 확인할 수 있습니다. OAuth 2.0 인증 프로토콜을 적용하여 리다이렉션을 통해 기능 연결을 하였습니다.</p>
            <p>카카오, 네이버, 구글, 디스코드 REST API 로그인 기능 데이터를 확인할 수 있습니다. OAuth 2.0 인증 프로토콜을 적용하여 리다이렉션을 통해 기능 연결을 하였습니다.</p>
            <p>카카오, 네이버, 구글, 디스코드 REST API 로그인 기능 데이터를 확인할 수 있습니다. OAuth 2.0 인증 프로토콜을 적용하여 리다이렉션을 통해 기능 연결을 하였습니다.</p>
          </div>

          <div className="calendar-box">
          <h1>해당 기능은 현재 준비중입니다.</h1>
          </div>
              </div>
            </div>
          </div>
  );
};

export default Calendar;