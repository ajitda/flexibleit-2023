import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CategoryInput from '../../../components/CategoryInput';
import ImageUpload from '../../../components/UI/ImageUpload'
import { slugify, uploadFiles } from '../../../helpers/helpers';
import { useAuth } from '../../../hooks/auth';

const PortfolioEdit = () => {
    const {user} = useAuth({middleware: "auth"})
    let { id } = useParams();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [media, setMedia] = useState([]);
    const [slug, setSlug] = useState();
    const [categoryIds, setCategoryIds] = useState();
    const navigate = useNavigate();

    const [portfolio, setPortfolio]= useState()

    useEffect(()=>{
      const cslug = title ? slugify(title) : '';
      setSlug(cslug);
     }, [title]);

    useEffect(()=>{
        getPortfolio();
     }, []);

     const getPortfolio = () => {
      axios.get(`/api/portfolios/${id}`).then(res => {
        console.log('data',res.data)
        const resdata = res.data.data
        setPortfolio(resdata);
           setTitle(resdata.title);
           setDescription(resdata.description);
           setMedia(resdata.media);
           setSlug(resdata.slug);
           setCategoryIds(resdata.categories.map(cat=>cat.id))
     });

    //     fetch(`/api/posts/${id}`)
    //       .then(response => response.json())
    //       .then(data => {
    //        console.log('posts res ', data)
    //        setPost(data);
    //        setTitle(data.title);
    //        setDescription(data.description);
    //       });
     }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('title', title);
        console.log('description', description);
        console.log('slug', slug);
        //call the api
        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify()
        // };
        const portfoliosData = { title: title, description: description, slug: slug, categoryIds };
        if (media.length > 0) {
         const uploads = await uploadFiles(media);
           if ( uploads === false ) return false;
           portfoliosData.media = uploads ;
         }


        axios.put(`/api/portfolios/${id}`, portfoliosData)
            .then(res => {
                console.log('data', res.data)
                navigate('/account/portfolios')
            });
    }

  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-xl mb-5 font-medium'>Edit Portfoio</h1>
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Title
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={title} name='title' onChange={(e) => setTitle(e.target.value)} />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Slug
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name='slug' value={slug} onChange={(e) => setSlug(e.target.value)} />
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
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
            <div className='flex flex-wrap'>
      <ImageUpload value={media} onChange={(m) => setMedia(m)} />
    </div>
        </div>
        <div className='flex flex-wrap mb-4'>
          <CategoryInput categoryIds={categoryIds} setCategoryIds={setCategoryIds} />
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
        <button className='p-2 text-white text-lg bg-blue-500 inline-block'>Submit</button>
        <button><a href="/account/portfolios">Back</a></button>
    </form>
    </div>
  )
}

export default PortfolioEdit