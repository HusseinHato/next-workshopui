import React from "react";

export default function page() {
  return (
    <div className="container grid mx-auto w-full max-w-4xl">
      <div className="my-4 rounded-md">
        <img
          src="gambar/gambar-blog.jpg"
          alt="katalog"
          className="rounded-md object-cover h-[500px] w-full"
        />
        {/* <p className=' text-white top-[45%] text-4xl font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'>Basketball</p> */}
      </div>
      <div className="grid gap-y-4 mb-6">
        <p className=" font-semibold text-lg">Basketball</p>
        <p className="font-extrabold text-3xl">
          Lamelo Ball the Uprising Basketball Young-Star, Shining off and on the
          pitch
        </p>
        <div className="flex flex-row gap-x-3 font-semibold">
          <p>By Admin</p>
          <p>/</p>
          <p>31 Desember 2023</p>
        </div>
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
          facilis, ipsa sunt minus dicta alias odio temporibus quas magni magnam
          hic provident molestiae reiciendis fugiat, laboriosam perspiciatis qui
          suscipit quis accusamus voluptatibus quo! Dolores deleniti doloribus
          commodi repellat, expedita, omnis debitis tempora in placeat
          voluptatem ipsa minima asperiores minus, delectus obcaecati odit
          ducimus libero eum nam odio alias cupiditate earum? Fugit ducimus
          excepturi asperiores nesciunt? Qui, incidunt numquam. Voluptatem
          assumenda iure quis dolor? Illum, eaque, nesciunt placeat, veniam
          deserunt culpa delectus dicta impedit reprehenderit corporis ab
          consequuntur libero repudiandae iure alias sed debitis deleniti beatae
          eos quos. Cupiditate incidunt nemo et consequuntur non voluptatum
          repudiandae delectus! Illum quae rem dolorem voluptatum, eius earum
          reprehenderit, tempore a mollitia ea minima. Aliquid nulla quasi est
          praesentium ipsam, optio recusandae nesciunt! Natus totam doloribus
          eos facere molestias quas, magnam aut assumenda quis provident modi
          placeat blanditiis voluptatum voluptatibus alias, sunt at fuga
          delectus eaque numquam voluptas, quasi obcaecati reprehenderit!
          Consectetur tenetur rem porro impedit delectus sapiente explicabo
          aliquam voluptas hic fugit repudiandae non tempore deleniti est eius,
          magni neque optio earum ut cumque ullam sequi harum. Delectus
          recusandae sint maxime nobis laudantium iusto excepturi velit. Quod
          hic enim error reiciendis rerum dicta minus.
        </p>
      </div>
      <div className="text-center mb-6 font-medium">
        <p>Share this post</p>
      </div>
      <div className="flex flex-row justify-center gap-x-3 mb-8">
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Facebook</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">WhatsApp</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path
            fillRule="evenodd"
            clipRule="evenodd"
             d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Twitter</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M23.954 4.75c-.885.39-1.83.653-2.83.773 1.016-.61 1.794-1.574 2.164-2.723-.95.55-2.005.953-3.14 1.175-.9-.958-2.18-1.56-3.6-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .386.044.758.127 1.117-4.09-.205-7.713-2.16-10.15-5.14-.424.723-.67 1.562-.67 2.46 0 1.7.865 3.196 2.174 4.075-.8-.026-1.556-.245-2.215-.612v.06c0 2.37 1.682 4.337 3.91 4.785-.41.112-.843.17-1.29.17-.314 0-.618-.03-.922-.086.623 1.94 2.426 3.362 4.562 3.4-1.67 1.307-3.777 2.085-6.05 2.085-.393 0-.78-.023-1.17-.068 2.157 1.385 4.71 2.19 7.46 2.19 8.95 0 13.84-7.415 13.84-13.84 0-.21 0-.42-.015-.63.95-.684 1.78-1.54 2.44-2.52l-.047-.02z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex justify-center items-center mb-8">
        <button className="border border-gray-300 py-4 px-8 hover:bg-gray-200 rounded-md">
          Back
        </button>
      </div>
    </div>
  );
}
