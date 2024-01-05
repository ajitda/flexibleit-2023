import React, { useEffect, useState } from 'react'
import styles from '../../../style';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import Masonry from 'react-responsive-masonry';

export default function BlogDetails() {

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPostDetails(id); // Pass id as an argument
    }, [id]); // Include id in the dependency array

    const getPostDetails = (id) => {
        fetch(`/api/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.data) {
                setPost(data.data);
            }
        });
    }
console.log('post:',post)

  return (
    <div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            
            {post ? (
            <div>
                <h2 className={`${styles.heading2} text-center pt-10`}>{post.title}'s Blog</h2>
                    
                <div className="grid md:grid-cols-2 mb-14 mt-10">
                <div>
                    <div id="product" className="md:p-24 p-5">
                    <figure>
                        <img className="rounded-lg" src={post.thumbnail} alt="" />
                    </figure>
                    </div>
                </div>
                <div className="md:pt-20 p-5 mb-12">
                    <h2 className='text-[28px] font-b612 font-bold pb-5'>{post.title}</h2>
                    <div>
                    <p className="font-medium">Short description:</p>
                    <p className={`${styles.paragraph} md:pr-20`}>{post.description}</p>
                    </div>
                </div>
                </div>
            </div>
            ) : (
                <p>Loading...</p>
            )}
      
            
            <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>                                                        
        </div>
  );
}
