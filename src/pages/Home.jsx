import { motion } from 'framer-motion'
import SectionFolder from '../components/SectionFolder'
import { projectsData } from '../data/projects'

export default function Home() {

  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      {/* Windows 창 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-black"
      >
        {/* 타이틀바 - 검정 */}
        <div className="bg-black px-6 py-4 flex items-center justify-between border-b-2 border-gray-300">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 bg-white border-2 border-black rounded-sm"
            ></motion.div>
            <span className="text-white font-bold text-base tracking-tight">Portfolio</span>
          </div>
          <div className="flex gap-3">
            <button className="w-8 h-8 hover:bg-gray-700 rounded-sm flex items-center justify-center text-white transition-all duration-200 text-lg">_</button>
            <button className="w-8 h-8 hover:bg-gray-700 rounded-sm flex items-center justify-center text-white transition-all duration-200 text-lg">□</button>
            <button className="w-8 h-8 hover:bg-black rounded-sm flex items-center justify-center text-white transition-all duration-200 text-lg border-2 border-white">✕</button>
          </div>
        </div>

        {/* 내용 영역 - 미니멀 */}
        <div className="bg-white px-8 py-10">
          {/* 헤더 */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-black mb-4">
              안녕하세요
            </h1>
            <p className="text-xl text-gray-800 mb-3 font-medium">
              마케팅, 웹 개발, 웹 디자인을 경험한 멀티 크리에이터입니다.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              데이터 기반의 마케팅 전략부터 디자인 시스템 구축, 웹 개발 구현까지
              <br />
              다양한 분야에서 경험을 쌓아왔습니다.
            </p>
          </div>

          {/* 섹션 폴더 */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">경험 분야</h2>
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
                projectCount={projectsData.webDevelopment.length}
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
          <span>✓ Ready</span>
          <span>v1.0</span>
        </div>
      </motion.div>
    </div>
  )
}
