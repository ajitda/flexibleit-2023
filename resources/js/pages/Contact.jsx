import { useState } from "react";

const Contact = () => {
   const [title, setTitle] = useState();

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('title', title)
   }

   return (<>
      <h2 className="text-2xl">Contact page</h2>
      <form action="" onSubmit={handleSubmit}>
         <input type="text" name="title" className="bg-blue-100" onChange={(e)=>setTitle(e.target.value)} />
         <button className="bg-blue-300 rounded-xl">submit</button>
      </form>
      </>
   )
}

export default Contact;