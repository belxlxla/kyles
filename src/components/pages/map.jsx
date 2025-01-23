// Map.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/pages/map.css';

const Map = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');
  
  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const path = location.pathname.substring(1);
    setActiveTab(path || 'map');
  }, [location]);

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
    <div className="login-wrapper">
      <div className="login-container">
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

        <div className="content-container">
          <div className="description">
            <h2>Description</h2>
            <p>카카오, 네이버, 구글, 디스코드 REST API 로그인 기능 데이터를 확인할 수 있습니다. OAuth 2.0 인증 프로토콜을 적용하여 리다이렉션을 통해 기능 연결을 하였습니다.</p>
            <p>카카오, 네이버, 구글, 디스코드 REST API 로그인 기능 데이터를 확인할 수 있습니다. OAuth 2.0 인증 프로토콜을 적용하여 리다이렉션을 통해 기능 연결을 하였습니다.</p>
            <p>카카오, 네이버, 구글, 디스코드 REST API 로그인 기능 데이터를 확인할 수 있습니다. OAuth 2.0 인증 프로토콜을 적용하여 리다이렉션을 통해 기능 연결을 하였습니다.</p>
          </div>
          
          <div className="login-box">
            <h1>해당 기능은 현재 준비중입니다.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;