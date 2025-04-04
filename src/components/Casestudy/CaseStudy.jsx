import React from 'react'

const CaseStudy = () => {
  return (
    <div>
      <div className="flex">
        <div className="grid grid-cols-2 px-44 pt-24 pb-7">
          <div className="relative overflow-hidden">
            <img
              src={Case_1}
              alt=""
              className={`w-full px-3 transition-transform duration-1000 ease-out ${
                animateFirstCase ? "translate-x-0" : "-translate-x-full"
              }`}
            />
            <div className="absolute top-0 left-[-50px] w-[649px] h-[400px] flex items-center justify-center">
              <div className="text-[198px] font-bold text-[#F7F7F8]">
                CASE STUDY
              </div>
            </div>
          </div>

          <div className="py-10 px-4 space-y-6">
            <button className="border-2 border-blue-600 cursor-pointer hover:bg-sky-600 px-10 py-2 text-blue-500 font-medium hover:text-white">
              Study 01
            </button>
            <p className="text-3xl font-bold">Vision to plan</p>
            <p className="text-[#7A7A7A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <ul className="list-none space-y-2 text-[#7A7A7A]">
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="text-yellow-300"
                />
                <span>
                  Ut perspiciatis unde omnis iste natus error sit volupt atem.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="text-yellow-300"
                />
                <span>Accusantium dolorem que laudantium totam rem</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="text-yellow-300"
                />
                <span>
                  Eaque ipsa quae ab illo inventore veritatis et quasi
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* case study */}

      <div className="flex">
        <div className="grid grid-cols-2 px-44 pt-24 pb-7">
          <div className="px-4 pt-8 pb-16 space-y-6">
            <button className="border-2 border-blue-600 cursor-pointer hover:bg-sky-600 px-10 py-2 text-blue-500 font-medium hover:text-white">
              Study 02
            </button>
            <p className="text-3xl font-bold">Our Growth</p>
            <p className="text-[#7A7A7A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="space-y-6">
              {/* Consulting */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-lg font-bold text-gray-800 w-32">
                  Consulting
                </span>
                <div className="relative w-full">
                  <div className="absolute top-1/2 w-full border-t-2 border-yellow-500"></div>
                  <div className="absolute left-[95%] top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full">
                    95%
                  </div>
                </div>
              </div>

              {/* Finance */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-lg font-bold text-gray-800 w-32">
                  Finance
                </span>
                <div className="relative w-full">
                  <div className="absolute top-1/2 w-full border-t-2 border-yellow-500"></div>
                  <div className="absolute left-[85%] top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full">
                    85%
                  </div>
                </div>
              </div>

              {/* Business */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-lg font-bold text-gray-800 w-32">
                  Business
                </span>
                <div className="relative w-full">
                  <div className="absolute top-1/2 w-full border-t-2 border-yellow-500"></div>
                  <div className="absolute left-[90%] top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-bold w-12 h-12 flex items-center justify-center rounded-full">
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={Case_1}
              alt=""
              className={`w-full px-3 transition-transform duration-1000 ease-out ${
                animateSecondCase ? "translate-x-0" : "translate-x-full"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
