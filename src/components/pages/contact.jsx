// Contact.jsx
import React, { useState } from 'react';
import '../styles/pages/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', // 이름
    company: '', // 회사명
    email: '', // 이메일 아이디
    emailDomain: '', // 이메일 도메인
    number: '', // 연락처
    comments: '' // 문의 내용
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCustomDomain, setIsCustomDomain] = useState(false);

  const emailDomains = [
    'gmail.com', // 도메인 추가 가능
    'naver.com',
    'kakao.com',
    'daum.net',
    'hanmail.net'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
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
    if (!formData.number.trim()) newErrors.number = true;
    if (!formData.comments.trim()) newErrors.comments = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitted(true);
    
    try {
      // bella : 가상 (실제 API 호출 대신 해봄)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccessMessage(true);
      
      setTimeout(() => {
        setShowSuccessMessage(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          emailDomain: '',
          number: '',
          comments: ''
        });
        setIsSubmitted(false);
        setIsCustomDomain(false);
      }, 3000);
    } catch (error) {
      setErrors({ submit: true });
      setIsSubmitted(false);
    }
  };

  const isFormFilled = 
    formData.name.trim() && 
    formData.company.trim() && 
    formData.email.trim() && 
    formData.emailDomain && 
    formData.number.trim() && 
    formData.comments.trim();

  return (
  <div id="contact" className="contact-wrapper"> 
    <div className="contact-wrapper">
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
            placeholder="회사명을 입력해 주세요"
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
              placeholder="이메일 주소를 입력해 주세요"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            <span className="at-symbol">@</span>
            {isCustomDomain ? (
              <input
                type="text"
                name="emailDomain"
                placeholder="이메일 주소를 입력해 주세요"
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
                {isDropdownOpen && (
                  <div className="dropdown-options">
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
                      직접 입력
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Number</label>
          <input
            type="text"
            name="number"
            placeholder="연락처를 입력해 주세요"
            value={formData.number}
            onChange={handleChange}
            className={errors.number ? 'error' : ''}
          />
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

      {/* bella : 성공 모달 */}
      {showSuccessMessage && (
        <div className="success-message">
          성공적으로 개발자에게 제안이 전송되었습니다.
        </div>
      )}
    </div>
  </div>
  );
};

export default Contact;