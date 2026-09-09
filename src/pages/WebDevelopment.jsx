import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { projectsData } from '../data/projects'
import { useState } from 'react'
import Gentle1 from '../assets/Gentle1.JPG'
import Prospecs1 from '../assets/Prospecs1.JPG'
import Wetube1 from '../assets/Wetube1.JPG'
import PokeDex1 from '../assets/PokeDex1.JPG'
import movie1 from '../assets/movie1.JPG'
import AnimeExplorer1 from '../assets/AnimeExplorer1.JPG'

const imageMap = {
  '/assets/Gentle1.JPG': Gentle1,
  '/assets/Prospecs1.JPG': Prospecs1,
  '/assets/Wetube1.JPG': Wetube1,
  '/assets/PokeDex1.JPG': PokeDex1,
  '/assets/movie1.JPG': movie1,
  '/assets/AnimeExplorer1.JPG': AnimeExplorer1,
}

export default function WebDevelopment() {
  const [expandedProjects, setExpandedProjects] = useState({ 1: true })

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }
  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      {/* Windows 창 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
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
              HTML/CSS, JavaScript, React, API 등 다양한 기술을 활용한 프로젝트를 진행했습니다.
              <br />
              Promega Korea에서는 Sitecore CMS 기반 웹페이지의 유지보수와 최적화를 담당했습니다.
            </p>
          </div>

          {/* 프로젝트 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sitecore CMS - 전체 너비 */}
            {projectsData.webDevelopment.professional.map((project) => (
              <div
                key={project.id}
                className="md:col-span-2 bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
              >
                {/* 이미지 영역 */}
                <div className="w-full h-32 bg-gray-300 flex items-center justify-center flex-shrink-0">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-6xl text-gray-400">💻</div>
                  )}
                </div>

                {/* 내용 영역 */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                    <p className="text-gray-800 text-sm mb-3 leading-relaxed">{project.description}</p>

                    {project.pages && (
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">주요 페이지</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.pages.map((page, idx) => (
                            <div key={idx} className="bg-white border border-gray-300 rounded overflow-hidden">
                              <div className="w-full h-24 bg-gray-300 flex items-center justify-center">
                                {page.image ? (
                                  <img src={page.image} alt={page.name} className="w-full h-full object-cover" />
                                ) : (
                                  <div className="text-2xl text-gray-400">📄</div>
                                )}
                              </div>
                              <div className="p-2">
                                <p className="font-semibold text-gray-900 text-xs">{page.name}</p>
                                <p className="text-gray-700 text-xs mt-1">{page.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
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

            {/* Learning 프로젝트 - 2 컬럼 그리드 */}
            {projectsData.webDevelopment.learning.map((project) => (
              <div
                key={project.id}
                className="bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
              >
                {/* 이미지 영역 */}
                <div className="w-full h-32 bg-gray-300 flex items-center justify-center flex-shrink-0">
                  {project.image ? (
                    <img src={imageMap[project.image]} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-6xl text-gray-400">💻</div>
                  )}
                </div>

                {/* 내용 영역 */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                    <p className="text-gray-800 text-sm mb-3 leading-relaxed">{project.description}</p>

                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
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
