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
                    <div className='text-center -mb-28'>
                        <h2 className={`${styles.heading2} `}>{post.title}</h2>
                    </div>
                    <div id="product" className="p-36 ">
                    <figure>
                        <img className=" rounded-lg" src={post.thumbnail} alt="" />
                    </figure>
                        <h2 className="">{post.title}</h2>
                        <p className={`${styles.paragraph}`}>{post.description}</p>
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
