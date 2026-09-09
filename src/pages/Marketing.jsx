import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, X } from 'lucide-react'
import { projectsData } from '../data/projects'
import { useState } from 'react'

export default function Marketing() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen bg-gray-200 p-8 flex items-center justify-center">
      {/* Windows 창 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300"
      >
        {/* 타이틀바 */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gray-900 rounded-sm"></div>
            <span className="text-black font-bold text-base tracking-tight">마케팅</span>
          </div>
          <div className="flex gap-3">
            <button className="w-8 h-8 hover:bg-gray-100 rounded-sm flex items-center justify-center text-black transition-all duration-200 text-lg">_</button>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-sm flex items-center justify-center text-black transition-all duration-200 text-lg">□</button>
            <Link to="/" className="w-8 h-8 hover:bg-red-500 hover:text-white rounded-sm flex items-center justify-center text-black transition-all duration-200 text-lg">✕</Link>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectsData.marketing.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer flex flex-col h-full"
              >
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-800 text-sm mb-4 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="inline-block px-2 py-1 bg-gray-100 text-gray-800 border border-gray-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 모달 */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-lg border border-gray-300 shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                >
                  {/* 모달 헤더 */}
                  <div className="sticky top-0 bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
                    <h2 className="text-xl font-bold text-black">{selectedProject.title}</h2>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-black hover:bg-gray-100 p-2 rounded-sm transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* 모달 내용 */}
                  <div className="p-6">
                    <p className="text-gray-800 text-base mb-6 leading-relaxed">{selectedProject.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-800 border border-gray-300 rounded text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
