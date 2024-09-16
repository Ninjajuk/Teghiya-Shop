
'use client'

import Sidebar1 from "./SidebarUser";


function UserDashboard({children,}) {

    return (
      <>
        <section className="w-full   bg-gray-400">
          <div className="w-full    mx-auto px-8 ">
            <div className="flex flex-col md:flex-row gap-4 py-4 w-full  min-h-screen ">
              <div className="md:w-1/5 bg-gray-200 rounded-md shadow-md px-4 py-4">
                {/* <NavbarUser/> */}
                <Sidebar1 />
              </div>

              <main className="md:w-4/5"> {children}</main>
            </div>
          </div>
        </section>
      </>
    );
  }
  export default  UserDashboard;