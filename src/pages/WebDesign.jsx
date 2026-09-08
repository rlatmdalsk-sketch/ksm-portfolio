import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projectsData } from '../data/projects'

export default function WebDesign() {
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
            <span className="text-white font-bold text-base tracking-tight">웹 디자인</span>
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
          <h1 className="text-4xl font-bold text-black mb-6">🎨 Web Design</h1>
          <div className="mb-10 p-4 bg-gray-50 rounded-lg border border-gray-300">
            <p className="text-gray-800 font-medium mb-2">
              브랜드 아이덴티티 설계와 다중 매체 디자인
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Discover Glo 2026 심포지엄 브랜드 설계부터 KSMCB 학회, 동물 위생 학회 등
              포스터, 명찰, 웹 UI, 배경화면, 배너 등 다양한 매체의 디자인을 담당했습니다.
            </p>
            <p className="text-gray-700 text-sm font-medium">
              <span className="font-semibold">기술:</span> Photoshop, Adobe Illustrator, Figma를 활용한 웹 및 인쇄 디자인 진행
            </p>
          </div>

          {/* 프로젝트 목록 */}
          <div className="space-y-6">
            {projectsData.webDesign.map((project) => (
              <div
                key={project.id}
                className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-800 text-base mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="inline-block px-3 py-1 bg-black text-white rounded text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 상태바 */}
        <div className="bg-gray-100 border-t-2 border-black px-6 py-3 flex justify-between text-xs text-black font-medium">
          <span>✓ Ready</span>
          <span>웹 디자인</span>
        </div>
      </motion.div>
    </div>
  )
}
