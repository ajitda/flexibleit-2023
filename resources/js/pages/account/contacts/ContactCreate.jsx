import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';

const ContactCreate = () => {
    const {user} = useAuth({middleware: "auth"})
    let { id } = useParams();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('name', name);
        console.log('email', email);
        console.log('address', address); 
        console.log('phone', phone); 
        //call the api
        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify()
        // };
        const contactsData = { name: name, email: email, address: address, phone: phone };


        axios.post(`/api/contacts-users`, contactsData)
            .then(res => {
                console.log('data', res.data)
                navigate('/account/contacts')
            });
    }
  return (
    <div className='max-w-6xl mx-auto'>
      <form className="md:w-full mx-2" onSubmit={handleSubmit}>
      <div className='grid grid-cols-2 gap-4'>
          <div>
            <h1 className='text-xl mb-5 font-medium'>Create Contact</h1>
          </div>
          <div className='col-end-5 col-span-2'>
            <button className=''><a href="/account/contacts">Back</a></button>
            <button className='p-2 ml-2 text-white bg-blue-500 inline-block rounded-md'>Submit</button>
          </div>
        </div>
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
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Address
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="address" placeholder="address" value={address} name='address' onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Phone
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="phone" value={phone} name='phone' onChange={(e) => setPhone(e.target.value)} />
            </div>
        </div>
    
    </form>
    </div>
  )
}

export default ContactCreate;