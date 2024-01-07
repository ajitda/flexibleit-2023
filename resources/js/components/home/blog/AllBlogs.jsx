import React, { useEffect, useState } from 'react'
import Masonry from 'react-responsive-masonry';
import BlogPost from '../BlogPost';
import styles from '../../../style';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function AllBlogs() {

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

  return (
    <div className='w-full overflow-hidden font-b612'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar />
          </div>
        </div>
        
        <div className='text-center -mb-10'>
            <h2 className={`${styles.heading2} mb-1`}>All Blogs</h2>
        </div>

        <div className='p-20'>
        <Masonry>
          {posts?.map((post) => (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <BlogPost key={post.id} post={post} />
              </Link>
            </div>
          ))}
        </Masonry>
        </div>

        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Footer />
          </div>
        </div>
    </div>
  )
}
