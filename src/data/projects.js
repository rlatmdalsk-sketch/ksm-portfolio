export const projectsData = {
    marketing: [{
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
            title: 'CS페이지 최적화',
            description: '데이터 분석 기반 정보구조 재설계. 클릭율, 이탈율, 사용자 체류시간 개선',
            tags: ['UX Design', 'Data Analysis', 'CMS'],
        },
        {
            id: 4,
            title: '폼 설계 및 운영',
            description: 'Dynamics 365, Google Forms, FormStack을 활용한 만족도 조사, 신청 폼, 정보 수집 폼 설계 및 운영',
            tags: ['Form Design', 'CRM', 'Data Management'],
        },
    ],
    webDevelopment: {
        professional: [{
            id: 1,
            title: 'Promega Korea 웹페이지 유지보수',
            description: 'Sitecore CMS 기반 웹페이지 유지보수 및 최적화',
            tags: ['Sitecore', 'CMS', 'HTML/CSS'],
            pages: [{
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
        }, ],
        learning: [{
                id: 2,
                title: 'Gentle Monster Clone',
                description: '복잡한 레이아웃 구현, 이미지 최적화, 성능 최적화 학습',
                tags: ['HTML5', 'CSS3', 'JavaScript'],
                details: '그리드 시스템, 반응형 디자인, 성능 최적화',
                image: '/assets/Gentle1.JPG',
                category: 'learning',
            },
            {
                id: 3,
                title: 'Prospecs Clone',
                description: '시멘틱 마크업, 크로스 브라우징 호환성 학습',
                tags: ['HTML5', 'CSS3', 'Web Standards'],
                details: '마크업 구조 설계, 크로스 브라우징',
                image: '/assets/Prospecs1.JPG',
                category: 'learning',
            },
            {
                id: 4,
                title: 'Wetube (React)',
                description: '컴포넌트 기반 UI 설계, 상태 관리 학습',
                tags: ['React', 'CSS Modules', 'Components'],
                details: 'React 기초, 컴포넌트 설계',
                image: '/assets/Wetube1.JPG',
                category: 'learning',
            },
            {
                id: 5,
                title: 'Pokedex (REST API)',
                description: '대용량 데이터 렌더링, 무한 스크롤 구현',
                tags: ['REST API', 'Async-Await', 'JavaScript'],
                details: 'API 연동, 비동기 처리',
                image: '/assets/PokeDex1.JPG',
                category: 'learning',
            },
            {
                id: 6,
                title: 'Movie Search (Fetch API)',
                description: '실시간 검색, 동적 UI 렌더링',
                tags: ['Fetch API', 'Event Listener', 'DOM'],
                details: '검색 구현, 사용자 입력 처리',
                image: '/assets/movie1.JPG',
                category: 'learning',
            },
            {
                id: 7,
                title: 'Anime Explorer',
                description: 'JSON 파싱, 복잡한 데이터 구조 처리, 반응형 그리드 구현',
                tags: ['REST API', 'JSON Parsing', 'Grid Layout'],
                details: '데이터 분석, 시각화',
                image: '/assets/AnimeExplorer1.JPG',
                category: 'learning',
            },
        ],
    },
    webDesign: [{
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
        {
            id: 4,
            title: '네이버 블로그',
            description: 'Promega Korea 블로그 레이아웃 설계 및 배너 디자인. 통일된 브랜드 색상과 타이포그래피 적용',
            tags: ['Web Design', 'Branding', 'Content Layout'],
        },
    ],
}