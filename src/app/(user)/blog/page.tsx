import React from 'react'
import BlogCard from '../components/BlogCard'

export default function Blog() {
  return (
    <div className='container grid mx-auto w-full max-w-6xl'>
        <div className='text-center my-12'>
            <p className='text-5xl font-bold'>Blog</p>
        </div>
        <div className="grid grid-cols-3 gap-x-2 gap-y-4 mb-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="flex justify-center items-center mb-10">
          <button className="border border-gray-300 py-4 px-8 hover:bg-gray-200 rounded-md">More Articles</button>
        </div>
    </div>
  )
}
