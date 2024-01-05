import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CategoryInput from '../../../components/CategoryInput';
import ImageUpload from '../../../components/UI/ImageUpload';
import { slugify, uploadFiles } from '../../../helpers/helpers';
import { useAuth } from '../../../hooks/auth';
import { FaMinus, FaPlus } from "react-icons/fa";

const PortfolioCreate = () => {
    const {user} = useAuth({middleware: "auth"})
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [featured, setFeatured] = useState(0);
    const [media, setMedia] = useState([]);
    const [slug, setSlug] = useState();
    const [categoryIds, setCategoryIds] = useState();
    const navigate = useNavigate();
    const [metaFields, setMetaFields] = useState([{ metaName: '', metaValue: '' }]);

    useEffect(()=>{
      const cslug = title ? slugify(title) : '';
      setSlug(cslug);
     }, [title]);
 
    const handleSubmit = async(e) => {
       e.preventDefault();
       console.log('title', title);
       console.log('description', description);
       console.log('slug', slug);

       const metaArray = [];
        metaFields.forEach((field) => {
          // Only add fields where both metaName and metaValue are present
          if (field.metaName && field.metaValue) {
            metaArray.push({ meta_name: field.metaName, meta_value: field.metaValue });
          }
        });

       //call the api
       const portfolioData = { title: title, description: description, slug, featured: featured, categoryIds, meta: metaArray, };
      if (media.length > 0) {
       const uploads = await uploadFiles(media);
         if ( uploads === false ) return false;
         portfolioData.media = uploads ;
       }
       axios.post('/api/portfolios', portfolioData).then(res => {
         console.log('data',res.data)
         navigate('/account/portfolios')
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

    const handleAddMetaField = () => {
      setMetaFields([...metaFields, { metaName: '', metaValue: '' }]);
    };
    
    const handleRemoveMetaField = (index) => {
      const updatedMetaFields = [...metaFields];
      updatedMetaFields.splice(index, 1);
      setMetaFields(updatedMetaFields);
    };

  return (
    <div className='max-w-6xl mx-auto'>
    <form className="md:w-full mx-2" onSubmit={handleSubmit}>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h1 className='text-xl mb-5 font-medium'>Create Portfoio</h1>
        </div>
        <div className='col-end-5 col-span-2'>
          <button className=''><a href="/account/portfolios">Back</a></button>
          <button className='p-2 ml-2 text-white bg-blue-500 inline-block rounded-md'>Submit</button>
        </div>
      </div>
    <div className="md:flex -mx-3 mb-6">
      <div className='md:w-1/2'>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Title
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name='title' onChange={(e)=>setTitle(e.target.value)}/>
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Slug
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name='slug' value={slug} onChange={(e)=>setSlug(e.target.value)}/>
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="flex flex-wrap mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                description
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" onChange={(e)=>setDescription(e.target.value)} ></textarea>
              <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
          </div>
          <div className='flex flex-wrap px-3 mb-4'>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="featured">
              Category
            </label>
            <CategoryInput categoryIds={categoryIds} setCategoryIds={setCategoryIds} />
          </div>
      </div>
      <div>
        <div className="md:pl-10 mb-6 md:mb-0 ml-3 md:mt-5">
          {metaFields.map((field, index) => (
            <div key={index} className="md:flex items-center mb-3 gap-5">
                <input
                  type="text"
                  placeholder="Meta Name"
                  value={field.metaName}
                  onChange={(e) => {
                    const updatedFields = [...metaFields];
                    updatedFields[index].metaName = e.target.value;
                    setMetaFields(updatedFields);
                  }}
                  className="appearance-none block w-30 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
                <input
                  type="text"
                  placeholder="Meta Value"
                  value={field.metaValue}
                  onChange={(e) => {
                    const updatedFields = [...metaFields];
                    updatedFields[index].metaValue = e.target.value;
                    setMetaFields(updatedFields);
                  }}
                  className="appearance-none block w-30 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
                {metaFields.length === index + 1 && (
                  <FaPlus className='cursor-pointer md:mb-3 md:ml-0 ml-48' onClick={handleAddMetaField} />
                )}
                {metaFields.length > index + 1 && (
                <FaMinus className='cursor-pointer md:mb-3 md:ml-0 ml-48' onClick={() => handleRemoveMetaField(index)} />
                )}
            </div>
          ))}
          <div>
          </div>
        </div>
      </div>
      {/* <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Last Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
      </div> */}
    </div>

    

      <div className='flex flex-wrap mb-4 ml-2'>
        <ImageUpload value={media} onChange={(m) => setMedia(m)} />
      </div>

      <div className='mb-5 ml-5'>
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

      
    {/* <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          City
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          State
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          Zip
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
      </div>
    </div> */}
   
 </form>
  </div>
  )
}

export default PortfolioCreate