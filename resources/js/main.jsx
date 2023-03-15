
import React from "react";
import Example from "./components/Example";
import Contact from "./pages/Contact";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Blogs from "./pages/blogs/Blogs";
import BlogCreate from "./pages/blogs/BlogCreate";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
   path: "/blogs/create",
   element: <BlogCreate />,
 },
  {
   path: "/blogs/contacts",
   element: <Contact />,
 },
 {
  path: "/",
  element: <Home />,
},
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

if (document.getElementById('root')) {
   // const Index = ReactDOM.createRoot(document.getElementById("example"));

   // Index.render(
   //     <React.StrictMode>
   //         <Example/>
   //     </React.StrictMode>
   // )
   ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
}