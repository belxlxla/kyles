// Payments.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import '../styles/pages/payments.css';
import rarr from '../../assets/r-arr.svg';
import larr from '../../assets/l-arr.svg';
import hoodie from '../../assets/k-cloth.svg';
import perfume from '../../assets/n-pp.svg';
import kpay from '../../assets/kakaopay.svg';
import npay from '../../assets/naverpay.svg';
import star from '../../assets/star.svg';

const Payments = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fadeState, setFadeState] = useState('visible');

    useEffect(() => {
      document.body.style.backgroundColor = '#fff';
      
      return () => {
        document.body.style.backgroundColor = '';
      };
    }, []);
  

    useEffect(() => {
        const path = location.pathname.substring(1);
        setActiveTab(path || 'payments'); 
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
  
     // bella : 상품 정보
    const products = [
        {
            title: "Payments - Kakaopay",
            category: "남성 | 후드 티셔츠",
            name: "어플리케 후드 티셔츠 챠콜",
            originalPrice: "159,000",
            discount: "38%",
            price: "99,000",
            rating: "4.9",
            reviews: "(+9,999)",
            image: hoodie,
            description: "카카오페이 x 삼성카드 9만원 이상 결제 시 4천원 할인",
            payButton: kpay
        },
        {
            title: "Payments - Naverpay",
            category: "뷰티 | 프레그런스 | 향수",
            name: "오드퍼퓸 EDP 50ml",
            originalPrice: "899,000",
            discount: "30%",
            price: "699,000",
            rating: "4.9",
            reviews: "(+9,999)",
            image: perfume,
            description: "네이버페이 x 롯데카드 20만원 이상 결제 시 1만원 할인",
            payButton: npay
        }
    ];

    // bella : 현재 안먹히고 있어서 고전중 - 페이드 아웃
    const handleNext = () => {
      setFadeState('fadeOut');
      
      setTimeout(() => {
        setCurrentSlide(1);
        setFadeState('fadeIn');
      }, 400);
    };

    const handlePrev = () => {
      setFadeState('fadeOut');
      
      setTimeout(() => {
        setCurrentSlide(0);
        setFadeState('fadeIn');
      }, 400);
    };

    const currentProduct = products[currentSlide];

  return (
    <div className="payments-wrapper">
      <div className="payments-container">
        <div className="navigation-container">
          <nav className="tab-navigation">
            {navTabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className={`tab ${activeTab === tab.name ? 'active' : ''}`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
          <div className="nav-border"></div>
        </div>

        <div className="content-container">
          {/* 설명 섹션 */}
          <div className="description">
            <h2>Description</h2>
            <p>결제는 카카오페이나 네이버페이로가 있으며</p>
            <p>결제는 뭘로 개발했고</p>
            <p>뭘로 구현되고</p>
          </div>

          <div className="product-box">
  <h1>{currentProduct.title}</h1>
  <div className="product-content">
    {currentSlide > 0 && (
      <button className="slide-button left" onClick={handlePrev}>
        <img src={larr} alt="Previous" />
      </button>
    )}
  
  {/* bella : 안먹혀서 고전중 - 상품 정보 섹션 (페이드 효과 적용) */}
  <div className={`product-info ${fadeState}`}>
  <div className="category">{currentProduct.category.replace('>', '>')}</div>
    <div className="product-layout">
      <div className="product-image-container">
        <img src={currentProduct.image} alt="Product" className="product-image" />
      </div>
      <div className="product-details">
        <div className="product-name">{currentProduct.name}</div>
        <div className="original-price">{currentProduct.originalPrice}</div>
        <div className="price-row">
          <span className="discount-rate">{currentProduct.discount}</span>
          <span className="final-price">{currentProduct.price} 원</span>
        </div>
        <div className="rating">
          <img src={star} alt="star" />
          <span>{currentProduct.rating}</span>
          <span className="reviews">{currentProduct.reviews}</span>
        </div>
      </div>
    </div>
    
    <div className="benefits-section">
      <div className="benefit-header">[결제혜택]</div>
      <div className="benefit-content">{currentProduct.description}</div>
    </div>
    
    <div className="delivery-section">
      <div className="delivery-info">결제 3일 이내 출고 예정 - 우체국 택배</div>
    </div>
    
    <div className="payment-button-container">
      <button className="pay-button">
        <img src={currentProduct.payButton} alt="Pay" />
      </button>
    </div>
  </div>

  {currentSlide < products.length - 1 && (
      <button className="slide-button right" onClick={handleNext}>
      <img src={rarr} alt="Next" />
    </button>
  )}
</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Payments;