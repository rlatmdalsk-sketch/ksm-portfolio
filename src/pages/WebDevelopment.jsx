import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projectsData } from '../data/projects'
import Gentle1 from '../assets/Gentle1.JPG'
import Prospecs1 from '../assets/Prospecs1.JPG'
import Wetube2 from '../assets/Wetube2.png'
import PokeDex1 from '../assets/PokeDex1.JPG'
import movie1 from '../assets/movie1.JPG'
import AnimeExplorer1 from '../assets/AnimeExplorer1.JPG'
import PromegaLogo from '../assets/Promega_logo2.png'
import PromegaProject1 from '../assets/Promega_Project1.png'
import PromegaProject2 from '../assets/Promega_Project2.png'
import PromegaProject3 from '../assets/Promega_Project3.png'
import PromegaProject4 from '../assets/Promega_Project4.png'
import PromegaProject5 from '../assets/Promega_Project5.png'

const imageMap = {
  '/assets/Gentle1.JPG': Gentle1,
  '/assets/Prospecs1.JPG': Prospecs1,
  '/assets/Wetube2.png': Wetube2,
  '/assets/PokeDex1.JPG': PokeDex1,
  '/assets/movie1.JPG': movie1,
  '/assets/AnimeExplorer1.JPG': AnimeExplorer1,
  '/assets/Promega_logo2.png': PromegaLogo,
  '/assets/Promega_Project1.png': PromegaProject1,
  '/assets/Promega_Project2.png': PromegaProject2,
  '/assets/Promega_Project3.png': PromegaProject3,
  '/assets/Promega_Project4.png': PromegaProject4,
  '/assets/Promega_Project5.png': PromegaProject5,
}

const openInNewTab = (url) => window.open(url, '_blank', 'noopener,noreferrer')

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function OverlayButton({ href, children, small }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`border border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-colors ${
        small ? 'px-3 py-1 text-[10px]' : 'px-5 py-2 text-xs'
      }`}
    >
      {children}
    </a>
  )
}

function SectionHeader({ label, meta }) {
  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-3 mb-8">
      <span className="text-xs tracking-widest text-gray-500 uppercase">{label}</span>
      <span className="text-xs text-gray-400">{meta}</span>
    </div>
  )
}

export default function WebDevelopment() {
  const { professional, learning } = projectsData.webDevelopment

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
            <span className="text-black font-bold text-base tracking-tight">웹 개발</span>
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
          <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black break-keep">Web Development</h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-yellow-600 italic font-light">Publishing &amp; Frontend</p>
            <p className="mt-6 max-w-2xl text-sm text-gray-600 leading-relaxed">
              웹 표준 준수와 성능 최적화를 중시합니다. Promega Korea에서 Sitecore CMS 기반 웹페이지의 유지보수와 최적화를 담당했고,
              HTML/CSS, JavaScript, React, Open API를 활용한 학습 프로젝트를 진행했습니다.
            </p>
          </motion.div>

          {/* Professional */}
          {professional.map((project) => (
            <motion.section
              key={project.id}
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="mb-20"
            >
              <SectionHeader label="Professional" meta="Promega Korea · 2026.04 — 2026.09" />

              <div className="grid md:grid-cols-[240px_1fr] gap-6 lg:gap-8 items-start">
                <div className="md:self-center">
                  <div className="border border-gray-200 rounded-xl aspect-[4/3] overflow-hidden">
                    <img src={imageMap[project.image]} alt="Promega" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-gray-900">{project.title}</h2>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.description}</p>
                  <p className="mt-3 text-xs text-gray-400">{project.tags.join(' · ')}</p>
                </div>

                <div className="mt-4 md:mt-0 md:border-l md:border-gray-200 md:pl-6 lg:pl-8">
                  <h3 className="text-sm font-semibold text-gray-900 mb-5">주요 페이지</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                  {project.pages.map((page) => (
                    <div
                      key={page.name}
                      onClick={() => openInNewTab(page.link)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                        <img
                          src={imageMap[page.image]}
                          alt={page.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <OverlayButton href={page.link} small>LIVE</OverlayButton>
                        </div>
                      </div>
                      <p className="mt-2.5 text-xs font-semibold text-gray-900">{page.name}</p>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}

          {/* Learning */}
          <motion.section initial="hidden" animate="visible" variants={sectionVariants}>
            <SectionHeader label="Learning" meta={`${learning.length} Projects`} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {learning.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openInNewTab(project.link)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[2/1] rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                    <img
                      src={imageMap[project.image]}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <OverlayButton href={project.link}>LIVE</OverlayButton>
                      <OverlayButton href={project.github}>GITHUB</OverlayButton>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-bold text-gray-900">{project.title}</h3>
                    <span className="text-[11px] text-gray-400 shrink-0">0{project.id - 1}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
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
