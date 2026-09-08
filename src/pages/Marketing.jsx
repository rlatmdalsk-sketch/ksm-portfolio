import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projectsData } from '../data/projects'

export default function Marketing() {
  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      {/* Windows 창 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-black"
      >
        {/* 타이틀바 */}
        <div className="bg-black px-6 py-4 flex items-center justify-between border-b-2 border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-white border-2 border-black rounded-sm"></div>
            <span className="text-white font-bold text-base tracking-tight">마케팅</span>
          </div>
          <div className="flex gap-3">
            <button className="w-8 h-8 hover:bg-gray-700 rounded-sm flex items-center justify-center text-white transition-all duration-200 text-lg">_</button>
            <button className="w-8 h-8 hover:bg-gray-700 rounded-sm flex items-center justify-center text-white transition-all duration-200 text-lg">□</button>
            <Link to="/" className="w-8 h-8 hover:bg-black rounded-sm flex items-center justify-center text-white transition-all duration-200 text-lg border-2 border-white">✕</Link>
          </div>
        </div>

        {/* 내용 영역 */}
        <div className="bg-white px-8 py-10">
          {/* 뒤로가기 */}
          <Link to="/" className="inline-flex items-center gap-2 text-black hover:text-gray-700 mb-8 font-semibold text-lg">
            <ArrowLeft className="w-5 h-5" />
            <span>돌아가기</span>
          </Link>

          {/* 제목 */}
          <h1 className="text-4xl font-bold text-black mb-6">📊 Marketing</h1>
          <div className="mb-10 p-4 bg-gray-50 rounded-lg border border-gray-300">
            <p className="text-gray-800 font-medium mb-2">
              GA4 분석 기반 데이터 주도형 마케팅 경험
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              카카오톡 채널 운영부터 블로그 관리, CS페이지 최적화, 폼 설계, 웹 분석까지
              <br />
              전체 마케팅 사이클을 담당하며 Promega Korea의 디지털 마케팅을 주도했습니다.
            </p>
          </div>

          {/* 프로젝트 목록 */}
          <div className="space-y-4">
            {projectsData.marketing.map((project) => (
              <div
                key={project.id}
                className="bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                {/* 이미지 영역 */}
                <div className="w-full h-32 bg-gray-300 flex items-center justify-center">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-6xl text-gray-400">📷</div>
                  )}
                </div>

                {/* 내용 영역 */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-800 text-sm mb-3 leading-relaxed">{project.description}</p>

                  {project.result && (
                    <div className="mb-3 p-2 bg-gray-50 rounded border-l-4 border-black">
                      <p className="text-xs text-gray-700">
                        <span className="font-semibold">성과:</span> {project.result}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-block px-2 py-1 bg-black text-white rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
