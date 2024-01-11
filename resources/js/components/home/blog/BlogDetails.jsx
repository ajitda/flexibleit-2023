import React, { useEffect, useState } from 'react'
import styles from '../../../style';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import Masonry from 'react-responsive-masonry';
import { Helmet } from 'react-helmet';

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

const shareOnFacebook = () => {
    // Replace URL with the URL you want to share
    const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    // Replace text and URL with the content you want to share
    const text = encodeURIComponent(post.title);
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(shareUrl, '_blank');
  };

  const shareOnWhatsApp = () => {
    // Replace text and URL with the content you want to share
    const text = encodeURIComponent(post.title);
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://api.whatsapp.com/send?text=${text} ${url}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <div className='w-full overflow-hidden font-b612'>
        {post ? (
        <>
          <div>
            <Helmet>
              <meta name="title" content={post.title} />
              <meta name="description" content={post.description} />
              <meta property="og:title" content={post.title} />
              <meta property="og:description" content={post.description} />
              <meta property="og:image" content={post.image} />
              <meta property="og:url" content={post.url} />
              {/* Twitter meta tags */}
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:title" content={post.title} />
              <meta name="twitter:description" content={post.description} />
              <meta name="twitter:image" content={post.image} />
              {/* Canonical URL */}
              <link rel="canonical" href={window.location.href} />
            </Helmet>
          </div>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
            <div className='container'>
                <div className='row'>
                    <div className='pt-10 xl:pl-80 md:pl-56 pl-3'>
                        <h2 className={`${styles.heading2}`}>{post.title}</h2>
                        <p className={`${styles.paragraph} mb-2`}>By DevsBrain</p>
                        <hr className='xl:mr-72 md:mr-52 mr-4' />
                        <div className='flex mr-3 mt-5'>
                            <button className='flex bg-blue-500 py-3 px-4' onClick={shareOnFacebook}>
                                <img src="/img/icons/facebook.png" alt="facebook" className='' />
                                <div className='pl-2 text-white'>
                                    Facebook
                                </div>
                            </button>
                            <button className='flex bg-sky-500 py-3 px-4 ml-2' onClick={shareOnTwitter}>
                                <img src="/img/icons/twitter-2.png" alt="facebook" className='p- w-6' />
                                <div className='pl-2 text-white'>
                                    Twitter
                                </div>
                            </button>
                            <button className='flex bg-green-500 py-3 px-4 ml-2' onClick={shareOnWhatsApp}>
                                <img src="/img/icons/wtsapp.png" alt="facebook" className='' />
                                <div className='pl-2 text-white'>
                                    Whatsapp
                                </div>
                            </button>
                        </div>
                        
                    </div>
                    <div className='md:grid grid-cols-6 mb-14 mt-20 md:ml-5'>
                        <div className="col-start-2 col-span-4">
                            <div>
                                <div id="product" className="">
                                <figure>
                                    <img className="rounded-lg" src={post.thumbnail} alt="" />
                                </figure>
                                </div>
                            </div>
                            <div className="mb-12">
                                {/* <h2 className='text-[28px] font-b612 font-bold pb-5'>{post.title}</h2> */}
                                <div className='p-2 mt-5'>
                                <p className="font-medium">Description:</p>
                                <p className={`${styles.paragraph}`}>{post.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                
            </div>
      
            
            <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div> 
            </>

            ) : (
            <p>Loading...</p>
            )}                                                       
        </div>
  );
}
