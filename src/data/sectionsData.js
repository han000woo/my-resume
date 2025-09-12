const sectionsData = [
  {
    title: "자기소개",
    type: "summary",
    content: [
      "2018년 3월 : 서경대학교 산업경영시스템공학과 입학",
      "2020년 2월 ~ 2021년 9월 : 육군 병장 만기 전역",
      "2023년 8월 ~ 2024년 1월 : 한국정보교육원 - 클라우드 컴퓨팅과 보안 솔루션을 활용한 DC 엔지니어 양성과정 수료",
      "2024년 7월 : 서경대학교 컴퓨터공학과 & 산업경영시스템공학과 졸업",
      "2024년 8월 ~ 2024년 12월 : KOSTA - 자바 클라우드 개발자 양성과정 수료",
      "2025년 2월 ~ 2025년 8월 : 지센소프트 서비스 개발부 근무",
    ],
  },
  {
    title: "핵심 역량",
    type: "skills",
    content: [
      "스프링 프레임워크 기반 웹 백엔드 RESTAPI 설계",
      "MySQL 기반 테이블 설계 및 데이터베이스 구축",
      "공공 API 활용 XML 및 JSON 데이터 수집·활용",
      "스프링 시큐리티, JPA 등 스프링 라이브러리 활용",
      "React 활용 웹페이지 개발",
      "OpenLayer, Cesium 기반 지도 서비스 개발",
      "git, GitHub 활용 형상 관리",
    ],
  },
  {
    title: "기술 스택",
    type: "tags",
    content: [
      "AWS",
      "Kubernetes",
      "Java",
      "Ajax",
      "Linux",
      "Spring Boot",
      "Docker",
      "MariaDB",
      "Redis",
      "NCP",
      "GitHub",
      "Spring Data JPA",
      "RDBMS",
      "MongoDB",
      "NoSQL",
      "Git",
      "MySQL",
    ],
  },
  {
    title: "포트폴리오",
    type: "projects",
    content: [
      {
        title: "서경대학교 졸업작품 - R언어 개발 웹사이트",
        date: "2024.03.01 ~ 2024.06.27",
        team: "1명",
        description: [
          "R언어에 대해 공부하고 직접 코딩할 수 있는 웹서비스 구현",
          "클라우드 인프라 환경에서 배포",
          "다른 사용자가 접속해 결과를 확인할 수 있도록 서버 운영",
        ],
        link: "https://github.com/hamster0410/Graduation-Project-at-Seokyeong-University",
      },
      {
        title: "KOSTA 국비지원 프로젝트 : 왓챠피디아",
        date: "2024.10.01 ~ 2024.10.15",
        team: "4명",
        description: [
          "왓챠피디아 클론코딩 프로젝트",
          "Spring Boot + Thymeleaf 기반 웹 페이지 구현",
          "세션 기반 로그인 기능 개발",
        ],
        link: "https://github.com/han000woo/kosta/tree/main/1%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/movie_pedia-main",
      },
      {
        title: "KOSTA 국비지원 프로젝트 : AnimalPing",
        date: "2024.11.01 ~ 2024.12.31",
        team: "4명",
        description: [
          "반려동물을 위한 커뮤니티 + 쇼핑몰 서비스 개발",
          "Spring Boot + React 기반",
          "JWT 토큰 인증 기반 로그인",
        ],
        link: "https://github.com/han000woo/kosta/tree/main/3%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/animal_shop_back-main",
      },
    ],
  },
  {
    title: "경력 및 교육",
    type: "history",
    content: [
      {
        title: "구직 중",
        date: "2025.09 ~ 현재",
        description: [
          "구직하게 될 회사에 다음 같은 기여를 할 수 있습니다.",
          "스프링부트와 리액트를 활용한 웹 개발",
          "RESTful API 설계와 및 클라우드 인프라 구축",
          "협업 및 커뮤니케이션",
        ],
      },
      {
        title: "지센소프트 서비스 개발부 근무",
        date: "2025.02 ~ 2025.08",
        description: [
          "오픈레이어 기반 지도 서비스 개발 및 유지보수",
          "Java, Spring Boot, MySQL 기반 웹 서비스 개발 및 운영",
          "기존 데모포탈 서비스 유지보수 및 신규 기능 개발",
          "공공데이터 활용 및 API 연동 개발",
        ],
      },
      {
        title: "KOSTA - 클라우드 자바 개발자 양성과정 수료",
        date: "2024.08 ~ 2024.12",
        description: [
          "HTML, CSS, JavaScript, React 웹 개발 학습",
          "Java, Spring Framework, MySQL 기반의 풀스택 개발 학습",
          "3번의 프로젝트를 통해 RESTful API, DB 설계, 클라우드 배포",
        ],
      },
      {
        title: "한국정보교육원 - 클라우드 엔지니어 양성과정 수료",
        date: "2023.07 ~ 2024.01",
        description: [
          "네트워크, 서버등 기본 컴퓨터 CS 학습",
          "방화벽, ssl vpn, IDS/IPS 등 보안 솔루션 구축 및 운영 경험",
          "클라우드 인프라 설계 및 운영(AWS, NCP) 역량 습득.",
          "Docker, Kubernetes 학습.",
        ],
      },
    ],
  },
  {
    title: "학력 및 자격증",
    type: "education",
    content: [
      {
        school: "서경대학교",
        major: "물류시스템공학과 & 컴퓨터공학과 (복수전공)",
        period: "2018.03 ~ 2024.08 (졸업)",
        gpa: "학점: 3.5/4.5",
      },
    ],
  },
  {
    title: "", // 학력과 자격증을 분리하기 위해 제목은 비워둠
    type: "certificate",
    content: [
      {
        title: "정보처리기사",
        date: "2024.12 최종합격",
      },
      {
        title: "TOEIC",
        date: "2024.04, 830점",
      },
      {
        title: "AWS Certified Solutions Architect",
        date: "2023.10 최종합격",
      },
      {
        title: "리눅스마스터 2급",
        date: "2023.12 최종합격",
      },
      {
        title: "네트워크관리사 2급",
        date: "2023.12 최종합격",
      },
    ],
  },
];

export default sectionsData;
