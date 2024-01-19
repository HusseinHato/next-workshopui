"use client";
import React from "react";
import * as Menubar from "@radix-ui/react-menubar";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <Menubar.Root>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex flex-row items-center gap-x-7">
              <a
                href="/"
                className="text-2xl font-bold text-indigo-600 hidden md:block"
              >
                <img src="Sneaky.png" alt="sneaky" className="w-[130px]" />
              </a>
              <Menubar.Menu>
                <Menubar.Trigger className=" hover:text-indigo-600">
                  Categories
                </Menubar.Trigger>
                <Menubar.Portal>
                  <Menubar.Content
                    className="min-w-[220px] bg-white rounded-md p-[5px] shadow-sm z-[99] border border-gray-300"
                    sideOffset={33}
                  >
                    <div className="grid grid-cols-2 gap-x-10 p-[22px]">
                      <div className="flex flex-col gap-y-1 w-[250px]">
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Basketball
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Football
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Running
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Trail
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Futsal
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Tennis
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Bike
                        </a>
                      </div>
                      <div className="flex flex-col gap-y-1 w-[250px]">
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Sneakers
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Training
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Volley
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Badminton
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Golf
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Baseball
                        </a>
                        <a
                          href="/katalog"
                          className="p-4 hover:bg-gray-200 rounded-md"
                        >
                          Skate
                        </a>
                      </div>
                    </div>
                  </Menubar.Content>
                </Menubar.Portal>
              </Menubar.Menu>
              <a href="/blog" className=" hover:text-indigo-600">
                Blog
              </a>
              <div className="flex items-center space-x-4">
                <label className="relative text-gray-400 focus-within:text-gray-600">
                  <svg
                    className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3 fill-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Search on Sneaky"
                    className="form-input border border-gray-300 py-2 px-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-12 focus:outline-none focus:border-indigo-500 rounded-md"
                  />
                </label>
                <div></div>
              </div>
            </div>

            {/* Search Bar */}

            {/* Navigation Links - Mobile */}
            <div className="flex items-center gap-x-2">
              {/* Cart */}
              <a href="/cart">
                <button className="text-gray-600 hover:text-indigo-600 focus:outline-none hover:bg-gray-200 p-4 rounded-md">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="18"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </button>
              </a>
              <a href="/favourites">
                <button className="text-gray-600 hover:text-indigo-600 focus:outline-none hover:bg-gray-200 p-4 rounded-md">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                </button>
              </a>
              <a href="/history">
                <button className="text-gray-600 hover:text-indigo-600 focus:outline-none hover:bg-gray-200 p-4 rounded-md hidden md:block">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Menubar.Root>
    </nav>
  );
}
