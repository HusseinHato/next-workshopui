"use client";
import Link from "next/link";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function SidebarAdmin() {
  return (
    <section>
      <Dialog.Root>
        <Dialog.Trigger asChild>
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
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-gray-700/50 fixed inset-0 z-[300]" />
          <Dialog.Content className="z-[301] fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <div className="flex flex-row">
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
            <Dialog.Close asChild>
              <button
                className="text-2xl text-red-800 hover:bg-red-500 focus:shadow-red-700 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                X
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
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
                <Link
                  href="/dashboard"
                  className="flex items-center p-3 px-5 text-[#595959] rounded-lg hover:bg-gray-100 group duration-300"
                >
                  <i className="fa-solid fa-grip"></i>
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/transaction"
                  className="flex items-center p-3 px-5 text-[#595959] rounded-lg hover:bg-gray-100 group duration-300"
                >
                  <i className="fa-solid fa-money-bills"></i>
                  <span className="ms-3">Transaction</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="flex items-center p-3 px-5 text-[#595959] rounded-lg hover:bg-gray-100 group duration-300"
                >
                  <i className="fa-solid fa-box-open"></i>
                  <span className="ms-3">Product</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/article"
                  className="flex items-center p-3 px-5 text-[#595959] hover:bg-gray-100 rounded-lg group duration-300"
                >
                  <i className="fa-solid fa-newspaper"></i>
                  <span className="ms-3">Article</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/user"
                  className="flex items-center p-3 px-5 text-[#595959] rounded-lg hover:bg-gray-100 group duration-300"
                >
                  <i className="fa-solid fa-users"></i>
                  <span className="ms-3">User</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Dialog.Root>
    </section>
  );
}
