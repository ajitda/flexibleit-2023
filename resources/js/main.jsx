
import React from "react";
import Example from "./components/Example";
import Contact from "./pages/Contact";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Blogs from "./pages/account/blogs/Blogs";
import BlogCreate from "./pages/account/blogs/BlogCreate";
import Categories from "./pages/account/Categories/Categories"
import Home from "./pages/Home";
import BlogEdit from "./pages/account/blogs/BlogEdit";
import { element } from "prop-types";
import CategoryCreate from "./pages/account/Categories/CategoryCreate";
import CategoryEdit from "./pages/account/Categories/CategoryEdit";
import Services from "./pages/account/services/services";
import ServicesCreate from "./pages/account/services/ServicesCreate";


const router = createBrowserRouter([
  {
    path: "/account",
    element: <Blogs />,
  },
  {
    path: "/account/blogs",
    element: <Blogs />,
  },
  {
   path: "/account/blogs/create",
   element: <BlogCreate />,
 },
 {
  path: "/account/blogs/:id/edit",
  element: <BlogEdit />,
},
    {path: "/account/categories", element: <Categories />},
    {path: "/account/categories/create", element: <CategoryCreate />},
    {path: "/account/categories/:id/edit", element: <CategoryEdit />},
    {path: "/account/services", element: <Services />},
    {path: "/account/services/create", element: <ServicesCreate />},
    
  {path: "/account/blogs/contacts",
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