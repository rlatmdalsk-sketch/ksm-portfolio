import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { projectsData } from '../data/projects'

const imageFiles = import.meta.glob('../assets/*', { eager: true, import: 'default' })
const getImage = (name) => imageFiles[`../assets/${name}`]

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function WebDesign() {
  const [selected, setSelected] = useState(null)
  const projects = projectsData.webDesign

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <div className="min-h-screen bg-gray-200 p-4 md:p-8 flex items-center justify-center">
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
            <span className="text-black font-bold text-base tracking-tight">디자인</span>
          </div>
          <div className="flex gap-3">
            <button className="w-8 h-8 hover:bg-gray-100 rounded-sm flex items-center justify-center text-black transition-all duration-200 text-lg">_</button>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-sm flex items-center justify-center text-black transition-all duration-200 text-lg">□</button>
            <Link to="/" className="w-8 h-8 hover:bg-red-500 hover:text-white rounded-sm flex items-center justify-center text-black transition-all duration-200 text-lg">✕</Link>
          </div>
        </div>

        {/* 내용 영역 */}
        <div className="bg-white px-6 py-8 md:px-12 md:py-10">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" />
            <span>돌아가기</span>
          </Link>

          {/* 헤더 */}
          <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black break-keep">Design</h1>
            <p className="mt-1 text-xl sm:text-2xl md:text-3xl text-yellow-600 italic font-light">Web &amp; Print</p>
            <p className="mt-6 max-w-2xl text-sm text-gray-600 leading-relaxed">
              웹 배너, 랜딩 페이지 비주얼, 채널 캐러셀 등의 웹 디자인과 명찰, 포스터, 부스 벽면, 기프트 등의 인쇄물 디자인을
              함께 작업합니다. Photoshop, Illustrator, Adobe Express를 사용합니다.
            </p>
          </motion.div>

          {/* 프로젠트 카드 */}
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-3 mb-8">
              <span className="text-xs tracking-widest text-gray-500 uppercase">Projects</span>
              <span className="text-xs text-gray-400">{projects.length} Projects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
              {projects.map((project, i) => (
                <div key={project.id} onClick={() => setSelected(project)} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                      <img
                        src={getImage(project.thumbnail)}
                        alt={project.title}
                        className={`w-full h-full object-cover ${project.thumbnailClass ?? ''}`}
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-5 py-2 border border-white text-white text-xs font-semibold tracking-wide hover:bg-white hover:text-black transition-colors">
                        VIEW
                      </span>
                    </div>
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/70 text-white text-[10px] font-medium">
                      {project.images.length}장
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-bold text-gray-900">{project.title}</h3>
                    <span className="text-[11px] text-gray-400 shrink-0">0{i + 1}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{project.description}</p>
                  <p className="mt-2 text-xs text-gray-400">{project.tags.join(' · ')}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 상태바 */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-3 flex justify-between text-xs text-gray-600 font-medium">
          <span>KSM</span>
          <span>2026</span>
        </div>
      </motion.div>

      {/* 갤러리 모달 */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg border border-gray-300 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            >
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200 shrink-0">
                <div>
                  <h2 className="text-lg font-bold text-black">{selected.title}</h2>
                  <p className="text-xs text-gray-500 mt-0.5">{selected.tags.join(' · ')}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-black hover:bg-gray-100 p-2 rounded-sm transition-all"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-6 space-y-6 bg-gray-50">
                <p className="text-sm text-gray-700 leading-relaxed">{selected.description}</p>
                {selected.images.map((name, idx) => (
                  <div key={name} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={getImage(name)}
                      alt={`${selected.title} ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
