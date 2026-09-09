import { Link } from 'react-router-dom'

const getFolderColors = (title) => {
  const colors = {
    '마케팅': {
      icon: '📊',
    },
    '웹 개발': {
      icon: '💻',
    },
    '웹 디자인': {
      icon: '🎨',
    },
  }
  return colors[title] || colors['마케팅']
}

export default function SectionFolder({ title, description, path, projectCount }) {
  const colors = getFolderColors(title)

  return (
    <Link to={path} className="h-full">
      <div className="group cursor-pointer h-full">
        <div className="relative h-full flex flex-col">
          {/* 폴더 탭 - 미니멀 */}
          <div className="h-12 w-fit max-w-[calc(100%-0.5rem)] bg-gray-200 flex items-center px-4 font-bold text-black ml-2 border-2 border-black border-b-0 rounded-t-lg">
            <span className="text-lg mr-2 shrink-0">{colors.icon}</span>
            <span className="truncate">{title}</span>
          </div>

          {/* 폴더 본체 - 미니멀 */}
          <div className="flex-1 bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-black rounded-b-lg flex flex-col">
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
              </div>

              {/* 폴더 아이콘과 숫자 */}
              <div className="pt-4 border-t-2 border-black mt-auto">
                <span className="text-lg font-semibold text-gray-900">
                  📁 {projectCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
