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
          안녕하십니까
          <br />
          <span id="typing-text"></span>
          <span id="cursor">|</span>
          한선우 입니다
        </p>
        <p className="self-instroduction">
          군대 싸지방에서 처음으로 코딩에 관심을 가지게 되었고, 그 후 독학으로
          프로그래밍을 공부하기 시작했습니다.
          <br />
          이후, 개발자가 되기 위해 컴퓨터 공학을 복수 전공하며 한국정보교육원과
          KOSTA 부트캠프에서 웹 개발자로서의 역량을 키웠습니다.
          <br />
          앞으로도 지속적으로 배우고 성장하는 자세로 더 나은 개발자가
          되겠습니다.
        </p>

        <div className="contact-info">
          <span>
            <i className="fas fa-envelope"></i> gkstjsdn0011@naver.com
          </span>
          <span>
            <i className="fas fa-phone"></i> 010-2466-7537
          </span>
          <span onClick={showMap}>
            <i className="fas fa-map-marker-alt"></i> 서울 은평구 연서로43길
            9-21
          </span>
          <span>
            <i className="fab fa-github"></i>{" "}
            <a
              href="https://github.com/han000woo"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/han000woo
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;