import React from "react"

import { ChevronsUpDown, Github, LogOut, Search } from "lucide-react"

const Layout: React.FC = () => {
  return (
    <div className="-m-4 grid h-screen min-h-screen grid-cols-[264px_1fr] bg-[#F5F6F8]">
      <div className="h-full">
        <div className="mx-4 flex h-[72px] items-center">
          <div className="ml-1 flex h-full grow items-center gap-1">
            <Github strokeWidth={1.5} color="#FF355E" size={20} />
            <div className="text-[16px] font-semibold text-[#09101C]">
              Factorial
            </div>
            <ChevronsUpDown
              strokeWidth={1.5}
              color="#AEAEB8"
              size={16}
              className="ml-1"
            />
          </div>
          <div className="flex items-center justify-center">
            <LogOut strokeWidth={1.5} size={20} color="#AEAEB8" />
          </div>
        </div>
        <div className="h-10 px-3 pb-1">
          <div className="flex h-9 items-center gap-1 rounded-xl border border-[#E7EAEE] bg-[#FAFBFC] px-2 text-[14px] text-[#647084]">
            <Search color="#A1ABBD" size={20} />
            <span>Search...</span>
          </div>
        </div>
      </div>
      <div className="h-full pb-1 pr-1 pt-1">
        <div className="h-full rounded-xl bg-white shadow">
          <div className="flex h-16 items-center gap-2 py-4 pl-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF355E]">
              <Github color="#FFF" size={20} />
            </div>
            <span className="text-[22px] font-semibold">Trainings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
