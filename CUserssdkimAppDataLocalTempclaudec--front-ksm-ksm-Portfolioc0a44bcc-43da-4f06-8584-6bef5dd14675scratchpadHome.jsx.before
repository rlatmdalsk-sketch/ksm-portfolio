import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import SectionFolder from '../components/SectionFolder'
import { projectsData } from '../data/projects'

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
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      {/* Windows 창 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-black"
      >
        {/* 타이틀바 */}
        <div className="bg-black px-6 py-4 flex items-center justify-between border-b-2 border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-white border-2 border-black rounded-sm"></div>
            <span className="text-white font-bold text-base tracking-tight">Portfolio</span>
          </div>
          <div className="flex gap-3">
            <button className="w-8 h-8 hover:bg-gray-700 rounded-sm flex items-center justify-center text-white transition-all duration-200 text-lg">_</button>
            <button className="w-8 h-8 hover:bg-gray-700 rounded-sm flex items-center justify-center text-white transition-all duration-200 text-lg">□</button>
            <button className="w-8 h-8 hover:bg-black rounded-sm flex items-center justify-center text-white transition-all duration-200 text-lg border-2 border-white">✕</button>
          </div>
        </div>

        {/* 내용 영역 */}
        <div className="bg-white px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 왼쪽: 프로필 */}
            <div className="flex flex-col items-center">
              {/* 프로필 사진 */}
              <div className="w-full bg-gray-300 rounded-lg mb-6 aspect-square flex items-center justify-center">
                <div className="text-8xl">👤</div>
              </div>

              {/* 개인 정보 */}
              <div className="w-full space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold text-xs tracking-widest">NAME</span>
                  <span className="text-gray-900 font-semibold">Kim Seungmin</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold text-xs tracking-widest">BIRTHDATE</span>
                  <span className="text-gray-900">2002.01.27</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold text-xs tracking-widest">LOCATION</span>
                  <span className="text-gray-900">Siheung, Korea</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-semibold text-xs tracking-widest">EMAIL</span>
                  <span className="text-gray-900 text-xs">rlatmdalsk@naver.com</span>
                </div>
              </div>
            </div>

            {/* 오른쪽: 소개 및 탭 */}
            <div className="col-span-2">
              {/* 제목 */}
              <div className="mb-8">
                <h1 className="text-5xl font-bold text-black">Web Developer</h1>
                <p className="text-3xl text-yellow-600 italic font-light">Publisher</p>
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
                    <p>
                      웹 표준을 준수하며 마케팅과 디자인을 이해하는 개발자입니다. Sitecore CMS 페이지 유지보수, GA4 분석 기반 성능 최적화, Discover Glo 심포지엄 브랜드 설계 등 웹 표준, 마케팅, 디자인을 넘나드는 경험을 가지고 있습니다.
                    </p>
                    <p className="mt-4">
                      또한, 최신 기술을 학습에 적극적으로 활용하여 표준을 높이고, 더 정교한 인터랙션과 코드 구조를 설계합니다.
                    </p>
                    <div className="mt-6">
                      <a
                        href="https://github.com/rlatmdalsk-sketch/ksm-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 border-2 border-black rounded text-sm font-semibold hover:bg-black hover:text-white transition-all"
                      >
                        <span>🔗</span> VISIT GITHUB
                      </a>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'career' && (
                  <motion.div
                    className="space-y-4"
                    variants={{
                      hidden: { y: 16, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <div>
                      <p className="font-semibold text-gray-900">Promega Korea</p>
                      <p className="text-gray-600 text-xs">2024 - 현재</p>
                      <ul className="mt-2 text-xs space-y-1 text-gray-700">
                        <li>• Sitecore CMS 기반 5개 페이지 유지보수 및 최적화</li>
                        <li>• GA4 분석 기반 CS페이지 성능 개선</li>
                        <li>• 마케팅 전략 수립 및 캠페인 운영</li>
                        <li>• 브랜드 설계 및 이벤트 디자인</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'certification' && (
                  <motion.p
                    className="text-gray-600"
                    variants={{
                      hidden: { y: 16, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    준비 중입니다.
                  </motion.p>
                )}
              </motion.div>

            </div>
          </div>

          {/* 구분선 */}
          <div className="border-t-2 border-gray-200 mt-12 pt-12">
            {/* 섹션 폴더 */}
            <h2 className="text-2xl font-bold text-black mb-8">Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-max">
              <SectionFolder
                title="마케팅"
                description="데이터 분석 기반의 전략 수립과 캠페인 실행"
                path="/marketing"
                projectCount={projectsData.marketing.length}
              />
              <SectionFolder
                title="웹 개발"
                description="React, JavaScript로 구현하는 프론트엔드"
                path="/web-development"
                projectCount={projectsData.webDevelopment.professional.length + projectsData.webDevelopment.learning.length}
              />
              <SectionFolder
                title="웹 디자인"
                description="사용자 중심의 인터페이스와 비주얼 디자인"
                path="/web-design"
                projectCount={projectsData.webDesign.length}
              />
            </div>
          </div>
        </div>

        {/* 상태바 */}
        <div className="bg-gray-100 border-t-2 border-black px-6 py-3 flex justify-between text-xs text-black font-medium">
          <span>KSM</span>
          <span>2026</span>
        </div>
      </motion.div>
    </div>
  )
}
