import { Select } from 'antd';
import { useEffect, useState } from 'react';
import React from 'react';

const CategoryInput = ({categoryIds, setCategoryIds}) => {
   const [categories, setCategories] = useState([]);
   console.log('categoryIds', categoryIds)

   useEffect(()=>{
      getCategories()
   }, []);

   const getCategories = () => {
      axios.get('/api/categories', ).then(res => {
          console.log('data',res.data)
          setCategories(res.data.data);
       });
    }

   const options = [];
   categories?.map((cat)=>{
     options.push({
       label: cat.title,
       value: cat.id,
     });
   });

   const handleChange = (value) => {
     console.log(`selected ${value}`);
     setCategoryIds(value)
   };

   return (<Select mode="multiple"
   allowClear
   style={{
     width: '100%',
   }}
   placeholder="Please select"
   defaultValue={categoryIds}
   value={categoryIds}
   onChange={handleChange}
   options={options}
 />);
}


export default CategoryInput;
