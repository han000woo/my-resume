import React from 'react';
import '../css/Header.css'; // 헤더 전용 스타일
import { startTypingEffect } from '../utils/typingEffect';
import { useEffect } from 'react';
import { showMap } from '../utils/showMap';

const Header = () => {
    useEffect(() => {
    // 컴포넌트가 마운트될 때 타이핑 효과 시작
    const textArray = ["Backend Developer", "Web Developer", "Cloud Engineer"];
    startTypingEffect('typing-text', 'cursor', textArray);
  }, []);
  return (
    <header className="main-header">
      <div className="header-content">
        <p className="tagline">
          안녕하십니까? <br />
          <span id="typing-text"></span><span id="cursor">|</span>
          한선우 입니다
        </p>
        <div className="contact-info">
          <span><i className="fas fa-envelope"></i> gks*******@naver.com</span>
          <span><i className="fas fa-phone"></i> 010-****-7537</span>
          <span onClick={showMap}><i className="fas fa-map-marker-alt"></i> 서울 은평구 연서로43길 9-21</span>
          <span><i className="fab fa-github"></i> <a href="https://github.com/han000woo" target="_blank" rel="noopener noreferrer">github.com/han000woo</a></span>
        </div>
      </div>
    </header>
  );
};

export default Header;