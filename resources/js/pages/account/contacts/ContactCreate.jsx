import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { FaMinus, FaPlus } from "react-icons/fa";
import ImageUpload from '../../../components/UI/ImageUpload';
import { uploadFiles } from '../../../helpers/helpers';

const ContactCreate = () => {
    const {user} = useAuth({middleware: "auth"})
    let { id } = useParams();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [media, setMedia] = useState([]);
    const [metaFields, setMetaFields] = useState([{ metaName: '', metaValue: '' }]);
    const [selectedType, setSelectedType] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('name', name);
        console.log('email', email);
        console.log('type', selectedType);
        console.log('address', address); 
        console.log('phone', phone); 
        //call the api
        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify()
        // };

        const metaArray = [];
        metaFields.forEach((field) => {
          // Only add fields where both metaName and metaValue are present
          if (field.metaName && field.metaValue) {
            metaArray.push({ meta_name: field.metaName, meta_value: field.metaValue });
          }
        });

        const contactsData = { name: name, email: email, type: selectedType, address: address, phone: phone, meta: metaArray };

        if (media.length > 0) {
          const uploads = await uploadFiles(media);
            if ( uploads === false ) return false;
            contactsData.media = uploads ;
          }

        axios.post(`/api/contacts-users`, contactsData)
            .then(res => {
                console.log('data', res.data)
                navigate('/account/contacts')
            });
    }

    const handleAddMetaField = () => {
      setMetaFields([...metaFields, { metaName: '', metaValue: '' }]);
    };
      
    const handleRemoveMetaField = (index) => {
      const updatedMetaFields = [...metaFields];
      updatedMetaFields.splice(index, 1);
      setMetaFields(updatedMetaFields);
    };

    const handleTypeChange = (e) => {
      setSelectedType(e.target.value);
    };

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
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-type">
                    Type
                </label>
                <select
                    id="grid-type"
                    value={selectedType}
                    onChange={handleTypeChange}
                    className="block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                >
                    <option value="">Select Type</option>
                    <option value="Student">Student</option>
                    <option value="Intern">Intern</option>
                    <option value="Employee">Employee</option>
                </select>
            </div>
        </div>

        <div className='flex flex-wrap mb-4 ml-2'>
          <ImageUpload value={media} onChange={(m) => setMedia(m)} />
        </div>

        <div className="md:ml-0 ml-1">
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
                  className="appearance-none block w-96 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                  className="appearance-none block w-96 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
    
    </form>
    </div>
  )
}

export default ContactCreate;