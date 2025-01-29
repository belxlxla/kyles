import React, { useState } from 'react';
import '../styles/pages/contact.css';

const PopupNotification = ({ message, type, onClose }) => (
  <div className="popup-overlay">
    <div className="popup-content">
      <p>{message}</p>
      <button onClick={onClose} style={{ backgroundColor: type === 'error' ? '#FF0040' : '#ffd900' }}>
        {type === 'error' ? '다시 시도' : '확인'}
      </button>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '', 
    email: '',
    emailDomain: '',
    contact: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCustomDomain, setIsCustomDomain] = useState(false);
  const [contactError, setContactError] = useState('');

  const emailDomains = [
    'gmail.com',
    'naver.com', 
    'kakao.com',
    'daum.net',
    'hanmail.net'
  ];

  // 전화번호 패턴 정의
  const phonePatterns = [
    /^02-\d{3}-\d{4}$/, // 02-XXX-XXXX
    /^\d{3}-\d{3}-\d{4}$/, // XXX-XXX-XXXX
    /^\d{3}-\d{4}-\d{4}$/, // XXX-XXXX-XXXX
    /^\d{4}-\d{4}-\d{4}$/, // XXXX-XXXX-XXXX
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'contact') {
      // Remove all non-numeric characters
      const numericValue = value.replace(/\D/g, '');
      
      if (numericValue.length > 11) return; // Limit to 11 digits
      
      let formattedNumber = '';
      if (numericValue.length <= 3) {
        formattedNumber = numericValue;
      } else if (numericValue.length <= 7) {
        const prefix = numericValue.slice(0, 3);
        const middle = numericValue.slice(3, 7);
        formattedNumber = `${prefix}-${middle}`;
      } else {
        // Format based on first digits and length
        if (numericValue.startsWith('02')) {
          // Seoul number (02-XXX-XXXX)
          formattedNumber = `${numericValue.slice(0, 2)}-${numericValue.slice(2, 5)}-${numericValue.slice(5)}`;
        } else if (numericValue.length === 11) {
          // Mobile number (XXX-XXXX-XXXX)
          formattedNumber = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 7)}-${numericValue.slice(7)}`;
        } else if (numericValue.length === 12) {
          // 4-4-4 format (XXXX-XXXX-XXXX)
          formattedNumber = `${numericValue.slice(0, 4)}-${numericValue.slice(4, 8)}-${numericValue.slice(8)}`;
        } else {
          // Default format (XXX-XXX-XXXX)
          formattedNumber = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6)}`;
        }
      }

      // Validate the formatted number against patterns
      const isValidNumber = phonePatterns.some(pattern => pattern.test(formattedNumber));
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedNumber
      }));

      if (formattedNumber && !isValidNumber) {
        setContactError('올바른 전화번호 형식이 아닙니다');
      } else {
        setContactError('');
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleDomainSelect = (domain) => {
    if (domain === 'custom') {
      setIsCustomDomain(true);
      setFormData(prev => ({
        ...prev,
        emailDomain: ''
      }));
    } else {
      setIsCustomDomain(false);
      setFormData(prev => ({
        ...prev,
        emailDomain: domain
      }));
    }
    setIsDropdownOpen(false);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.company.trim()) newErrors.company = true; 
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.emailDomain) newErrors.emailDomain = true;
    if (!formData.contact.trim()) {
      newErrors.contact = true;
    } else {
      const isValidNumber = phonePatterns.some(pattern => pattern.test(formData.contact));
      if (!isValidNumber) newErrors.contact = true;
    }
    if (!formData.comments.trim()) newErrors.comments = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && !contactError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!validateForm()) return;
    
    setIsSubmitted(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccessPopup(true);
    } catch (error) {
      setShowErrorPopup(true);
      setIsSubmitted(false);
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      emailDomain: '',
      contact: '',
      comments: ''
    });
    setIsSubmitted(false);
    setIsCustomDomain(false);
    setContactError('');
  };

  const isFormFilled = 
    formData.name.trim() && 
    formData.company.trim() && 
    formData.email.trim() && 
    formData.emailDomain && 
    formData.contact.trim() && 
    formData.comments.trim() && 
    !contactError;

  return (
    <div id="contact" className="contact-wrapper">
      <h1 className="contact-title">Contact</h1>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="성함을 입력해 주세요"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            name="company"
            placeholder="회사명을 입력해 주세요 (없다면 없음이라고 작성해 주세요)"
            value={formData.company}
            onChange={handleChange}
            className={errors.company ? 'error' : ''}
          />
        </div>

        <div className="form-group">
          <label>@</label>
          <div className="email-input-container">
            <input
              type="text"
              name="email"
              placeholder="이메일 아이디를 입력해 주세요"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            <span className="at-symbol">@</span>
            {isCustomDomain ? (
              <input
                type="text"
                name="emailDomain"
                placeholder="이메일  도메인을 선택해 주세요"
                value={formData.emailDomain}
                onChange={handleChange}
                className={`custom-domain-input ${errors.emailDomain ? 'error' : ''}`}
              />
            ) : (
              <div className="custom-dropdown">
                <div 
                  className={`dropdown-header ${isDropdownOpen ? 'open' : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {formData.emailDomain || '메일 주소 선택'}
                </div>
                <div className={`dropdown-options ${isDropdownOpen ? 'open' : ''}`}>
                  {emailDomains.map(domain => (
                    <div
                      key={domain}
                      className="dropdown-option"
                      onClick={() => handleDomainSelect(domain)}
                    >
                      {domain}
                    </div>
                  ))}
                  <div 
                    className="dropdown-option direct-input"
                    onClick={() => handleDomainSelect('custom')}
                  >
                    직접 입력하기
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Contact</label>
          <input
            className={`proposal-input ${errors.contact || contactError ? 'error' : ''}`}
            type="tel"
            name="contact"
            placeholder="연락처 또는 휴대폰 번호를 입력해주세요"
            value={formData.contact}
            onChange={handleChange}
            maxLength={13}
          />
          {contactError && (
            <div className="error-message">{contactError}</div>
          )}
        </div>

        <div className="form-group">
          <label>Comments</label>
          <textarea
            name="comments"
            placeholder="개발자에게 맡겨주실 프로젝트나 채용 제안을 해 주세요"
            value={formData.comments}
            onChange={handleChange}
            className={errors.comments ? 'error' : ''}
          />
        </div>

        <button 
          type="submit" 
          className={`submit-button ${isFormFilled ? 'active' : ''}`}
          disabled={!isFormFilled || isSubmitted}
        >
          Submit
        </button>
      </form>

      {showSuccessPopup && (
        <PopupNotification
          message="성공적으로 개발자에게 제안이 전송되었습니다."
          type="success"
          onClose={handleClosePopup}
        />
      )}
      
      {showErrorPopup && (
        <PopupNotification
          message="전송에 실패했습니다. 다시 시도해 주세요."
          type="error"
          onClose={() => setShowErrorPopup(false)}
        />
      )}
    </div>
  );
};

export default Contact;