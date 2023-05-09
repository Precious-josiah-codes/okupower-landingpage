'use client'

const SideBar = ({toggleSideBar, showSidebar}) => {
    return (
    <div
      className={`block sm:hidden bg-[#000000d8] w-full h-screen fixed top-0 z-[99999] ease-in-out duration-300 ${
        showSidebar ? "-translate-x-0 " : "-translate-x-full"
      }`}
    >
      <div
        className="bg-black relative h-full text-white sm:w-[8rem] w-[15rem] flex  justify-between items-center py-[1.5rem] text-left "
        style={{ boxShadow: "4px 0px 9px rgba(0, 0, 0, 0.25" }}
      >
        
        {/* start links */}
        <div className="w-full -mt-9 space-y-3">
          {/* Devices */}
            <div
              className={`py-[1.2rem] w-full inline-flex justify-center`}
            >
              <h1 className="w-[5rem]">Devices</h1>
            </div>

          {/* Bypassed */}
            <div
              className={`py-[1.5rem] w-full inline-flex justify-center`}
            >
              <h1 className="w-[5rem]">Bypassed</h1>
            </div>

          {/* View band */}
            <div
              className={`py-[1.5rem] w-full inline-flex justify-center `}
            >
              <h1 className="w-[5rem]">View Band</h1>
            </div>
        </div>

        <div className="text-white text-lg absolute bottom-12 inline-flex justify-center h-fit w-full">
          <div className="w-[5rem] text-left" onClick={toggleSideBar}>
            <svg className="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;