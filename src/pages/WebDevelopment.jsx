import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projectsData } from '../data/projects'

export default function WebDevelopment() {
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
            <span className="text-white font-bold text-base tracking-tight">웹 개발</span>
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
          <h1 className="text-4xl font-bold text-black mb-6">💻 Web Development</h1>
          <div className="mb-10 p-4 bg-gray-50 rounded-lg border border-gray-300">
            <p className="text-gray-800 font-medium mb-2">
              웹 표준 준수와 성능 최적화를 중시하는 개발
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              6개의 학습 프로젝트를 통해 HTML/CSS, JavaScript, React, API를 학습했습니다.
              <br />
              Promega Korea에서는 Sitecore CMS 기반 5개 페이지의 유지보수와 최적화를 담당했습니다.
            </p>
          </div>

          {/* 실무 경험 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4 pb-3 border-b-2 border-black">
              💼 실무 경험
            </h2>
            <div className="space-y-4">
              {projectsData.webDevelopment.professional.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all"
                >
                  {/* 이미지 영역 */}
                  <div className="w-full h-32 bg-gray-300 flex items-center justify-center">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-6xl text-gray-400">💻</div>
                    )}
                  </div>

                  {/* 내용 영역 */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                    <p className="text-gray-800 text-sm mb-3 leading-relaxed">{project.description}</p>

                    {project.pages && (
                      <div className="space-y-2 mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm">주요 페이지</h4>
                        {project.pages.map((page, idx) => (
                          <div key={idx} className="p-2 bg-gray-50 rounded border-l-4 border-black">
                            <p className="font-semibold text-gray-900 text-sm">{page.name}</p>
                            <p className="text-xs text-gray-700 mt-1">{page.description}</p>
                          </div>
                        ))}
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

          {/* 학습 프로젝트 */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-4 pb-3 border-b-2 border-black">
              📚 학습 프로젝트
            </h2>
            <div className="space-y-4">
              {projectsData.webDevelopment.learning.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border-2 border-black rounded-lg p-4 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-800 text-sm mb-3 leading-relaxed">{project.description}</p>

                  {project.details && (
                    <div className="mb-3 p-2 bg-gray-50 rounded border-l-4 border-black">
                      <p className="text-xs text-gray-700">
                        <span className="font-semibold">주요 학습:</span> {project.details}
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
              ))}
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
