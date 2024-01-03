import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../hooks/auth';
import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';
import styles from '../../../style';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const AllContacts = () => {
    const {user} = useAuth({middleware: 'auth'})
    const [contacts, setContacts] = useState([]);
    const [totalContacts, setTotalContacts] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(()=>{
      getContacts();
   }, [perPage, currentPage]);
  
   const getContacts = () => {
    axios.get(`/api/All-contacts?per_page=${perPage}&page=${currentPage}&search=${searchTerm}`).then(res => {
        console.log('data',res.data.data)
        const resdata = res.data.data;
        // navigate('/account/blogs')
        setContacts(resdata.data);
        setTotalContacts(resdata.total)
     });
    }

    const handleSearchTerm = e => {
        setCurrentPage(1);
        setSearchTerm(e.target.value);
    };
    const handleSearch = e => {
        if (e.key === 'Enter') {
            setCurrentPage(1);
            getContacts();
        }
    };

    const handleDelete = (id) =>{
      {if(window.confirm('Are you sure to delete this record?'))
      axios.delete(`/api/contacts-user/${id}`)
      .then(res => {
        console.log(res.data, 'Deleted Successfully.');
        getContacts()
      })
    }
  }

  const totalPages = Math.ceil(totalContacts / perPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

  return (
    <>
    <LinkButton/>
    <div className="flex flex-col">
    <div className="overflow-x-auto">
        <div className="flex justify-between py-3 md:ml-28 pl-2">
            <div className="relative max-w-xs">
            <h2 className={`${styles.heading2} text-left mb-1`}>Contacts</h2>
                <label htmlFor="hs-table-search" className="sr-only">
                    Search
                </label>
                {/* <Link to={"/account/services/create"} className='bg-green-400 py-3 px-6' >Add</Link> */}
                <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    value={searchTerm}
                    onChange={handleSearchTerm}
                    onKeyUp={handleSearch}
                    className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center mt-20 pl-4 pointer-events-none">
                    <svg
                        className="h-3.5 w-3.5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
            </div>

            <div className="flex items-center space-x-2 mt-20">
                <div className="relative">
                    <Link to={"/account/contacts/create"} className='bg-green-400 py-2 px-6 mr-5 rounded-xl' >Add</Link>
                    <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                        <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                    />
                                </svg>
                            </div>
                            <div className="hidden sm:block">
                                Filters
                            </div>
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <div className="p-1.5 md:w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 pl-4">
                                <div className="flex items-center h-5">
                                    <input
                                        id="checkbox-all"
                                        type="checkbox"
                                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                    />
                                    <label
                                        htmlFor="checkbox"
                                        className="sr-only"
                                    >
                                        Checkbox
                                    </label>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                Type
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                address
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                phone
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                                Image
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                            >
                                Edit
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                            >
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {contacts && contacts.map(contact=> {
                         return (
                         <tr>
                            <td className="py-3 pl-4">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                    />
                                    <label
                                        htmlFor="checkbox"
                                        className="sr-only"
                                    >
                                        Checkbox
                                    </label>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {contact.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {contact.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {contact.email}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {contact.type}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {contact.address}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {contact.phone}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                <img src={contact.thumbnail} className='w-20' alt="" />
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <a
                                    className="text-green-500 hover:text-green-700"
                                    href={`/account/contacts/${contact.id}/edit`}
                                >
                                    Edit
                                </a>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <a
                                    className="text-red-500 hover:text-red-700"
                                    href="#" onClick={() => {handleDelete(contact.id)}}
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                         )
                      })}
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div className="flex justify-end mt-2 mr-4">
        
        <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="mr-2 px-3 py-3 bg-gray-200 rounded-md cursor-pointer"
        >
            <SlArrowLeft />
        </button>
            <p className="mr-3 text-gray-600 my-auto">
                {((currentPage - 1) * perPage) + 1}-{Math.min(currentPage * perPage, totalContacts)} of {totalContacts}
            </p>
        <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-3 py-3 bg-gray-200 rounded-md cursor-pointer"
        >
            <SlArrowRight />
        </button>
    </div>
</div>
</>
  )
}

export default AllContacts;