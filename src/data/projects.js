export const projectsData = {
  marketing: [
    {
      id: 1,
      title: 'Kakao Channel 운영 전략',
      description: '카카오톡 채널 기획부터 배포까지 전담. 정기적인 메시지 템플릿 설계 및 비즈니스 폼 구축',
      tags: ['Channel Strategy', 'Content Marketing', 'Analytics'],
      image: null,
    },
    {
      id: 2,
      title: 'Brand Blog 운영 및 최적화',
      description: '블로그 레이아웃 설계, 이미지/그래픽 작성, SEO 최적화',
      tags: ['Content Strategy', 'SEO', 'GA4'],
      result: '조회수 ↑, 검색 순위 향상',
    },
    {
      id: 3,
      title: 'CS페이지 최적화 (핵심 사례)',
      description: 'GA4 데이터 분석 기반 정보구조 재설계. 클릭율, 이탈율, 사용자 체류시간 개선',
      tags: ['UX Design', 'Data Analysis', 'CMS'],
      result: '클릭율 ↑, 이탈율 ↓, 체류시간 ↑',
    },
    {
      id: 4,
      title: 'Google Forms & Survey 설계',
      description: '만족도 조사, 신청 폼, 정보 수집 폼, Discover Glo 등 다양한 폼 설계 및 운영',
      tags: ['Form Design', 'CRM', 'Data Management'],
      result: '데이터 기반 인사이트 도출',
    },
    {
      id: 5,
      title: 'GA4 웹 분석 및 성과 추적',
      description: 'Discover Glo 캠페인 성과 분석, 블로그 조회수 & 검색 분석, CS페이지 개선 지표 추적',
      tags: ['GA4', 'Data-Driven', 'Analytics'],
      result: '의사결정 기반 데이터 제공',
    },
    {
      id: 6,
      title: '해외 본사와의 국제 협업',
      description: 'Promega USA와 프로젝트 협력. 이메일/회의를 통한 실시간 소통, 캠페인 페이지 설계 협력',
      tags: ['International', 'Communication', 'Marketing'],
      result: '문화 간 소통 경험',
    },
  ],
  webDevelopment: {
    professional: [
      {
        id: 1,
        title: 'Sitecore CMS',
        description: 'Promega Korea 웹페이지 유지보수 및 최적화',
        tags: ['Sitecore', 'CMS', 'HTML/CSS'],
        pages: [
          {
            name: 'Promo Event & Program',
            description: '레이아웃 개선, 반응형 디자인 최적화'
          },
          {
            name: '3D Assay Resource-center',
            description: '기술 정보 정리, 네비게이션 개선'
          },
          {
            name: 'Promega Connections',
            description: '사이드바 디자인 변경, Sticky 기능 추가'
          },
          {
            name: 'Customer Service',
            description: '정보 구조 재설계, 사용자 경험 개선, GA4 분석'
          },
          {
            name: 'Discover Glo 2026',
            description: '폼 임베딩, 페이지 최적화'
          },
        ],
        category: 'professional',
      },
    ],
    learning: [
      {
        id: 2,
        title: 'Gentle Monster Clone',
        description: '복잡한 레이아웃 구현, 이미지 최적화, 성능 최적화 학습',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        details: '그리드 시스템, 반응형 디자인, 성능 최적화',
        category: 'learning',
      },
      {
        id: 3,
        title: 'Prospecs Clone',
        description: '시멘틱 마크업, 크로스 브라우징 호환성 학습',
        tags: ['HTML5', 'CSS3', 'Web Standards'],
        details: '마크업 구조 설계, 크로스 브라우징',
        category: 'learning',
      },
      {
        id: 4,
        title: 'Wetube (React)',
        description: '컴포넌트 기반 UI 설계, 상태 관리 학습',
        tags: ['React', 'CSS Modules', 'Components'],
        details: 'React 기초, 컴포넌트 설계',
        category: 'learning',
      },
      {
        id: 5,
        title: 'Pokedex (REST API)',
        description: '대용량 데이터 렌더링, 무한 스크롤 구현',
        tags: ['REST API', 'Async-Await', 'JavaScript'],
        details: 'API 연동, 비동기 처리',
        category: 'learning',
      },
      {
        id: 6,
        title: 'Movie Search (Fetch API)',
        description: '실시간 검색, 동적 UI 렌더링',
        tags: ['Fetch API', 'Event Listener', 'DOM'],
        details: '검색 구현, 사용자 입력 처리',
        category: 'learning',
      },
      {
        id: 7,
        title: 'Anime Explorer',
        description: 'JSON 파싱, 복잡한 데이터 구조 처리, 반응형 그리드 구현',
        tags: ['REST API', 'JSON Parsing', 'Grid Layout'],
        details: '데이터 분석, 시각화',
        category: 'learning',
      },
    ],
  },
  webDesign: [
    {
      id: 1,
      title: 'Discover Glo 2026 심포지엄',
      description: '비주얼 아이덴티티 정의. 포스터, 명찰, 배경화면, 웹 UI 등 다양한 디자인 산출물 제작',
      tags: ['Brand Design', 'Visual Identity', 'Adobe'],
    },
    {
      id: 2,
      title: 'KSMCB 학회',
      description: '학회 참석자 정보 안내 물품 디자인. 장패드에 제목, 위생 개요, 기술 정보 담음',
      tags: ['Event Design', 'Branding', 'Print'],
    },
    {
      id: 3,
      title: '동물 위생 학회',
      description: '학회 현장 벽면에 설치되는 인포그래픽 디자인. 주요 메시지, 기술 정보, QR 코드 포함',
      tags: ['Infographic', 'Event Design', 'Adobe'],
    },
  ],
}
