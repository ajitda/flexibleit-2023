import React from 'react'

const BlogPost = ({post}) => {
  return (
    <>
    <div className='py-4 w-56'>
       {/* <article>{post.description}</article>  */}
       <img src={post?.thumbnail ? post?.thumbnail : '/img/blog/1.png'} alt="" />
    </div>
    <div>
        <h3 className='text-2xl text-[#0F2137] font-bold'>{post.title}</h3>
        <p className='text-[rgba(15,33,55,0.6)] mt-[10px] text-base'>{post.description}</p>
        

    </div>
    </>
  )
}

export default BlogPost