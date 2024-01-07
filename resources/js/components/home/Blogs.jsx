import React, { useEffect, useState } from 'react'
import { blogs } from '../../constants'
import styles from '../../style'
import BlogPost from './BlogPost'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
     getPosts();
  }, []);

  const getPosts = () => {
     fetch('/api/posts')
       .then(response => response.json())
       .then(data => {
        console.log('posts res ', data)
        setPosts(data.data);
       });
  }

  const featuredBlogs = posts.filter((post) => post.featured === 1 )

  return (
    <>
      <div className='text-center py-20'>
    <h2 className={`${styles.heading2} mb-1 text-3xl font-bold`}>Popular blog post we update everyday</h2>
    <p className={`${styles.paragraph} max-w-xl mx-auto text-base font-normal`}>Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click.</p>
    
    </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mb-8'>
            {featuredBlogs.map((post) => (
              <div key={post.id} className=''>
                <Link to={`/posts/${post.id}`}>
                  <BlogPost key={post.id} post={post} />
                </Link>
              </div>
            ))}
      </div>
      <div className="mt-8 text-center">
      <Link to={`/all-blogs`}>
        <button className="bg-secondary text-white inline-block px-8 py-5 rounded-md">View All Blogs</button>
      </Link>
    </div>
    </>
  )
}

export default Blogs