import React, { useEffect, useState } from 'react'
import { blogs } from '../../constants'
import styles from '../../style'
import Masonry from 'react-responsive-masonry'
import BlogPost from './BlogPost'

const Blogs = () => {
  const [posts, setPosts] = useState();

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
  return (
    <>
      <div className='text-center py-10'>
    <h2 className={`${styles.heading2} mb-1 text-3xl font-bold`}>Popular blog post we update everyday</h2>
    <p className={`${styles.paragraph} max-w-xl mx-auto text-base font-normal`}>Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click.</p>
    </div>
    <Masonry>
          {posts?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
    </>
  )
}

export default Blogs