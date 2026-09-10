import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, X } from 'lucide-react'
import { projectsData } from '../data/projects'
import { useState, useEffect } from 'react'

const imageFiles = import.meta.glob('../assets/*', { eager: true, import: 'default' })
const getImage = (name) => imageFiles[`../assets/${name}`]

export default function Marketing() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) return
    const onKey = (e) => e.key === 'Escape' && setSelectedProject(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

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
            <span className="text-black font-bold text-base tracking-tight">마케팅</span>
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

          {/* 제목 */}
          <div className="mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black break-keep">Marketing</h1>
            <p className="mt-1 text-xl sm:text-2xl md:text-3xl text-yellow-600 italic font-light">Digital &amp; Data</p>
            <div className="mt-6 max-w-2xl text-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                카카오톡 채널과 블로그 같은 콘텐츠 채널을 직접 운영하고, GA4 데이터를 바탕으로 페이지와 폼을 개선해
                방문이 실제 문의와 신청으로 이어지도록 만듭니다.
              </p>
              <p>
                검색광고마케터 1급과 Google Ads 자격을 보유하고 있으며, 검색 의도에 맞는 키워드 설계와 광고 성과 분석을 기반으로 마케팅을 진행합니다.
              </p>
            </div>
          </div>

          {/* 프로젝트 목록 */}
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
            <span className="text-xs tracking-widest text-gray-500 uppercase">Projects</span>
            <span className="text-xs text-gray-400">{projectsData.marketing.length} Projects</span>
          </div>

          <ul className="divide-y divide-gray-200">
            {projectsData.marketing.map((project, i) => (
              <li
                key={project.id}
                onClick={project.hasDetail ? () => setSelectedProject(project) : undefined}
                className={`group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[3rem_1fr_14rem_auto] items-start gap-4 md:gap-8 py-6 -mx-4 px-4 transition-colors ${
                  project.hasDetail ? 'cursor-pointer hover:bg-gray-50' : ''
                }`}
              >
                <span className="text-xs text-gray-400 font-mono pt-1">0{i + 1}</span>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{project.description}</p>
                  <p className="mt-2 text-xs text-gray-400 md:hidden">{project.tags.join(' · ')}</p>
                </div>
                <p className="hidden md:block text-xs text-gray-400 leading-relaxed pt-1">{project.tags.join(' · ')}</p>
                <span className={`w-4 pt-0.5 transition-all ${
                  project.hasDetail ? 'text-gray-300 group-hover:text-black group-hover:translate-x-1' : 'invisible'
                }`}>→</span>
              </li>
            ))}
          </ul>

          {/* 모달 */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-lg border border-gray-300 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
                >
                  {/* 모달 헤더 */}
                  <div className="px-4 md:px-6 py-4 flex items-center justify-between gap-4 border-b border-gray-200 shrink-0">
                    <div className="min-w-0">
                      <h2 className="text-base md:text-lg font-bold text-black truncate">{selectedProject.title}</h2>
                      <p className="text-xs text-gray-500 mt-0.5">{selectedProject.tags.join(' · ')}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-black hover:bg-gray-100 p-2 rounded-sm transition-all"
                      aria-label="닫기"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* 모달 내용 */}
                  <div className="overflow-y-auto p-4 md:p-6 space-y-8 md:space-y-10">
                    <p className="text-sm text-gray-700 leading-relaxed">{selectedProject.detail.summary}</p>

                    {/* 갤러리 */}
                    {selectedProject.detail.gallery && (
                      <section className="space-y-4">
                        {selectedProject.detail.gallery.map((g) => (
                          <figure key={g.image}>
                            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                              <img src={getImage(g.image)} alt={g.caption} className="w-full h-auto" />
                            </div>
                            <figcaption className="mt-2 text-xs text-gray-400">{g.caption}</figcaption>
                          </figure>
                        ))}
                      </section>
                    )}

                    {/* 작업 내용 */}
                    {selectedProject.detail.work && (
                      <section>
                        <div className="border-b border-gray-200 pb-3 mb-4">
                          <span className="text-xs tracking-widest text-gray-500 uppercase">Work</span>
                        </div>
                        <ul className="space-y-2">
                          {selectedProject.detail.work.map((item) => (
                            <li key={item} className="grid grid-cols-[0.75rem_1fr] gap-2 text-sm text-gray-700 leading-relaxed">
                              <span className="text-gray-300">–</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* 성과 */}
                    {selectedProject.detail.metrics && (
                    <section>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-gray-200 pb-3 mb-5">
                        <span className="text-xs tracking-widest text-gray-500 uppercase">Results</span>
                        <span className="text-xs text-gray-400">
                          {selectedProject.detail.period.before} → {selectedProject.detail.period.after} · 동일 4개월 비교
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                        {selectedProject.detail.metrics.map((m) => (
                          <div key={m.label} className="border border-gray-200 rounded-lg p-4 flex sm:block items-baseline justify-between">
                            <p className="text-xs text-gray-500">{m.label}</p>
                            <div className="text-right sm:text-left">
                              <p className="sm:mt-2 text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">{m.change}</p>
                              {m.sub && <p className="mt-0.5 text-xs text-gray-400">{m.sub}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-xs text-gray-400 leading-relaxed">{selectedProject.detail.note}</p>
                    </section>
                    )}

                    {/* Before / After 페이지 비교 */}
                    {selectedProject.detail.compare && (
                    <section>
                      <div className="border-b border-gray-200 pb-3 mb-5">
                        <span className="text-xs tracking-widest text-gray-500 uppercase">Before / After</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 items-start">
                        {[
                          { label: 'Before', caption: '기존 페이지', side: selectedProject.detail.compare.before, highlight: false },
                          { label: 'After', caption: '직접 재설계 · 배포', side: selectedProject.detail.compare.after, highlight: true },
                        ].map(({ label, caption, side, highlight }) => (
                          <div key={label}>
                            <div className="flex items-baseline gap-2 mb-2">
                              <p className={`text-xs font-semibold ${highlight ? 'text-yellow-600' : 'text-gray-500'}`}>{label}</p>
                              <p className="text-xs text-gray-400">{caption}</p>
                            </div>
                            <div className={`aspect-square rounded-lg overflow-hidden border ${
                              highlight ? 'border-yellow-500 border-2' : 'border-gray-200 opacity-80'
                            }`}>
                              <img src={getImage(side.image)} alt={`${label} 페이지 화면`} className="w-full h-full object-cover object-top" />
                            </div>
                            <ul className="mt-4 space-y-2">
                              {side.points.map((point) => (
                                <li key={point} className={`grid grid-cols-[0.75rem_1fr] gap-2 text-sm leading-relaxed ${
                                  highlight ? 'text-gray-800' : 'text-gray-500'
                                }`}>
                                  <span className={highlight ? 'text-yellow-600' : 'text-gray-300'}>{highlight ? '+' : '–'}</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>
                    )}

                    {/* GA4 */}
                    {selectedProject.detail.ga4 && (
                    <section>
                      <div className="border-b border-gray-200 pb-3 mb-5">
                        <span className="text-xs tracking-widest text-gray-500 uppercase">GA4 Page Engagement</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          ['Before', selectedProject.detail.ga4.before, selectedProject.detail.period.before],
                          ['After', selectedProject.detail.ga4.after, selectedProject.detail.period.after],
                        ].map(([label, file, period]) => (
                          <figure key={label}>
                            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                              <img src={getImage(file)} alt={`${label} GA4 화면`} className="w-full h-auto" />
                            </div>
                            <figcaption className="mt-2 flex items-baseline justify-between text-xs">
                              <span className="font-semibold text-gray-900">{label}</span>
                              <span className="text-gray-400">{period}</span>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </section>
                    )}
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
