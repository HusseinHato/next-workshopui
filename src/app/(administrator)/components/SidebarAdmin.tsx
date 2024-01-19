import React from 'react'

export default function SidebarAdmin() {
  return (
    <section>
        <button
          data-drawer-target="sidebar"
          data-drawer-toggle="sidebar"
          aria-controls="sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-5 text-sm text-[#595959] hover:bg-[#2947a9] hover:text-white rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div
          id="sidebar"
          className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
        >
          <div className="h-full px-10 py-4 overflow-y-auto bg-white">
            <button id="close" className="absolute right-10 top-7 md:hidden">
              <i className="fa-solid fa-x"></i>
            </button>
            <img className="w-3/4" src="assets/images/logo.png" alt="" />
            <ul className="space-y-3 mt-10">
              <li>
                <a
                  href="/dashboard"
                  className="flex items-center p-3 px-5 text-[#595959] rounded-lg hover:bg-gray-100 group duration-300"
                >
                  <i className="fa-solid fa-grip"></i>
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="/transaction"
                  className="flex items-center p-3 px-5 text-[#595959] rounded-lg hover:bg-gray-100 group duration-300"
                >
                  <i className="fa-solid fa-money-bills"></i>
                  <span className="ms-3">Transaction</span>
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="flex items-center p-3 px-5 text-[#595959] rounded-lg hover:bg-gray-100 group duration-300"
                >
                  <i className="fa-solid fa-box-open"></i>
                  <span className="ms-3">Product</span>
                </a>
              </li>
              <li>
                <a
                  href="/article"
                  className="flex items-center p-3 px-5 text-[#595959] hover:bg-gray-100 rounded-lg group duration-300"
                >
                  <i className="fa-solid fa-newspaper"></i>
                  <span className="ms-3">Article</span>
                </a>
              </li>
              <li>
                <a
                  href="/user"
                  className="flex items-center p-3 px-5 text-[#595959] rounded-lg hover:bg-gray-100 group duration-300"
                >
                  <i className="fa-solid fa-users"></i>
                  <span className="ms-3">User</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}
