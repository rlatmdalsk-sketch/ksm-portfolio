import { Link } from 'react-router-dom'

export default function SectionFolder({ title, description, path, projectCount }) {
  return (
    <Link to={path} className="h-full">
      <div className="group cursor-pointer h-full">
        <div className="relative h-full flex flex-col">
          {/* 폴더 탭 */}
          <div className="h-12 w-28 bg-gray-100 ml-2 border border-gray-300 border-b-0 rounded-t-lg" />

          {/* 폴더 본체 */}
          <div className="flex-1 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-300 rounded-b-lg flex flex-col">
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
              </div>

              <div className="pt-4 border-t border-gray-200 mt-auto flex items-baseline justify-between">
                <span className="text-sm font-semibold text-gray-900">{projectCount} Projects</span>
                <span className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
