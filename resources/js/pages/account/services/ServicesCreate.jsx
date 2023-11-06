import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';
import { Link } from 'react-router-dom';
import { slugify, uploadFiles } from '../../../helpers/helpers';
import ImageUpload from '../../../components/UI/ImageUpload';
import CategoryInput from '../../../components/CategoryInput';

const ServicesCreate = () => {
    const {user} = useAuth({middleware: "auth"})
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [media, setMedia] = useState([]);
    const [slug, setSlug] = useState();
    const [featured, setFeatured] = useState(0);
    const [categoryIds, setCategoryIds] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
      const cslug = title ? slugify(title) : '';
      setSlug(cslug);
     }, [title]);
 
    const handleSubmit = async(e) => {
       e.preventDefault();
       console.log('title', title);
       console.log('description', description);
       console.log('slug', slug);
       console.log('featured', featured);
       //call the api
       const serviceData = { title: title, description: description, slug: slug, featured:featured, categoryIds };
      if (media.length > 0) {
       const uploads = await uploadFiles(media);
         if ( uploads === false ) return false;
         serviceData.media = uploads ;
       }
       axios.post('/api/services', serviceData).then(res => {
         console.log('data',res.data)
         navigate('/account/services')
      });
     //   const requestOptions = {
     //     method: 'POST',
     //     headers: { 'Content-Type': 'application/json' },
     //     body: JSON.stringify(postData)
     //   };
     //  fetch('/api/posts', requestOptions).then(response => response.json())
     //      .then(data => {
     //         console.log('data',data)
     //         navigate('/account/blogs')
     //      });
  
    }
  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-xl mb-5 font-medium'>Create Service</h1>
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Title
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name='title' onChange={(e)=>setTitle(e.target.value)}/>
        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
         Slug
       </label>
       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name='slug' value={slug} onChange={(e)=>setSlug(e.target.value)}/>
       {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
     </div>
      {/* <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Last Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
      </div> */}
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          description
        </label>
        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" onChange={(e)=>setDescription(e.target.value)} ></textarea>
        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
      </div>
    </div> 
    <div className='flex flex-wrap mb-4'>
      <ImageUpload value={media} onChange={(m) => setMedia(m)} />
    </div>

    <div className='mb-5'>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="featured">
        Featured
      </label>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-gray-600"
          id="featured"
          name="featured"
          checked={featured === 1}
          onChange={(e) => setFeatured(e.target.checked ? 1 : 0)}
        />
        <label className="ml-2 text-gray-700">Yes</label>
      </div>
    </div>

    <div className='flex flex-wrap mb-4'>
      <CategoryInput categoryIds={categoryIds} setCategoryIds={setCategoryIds} />
    </div>
    <button className='p-2 text-white text-lg bg-blue-500 inline-block'>Submit</button>
    <Link to='/account/categories'>
    <button>Back</button>
    </Link>
  </form>
  </div>
  );
}

export default ServicesCreate