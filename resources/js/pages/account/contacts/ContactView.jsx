import React from 'react'

const ContactView = () => {
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
        const contactsData = { name, email, subject, message };


        axios.put(`/api/contacts/${id}`, contactsData)
            .then(res => {
                console.log('data', res.data)
                navigate('/account/contacts')
            });
    }
  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-xl mb-5 font-medium'>View Contact list</h1>
    
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="name" value={name} name='name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={title} name='title' onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Subject
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={title} name='title' onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Message
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={title} name='title' onChange={(e) => setTitle(e.target.value)} />
            </div>
        </div>
        <button><a href="/account/contacts">Back</a></button>
    
    </div>
  )
}

export default ContactView