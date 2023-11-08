import { useState } from "react";
import { MdOutlineMail } from "react-icons/md"
import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import styles from "../style";
import { Footer, Navbar } from "../components";

const Contact = () => {
   // const {user} = useAuth({middleware: "auth"})
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [subject, setSubject] = useState();
   const [message, setMessage] = useState();
   const navigate = useNavigate();

   const onChangeHandler = (fieldName, value)=>{
      if(fieldName === "name"){
        setName(value);
      }
      else if(fieldName==="email"){
        setEmail(value);
      }
      else if(fieldName==="subject"){
        setSubject(value);
      }
      else if(fieldName==="message"){
        setMessage(value);
      }

    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(name.trim()==="" || email.trim() =="" || subject.trim() =="" || message.trim() ==""){
        alert("required all field");
      }
      else{
        alert(name+ " " +email+ " " +subject+" " +message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
      const contactData = { name, email, subject, message };

      axios.post('/api/contacts', contactData).then(res => {
         console.log('data',res.data)
         navigate('/contact-us')
      });
    }

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    console.log('name', name);
   //    console.log('email', email);
   //    console.log('subject', subject);
   //    console.log('message', message);
   //    const contactData = { name, email, subject, message };

   //    axios.post('/api/contacts', contactData).then(res => {
   //       console.log('data',res.data)
   //       navigate('/contact-us')
   //    });

   // }

   return (<>
      <div>
         <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
               <Navbar />
            </div>
         </div>
         <div className="text-center mt-20">
            <h2 className=" text-3xl mb-3 font-medium ">Get In Touch</h2>
            <p className=" text-base mb-10">Contact us today to learn more about how we can help your business establish or improve<br/> its online presence.Our team is available to answer any questions you may have and<br/>  provide a free quote for your project.</p>
         </div>
         <div className="container mx-auto grid grid-cols-2 gap-4 mb-36">
         <div>
            <h3 className="text-xl font-medium mb-2 flex items-center gap-3"> <MdOutlineMail/> Email Us:</h3>
            <p className="text-base mb-6">Fill out our form and we will contact you within 24 hours.</p>
            <h3 className="text-lg font-medium">Customer Support:</h3>
            <a href="flexibleit.net@gmail.com">flexibleit.net@gmail.com</a>
            <h3 className="text-xl font-medium my-4">Find Us</h3>
            <h3 className="text-lg font-medium">BD Office</h3>
            <p className="text-base mb-6">House# X60, Road# 7/3, Block# A, Chandgaon R/A, Chittagong, BD.<br/>
               email : flexibleit.net@gmail.com<br/>
               Cell : +8801843306208</p>
            <h3 className="text-lg font-medium">UAE Office</h3>
            <p>P.O. Box: 1994, Murishid, Fujairah, UAE.<br/>
               email : flexibleit.net@gmail.com<br/>
               Cell : +971 545639688</p>
               

         </div>
         <div>
         <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="text" name="name" placeholder="Your Name" value={name} className="border border-slate-600 my-3 py-4 pl-2" style={{width: '36rem'}} onChange={(e)=>{onChangeHandler("name",e.target.value)}} /><br/>
            <input type="text" name="email" placeholder="Your Email" value={email} className="border border-slate-600 my-3 w-96 py-4 pl-2" style={{width: '36rem'}} onChange={(e)=>{ onChangeHandler("email",e.target.value)}} /><br/>
            <input type="text" name="subject" placeholder="Subject" value={subject} className="border border-slate-600 my-3 w-96 py-4 pl-2" style={{width: '36rem'}} onChange={(e)=>{ onChangeHandler("subject",e.target.value)}} /><br/>
            <input type="text" name="message" placeholder="Message" value={message} className="border border-slate-600 my-3 w-96 py-8 pl-2" style={{width: '36rem'}} onChange={(e)=>{ onChangeHandler("message",e.target.value)}} /><br/>
            <button className=" bg-secondary px-6 py-3 text-stone-50 rounded">Submit</button>
         </form>
         </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
            <Footer />
         </div>
      </div>
      </div>
      </>
   )
}

export default Contact;