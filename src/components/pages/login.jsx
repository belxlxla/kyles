// Login.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/pages/login.css';
import kakao from '../../assets/kakao.svg';
import naver from '../../assets/naver.svg';
import google from '../../assets/google.svg';
import discord from '../../assets/discord.svg';
import checkin from '../../assets/checkin.svg';
import checkout from '../../assets/checkout.svg';

const Login = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const [isFilled, setIsFilled] = useState({
    id: false,
    password: false
  });

  // bella : 컴포넌트 마운트 시 body 배경색 변경되도록 설정
  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const path = location.pathname.substring(1);
    setActiveTab(path || 'login');
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'id' || name === 'password') {
      setIsFilled(prev => ({
        ...prev,
        [name]: value.length > 0
      }));
    }
  };

  const isFormFilled = isFilled.id && isFilled.password;

  const handleAutoLoginClick = () => {
    setAutoLogin(!autoLogin);
  };

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

        {/* bella : 작성 필요 */}
        <div className="content-container">
          <div className="description">
            <h2>Description</h2>
            <p>카카오, 네이버, 구글, 디스코드 REST API 로그인 기능 데이터를 확인할 수 있습니다. OAuth 2.0 인증 프로토콜을 적용하여 리다이렉션을 통해 기능 연결을 하였습니다.</p>
            <p>카카오, 네이버, 구글, 디스코드 REST API 로그인 기능 데이터를 확인할 수 있습니다. OAuth 2.0 인증 프로토콜을 적용하여 리다이렉션을 통해 기능 연결을 하였습니다.</p>
            <p>카카오, 네이버, 구글, 디스코드 REST API 로그인 기능 데이터를 확인할 수 있습니다. OAuth 2.0 인증 프로토콜을 적용하여 리다이렉션을 통해 기능 연결을 하였습니다.</p>
          </div>

          <div className="login-box">
            <h1>Hello world</h1>
            <div className="input-container">
              <input 
                type="text" 
                name="id"
                placeholder="enter your ID"
                onChange={handleInputChange}
                className={isFilled.id ? 'filled' : ''}
              />
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="enter your Password"
                  onChange={handleInputChange}
                  className={isFilled.password ? 'filled' : ''}
                />
                <button onClick={() => setShowPassword(!showPassword)} className="eye-button">
                  👁
                </button>
              </div>
              <button className={`login-button ${isFormFilled ? 'active' : ''}`}>
                Login
              </button>
              <div className="auto-login">
                <div 
                  className="custom-checkbox"
                  onClick={handleAutoLoginClick}
                >
                  <img 
                    src={autoLogin ? checkin : checkout}
                    alt="checkbox" 
                  />
                </div>
                <label>Auto Login</label>
              </div>
              <div className="social-section">
                <div className="social-divider">Social Login</div>
                <div className="social-buttons">
                  <button><img src={kakao} alt="Kakao" /></button>
                  <button><img src={naver} alt="Naver" /></button>
                  <button><img src={google} alt="Google" /></button>
                  <button><img src={discord} alt="Discord" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;