import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CategoryInput from '../../../components/CategoryInput';
import ImageUpload from '../../../components/UI/ImageUpload';
import { slugify, uploadFiles } from '../../../helpers/helpers';
import { useAuth } from '../../../hooks/auth';
const ServiceEdit = () => {
    const {user} = useAuth({middleware: "auth"})
    let { id } = useParams();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [media, setMedia] = useState([]);
    const [slug, setSlug] = useState();
    const [featured, setFeatured] = useState(0);
    const [categoryIds, setCategoryIds] = useState();
    const [portfolios, setPortfolios] = useState([]);
    const [selectedPortfolios, setSelectedPortfolios] = useState([]);
    const navigate = useNavigate();

    const [service, setService]= useState()
    
    useEffect(() => {
      getPortfolios();
    }, [])
    
    const getPortfolios = () => {
      // Fetch portfolios data
      axios.get('/api/portfolios').then((res) => {
          setPortfolios(res.data.data);
          console.log('portfolios', res.data)
      });
  };


    useEffect(()=>{
        const cslug = title ? slugify(title) : '';
        setSlug(cslug);
       }, [title]);

    useEffect(()=>{
        getService();
     }, []);

     const getService = () => {
      axios.get(`/api/services/${id}`).then(res => {
        console.log('data',res.data)
        const resdata = res.data.data
        setService(resdata);
           setTitle(resdata.title);
           setDescription(resdata.description);
           setSlug(resdata.slug);
           setMedia(resdata.media);
           setFeatured(resdata.featured);
           setCategoryIds(resdata.categories.map(cat=>cat.id));
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

     const handlePortfolioSelection = (e) => {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      setSelectedPortfolios(selectedOptions);
  };

  // console.log('selected ids', selectedPortfolios)

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('title', title);
        console.log('description', description);
        console.log('slug', slug);
        console.log('feature', featured);
        console.log('media', media);
        //call the api
        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify()
        // };
        const ServiceData = { title: title, description: description, slug: slug, featured:featured, categoryIds };
        if (media.length > 0) {
         const uploads = await uploadFiles(media);
           if ( uploads === false ) return false;
           ServiceData.media = uploads ;
         }

        //  console.log('selected ids', selectedPortfolios)

         if (selectedPortfolios.length > 0) {
          console.log('selected ids', selectedPortfolios)
         ServiceData.portfolio_ids = selectedPortfolios;
        }

        axios.put(`/api/services/${id}`, ServiceData)
        .then(res => {
            console.log('data', res.data)
            navigate('/account/services')
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
        <div className='flex flex-wrap mb-4'>
          <ImageUpload value={media} onChange={(m) => setMedia(m)} />
        </div>
    <div className='mb-5 ml-20'>
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
    </div>

    <div className='flex flex-wrap mb-4'>
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
            Select Portfolios
        </label>
        {portfolios && portfolios.length > 0 ? (
            <select
                multiple
                className='block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                value={selectedPortfolios}
                onChange={handlePortfolioSelection}
            >
                {portfolios.map((portfolio) => (
                    <option key={portfolio.id} value={portfolio.id}>
                        {portfolio.id}. {portfolio.title}
                    </option>
                ))}
            </select>
        ) : (
            <p>No portfolios available</p>
        )}
    </div>

    <div className='flex flex-wrap mb-4'>
      <CategoryInput categoryIds={categoryIds} setCategoryIds={setCategoryIds} />
    </div>
    <button className='p-2 text-white text-lg bg-blue-500 inline-block'>Submit</button>
    <button><a href="/account/services">Back</a></button>
</form>
</div>
  )
}

export default ServiceEdit