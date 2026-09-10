import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}
import SectionFolder from '../components/SectionFolder'
import { projectsData } from '../data/projects'
import profileImage from '../assets/profile_image.jpg'

const skillIcons = import.meta.glob('../assets/skills/*.svg', { eager: true, import: 'default' })
const icon = (name) => skillIcons[`../assets/skills/${name}.svg`]

const skills = [
  { name: 'HTML5', icon: icon('html5') },
  { name: 'CSS3', icon: icon('css') },
  { name: 'JavaScript', icon: icon('javascript') },
  { name: 'React', icon: icon('react') },
  { name: 'Git', icon: icon('git') },
  { name: 'Photoshop', badge: { text: 'Ps', bg: '#001E36', fg: '#31A8FF' } },
  { name: 'Illustrator', badge: { text: 'Ai', bg: '#330000', fg: '#FF9A00' } },
  { name: 'Adobe Express', badge: { text: 'Ax', bg: '#3A0B33', fg: '#FF2BC2' } },
  { name: 'Sitecore', icon: icon('sitecore') },
  { name: 'Dynamics 365', badge: { text: 'D365', bg: '#002050', fg: '#0078D4' } },
  { name: 'GA4', icon: icon('googleanalytics') },
  { name: 'Notion', icon: icon('notion') },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('intro')
  const isFirstRender = useRef(true)
  const [skipAnimation, setSkipAnimation] = useState(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      setSkipAnimation(false)
    }
  }, [activeTab])

  return (
    <div className="min-h-screen bg-gray-200 p-4 md:p-8 flex items-center justify-center">
      {/* Windows 창 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-[1088px] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300"
      >
        {/* 타이틀바 */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gray-900 rounded-sm"></div>
            <span className="text-black font-bold text-base tracking-tight">Portfolio</span>
          </div>
          <div className="flex gap-3">
            <button className="w-8 h-8 hover:bg-gray-100 rounded-sm flex items-center justify-center text-black transition-all duration-200 text-lg">_</button>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-sm flex items-center justify-center text-black transition-all duration-200 text-lg">□</button>
            <button className="w-8 h-8 hover:bg-red-500 hover:text-white rounded-sm flex items-center justify-center text-black transition-all duration-200 text-lg">✕</button>
          </div>
        </div>

        {/* 내용 영역 */}
        <div className="bg-white px-6 py-8 md:px-12 md:py-10">
          <div className="grid items-start md:grid-cols-[255px_1fr] lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
            {/* 왼쪽: 프로필 */}
            <div className="flex flex-col gap-8">
              {/* 프로필 사진 */}
              <div className="w-full rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={profileImage} alt="프로필 사진" className="w-full h-full object-cover" />
              </div>

              {/* 개인 정보 */}
              <div className="flex flex-col divide-y divide-gray-200">
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-xs tracking-widest text-gray-500 uppercase shrink-0">Name</span>
                  <span className="text-right text-sm text-gray-900">Kim Seungmin</span>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-xs tracking-widest text-gray-500 uppercase shrink-0">Birthdate</span>
                  <span className="text-right text-sm text-gray-900">2002.01.27</span>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-xs tracking-widest text-gray-500 uppercase shrink-0">Location</span>
                  <span className="text-right text-sm text-gray-900">Siheung, Korea</span>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-xs tracking-widest text-gray-500 uppercase shrink-0">Email</span>
                  <span className="text-right text-sm text-gray-900">rlatmdalsk@naver.com</span>
                </div>
              </div>
            </div>

            {/* 오른쪽: 소개 및 탭 */}
            <div className="flex flex-col gap-0">
              {/* 제목 */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black break-keep">Web Publisher</h1>
                <p className="mt-1 text-xl sm:text-2xl md:text-3xl text-yellow-600 italic font-light">Marketing &amp; Design</p>
              </div>

              {/* 탭 버튼 */}
              <div className="flex mb-8 border-b border-black/20 h-12">
                {[
                  { id: 'intro', label: '소개' },
                  { id: 'career', label: '경력' },
                  { id: 'certification', label: '자격증' },
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 text-sm font-semibold h-12 flex items-center justify-center cursor-pointer hover:text-black border-b-2 transition-colors duration-300 ${
                      activeTab === tab.id ? 'text-black border-black' : 'text-gray-600 border-transparent'
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* 탭 내용 */}
              <motion.div
                className="text-gray-800 leading-relaxed text-sm space-y-4 min-h-[180px]"
                key={activeTab}
                initial={skipAnimation ? "visible" : "hidden"}
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.05,
                    },
                  },
                }}
              >
                {activeTab === 'intro' && (
                  <motion.div
                    variants={{
                      hidden: { y: 16, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <p className="font-semibold text-gray-900">
                      웹 개발, 마케팅, 디자인을 통합하는 웹 퍼블리셔
                    </p>
                    <p className="mt-4">
                      React와 Sitecore CMS로 서비스를 개발·배포하고, GA4 데이터를 기반으로 구현한 페이지가 실제로 어떻게 사용되고 어떤 결과를 내는지까지 함께 봅니다.
                    </p>
                    <p className="mt-4">
                      동시에 카카오톡 채널, 블로그 같은 마케팅 채널을 직접 운영하고, 배너·포스터·굿즈 등 디자인도 제작합니다.
                    </p>
                    <p className="mt-4">
                      개발, 마케팅, 디자인이 따로 놀지 않고 하나의 비즈니스 목표로 통합되는 것이 제 강점입니다.
                    </p>
                    <div className="mt-6">
                      <a
                        href="https://github.com/rlatmdalsk-sketch/ksm-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 border-2 border-black rounded text-sm font-semibold hover:bg-black hover:text-white transition-all"
                      >
                        <GithubIcon className="w-4 h-4" /> VISIT GITHUB
                      </a>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'career' && (
                  <motion.div
                    className="relative space-y-6 before:absolute before:left-[5px] before:top-[11px] before:bottom-4 before:w-px before:bg-gray-200"
                    variants={{
                      hidden: { y: 16, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {[
                      {
                        period: '2026.04 — 2026.09',
                        org: 'Promega Korea',
                        role: 'Web Publisher, Marketer, Designer Intern',
                        desc: 'Sitecore CMS 페이지 운영 및 유지보수, 마케팅 채널(카톡, 블로그) 운영, GA4 분석. 디지털 마케팅 및 인쇄 물품 디자인.',
                      },
                      {
                        period: '2025.09 — 2026.03',
                        org: '라인컴퓨터 아트학원',
                        role: 'Node.JS 기반 Open API를 활용한 응용 소프트웨어 개발자 양성 과정',
                        desc: 'React 프레임워크를 메인으로 하여 컴포넌트 기반 UI/UX 설계 및 상태 관리 학습. Node.js와 Open API를 연동하여 비동기 데이터를 실제 화면에 효율적으로 렌더링하는 퍼블리싱 기술 숙달.',
                      },
                      {
                        period: '2021.03 — 2025.02',
                        org: '인하공업전문대학교',
                        role: '정보통신학과 졸업',
                        desc: '네트워크 구조 및 통신 프로토콜 이해, 프로그래밍 기초(C, Java) 및 웹개발실습',
                      },
                    ].map((item) => (
                      <div key={item.period} className="relative pl-6">
                        <span className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full border-2 border-black bg-white" />
                        <p className="text-[11px] font-mono tracking-wide text-gray-500">{item.period}</p>
                        <p className="mt-1 text-base font-bold text-gray-900">{item.org}</p>
                        <p className="mt-0.5 text-xs font-medium text-yellow-700">{item.role}</p>
                        <p className="mt-2 text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'certification' && (
                  <motion.div
                    className="space-y-3"
                    variants={{
                      hidden: { y: 16, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {[
                      { name: '검색광고마케터 1급', issuer: '한국정보통신진흥협회', year: '2025' },
                      { name: 'GoogleAds', issuer: 'Google', year: '2025' },
                      { name: '운전면허 2종보통', issuer: '도로교통공단', year: '2020' },
                    ].map((cert) => (
                      <div
                        key={cert.name}
                        className="flex items-center justify-between gap-4 px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-yellow-500 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">🏅</span>
                          <div>
                            <p className="font-semibold text-gray-900">{cert.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-yellow-600 shrink-0">{cert.year}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>

            </div>
          </div>

          {/* 기술 */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-widest text-gray-500 uppercase">Skills &amp; Tools</span>
              <span className="h-px w-12 bg-gray-300" />
            </div>

            <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group aspect-square border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-gray-400 hover:shadow-md transition-all duration-300"
                >
                  {skill.icon ? (
                    <img src={skill.icon} alt="" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                  ) : (
                    <span
                      className="w-10 h-10 rounded-md flex items-center justify-center text-sm font-bold tracking-tight transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: skill.badge.bg, color: skill.badge.fg }}
                    >
                      {skill.badge.text}
                    </span>
                  )}
                  <span className="text-xs font-medium text-gray-600">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 프로젝트 */}
          <div className="mt-16">
            {/* 섹션 폴더 */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs tracking-widest text-gray-500 uppercase">Project Category</span>
              <span className="h-px w-12 bg-gray-300" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-max">
              <SectionFolder
                title="마케팅"
                description="데이터 분석 기반의 전략 수립과 캠페인 실행"
                path="/marketing"
                projectCount={projectsData.marketing.length}
              />
              <SectionFolder
                title="웹 개발"
                description="CMS 기반 페이지 운영과 React로 구현하는 프론트엔드"
                path="/web-development"
                projectCount={projectsData.webDevelopment.professional.length + projectsData.webDevelopment.learning.length}
              />
              <SectionFolder
                title="디자인"
                description="브랜드 아이덴티티와 비주얼 디자인"
                path="/web-design"
                projectCount={projectsData.webDesign.length}
              />
            </div>
          </div>
        </div>

        {/* 상태바 */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-3 flex justify-between text-xs text-gray-600 font-medium">
          <span>KSM</span>
          <span>2026</span>
        </div>
      </motion.div>
    </div>
  )
}
