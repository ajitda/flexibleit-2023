import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../hooks/auth';

const ServiceEdit = () => {
    const {user} = useAuth({middleware: "auth"})
    let { id } = useParams();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    const [service, setService]= useState()

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
        //    setMedia(resdata.media);
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
        //call the api
        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify()
        // };
        const ServiceData = { title: title, description: description };
        // if (media.length > 0) {
        //  const uploads = await uploadFiles(media);
        //    if ( uploads === false ) return false;
        //    ServiceData.media = uploads ;
        //  }


        axios.put(`/api/services/${id}`, ServiceData)
            .then(res => {
                console.log('data', res.data)
                navigate('/account/services')
            });
        }

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Title
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={title} name='title' onChange={(e) => setTitle(e.target.value)} />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
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
    </div>
    <button className='p-2 text-white text-lg bg-blue-500 inline-block'>Submit</button>
    <button><a href="/account/services">Back</a></button>
</form>
  )
}

export default ServiceEdit