import React from "react";

export default function page() {
  return (
    <main>
      <section>
        <div className="p-4 sm:ml-72">
          <div className="p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-white">
                <div className="grid grid-cols-[40%_50%] gap-2 w-full">
                  <span className="bg-[#9694ff] rounded-md text-2xl mx-auto w-12 h-12 text-white flex items-center justify-center">
                    <i className="fa-solid fa-money-bills"></i>
                  </span>
                  <div>
                    <p className="text-md text-[#595959]">Transaction</p>
                    <p className="text-md font-bold text-[#2947a9]">
                      Rp250.000
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-white">
                <div className="grid grid-cols-[40%_50%] gap-2 w-full">
                  <span className="bg-[#9694ff] rounded-md text-2xl mx-auto w-12 h-12 text-white flex items-center justify-center">
                    <i className="fa-solid fa-box-open"></i>
                  </span>
                  <div>
                    <p className="text-md text-[#595959]">Product</p>
                    <p className="text-md font-bold text-[#2947a9]">12</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-white">
                <div className="grid grid-cols-[40%_50%] gap-2 w-full">
                  <span className="bg-[#9694ff] rounded-md text-2xl mx-auto w-12 h-12 text-white flex items-center justify-center">
                    <i className="fa-solid fa-newspaper"></i>
                  </span>
                  <div>
                    <p className="text-md text-[#595959]">Article</p>
                    <p className="text-md font-bold text-[#2947a9]">10</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-white">
                <div className="grid grid-cols-[40%_50%] gap-2 w-full">
                  <span className="bg-[#9694ff] rounded-md text-2xl mx-auto w-12 h-12 text-white flex items-center justify-center">
                    <i className="fa-solid fa-users"></i>
                  </span>
                  <div>
                    <p className="text-md text-[#595959]">User</p>
                    <p className="text-md font-bold text-[#2947a9]">3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col rounded-lg bg-white bg-clip-border text-[#595959]">
              <div className="pt-6 px-4 pb-0"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
