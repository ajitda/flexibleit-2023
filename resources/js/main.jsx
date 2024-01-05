
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
import Services from "./pages/account/services/Services";
import ServicesCreate from "./pages/account/services/ServicesCreate";
import ServiceEdit from "./pages/account/services/ServiceEdit";
import Portfolios from "./pages/account/portfolios/Portfolios";
import PortfolioCreate from "./pages/account/portfolios/PortfolioCreate";
import PortfolioEdit from "./pages/account/portfolios/PortfolioEdit";
import Testomonials from "./pages/account/testomonials/Testomonials";
import TestomonialCreate from "./pages/account/testomonials/TestomonialCreate";
import TestomonialEdit from "./pages/account/testomonials/TestomonialEdit";
import Contacts from "./pages/account/contacts/AllContacts";
import ContactView from "./pages/account/contacts/ContactCreate";
import AllBlogs from "./components/home/blog/AllBlogs";
import BlogDetails from "./components/home/blog/BlogDetails";
import AllServices from "./components/home/service/AllServices";
import ServiceDetails from "./components/home/service/ServiceDetails";
import AllTestimonials from "./components/home/testimonials/AllTestomonial";
import AllPortfolio from "./components/home/portfolio/AllPortfolio";
import PortfolioDetails from "./components/home/portfolio/PortfolioDetails";
import Privacy from "./components/privacy";
import About from "./components/About";
import EmailExtractor from "./components/tools/EmailExtractor";
import ImageTwichEmoteResizer from "./components/tools/ImageTwichEmoteResizer";
import ContactCreate from "./pages/account/contacts/ContactCreate";
import AllContacts from "./pages/account/contacts/AllContacts";
import ContactEdit from "./pages/account/contacts/ContactEdit";
import AreaCalculator from "./components/tools/area-calculator/AreaCalculator";
import ImgConverter from "./components/tools/image-converter/ImgConverter";



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
{
  path: "/account/contacts",
  element: <AllContacts />,
},
{
  path: "/account/contacts/create",
  element: <ContactCreate />,
},
{
  path: "/account/contacts/:id/edit",
  element: <ContactEdit />,
},
    {path: "/account/categories", element: <Categories />},
    {path: "/account/categories/create", element: <CategoryCreate />},
    {path: "/account/categories/:id/edit", element: <CategoryEdit />},
    {path: "/account/services", element: <Services/> },
    {path: "/account/services/create", element: <ServicesCreate />},
    {path: "/account/services/:id/edit", element: <ServiceEdit /> },
    {path: "/account/portfolios/", element: <Portfolios />},
    {path: "/account/portfolios/create", element: <PortfolioCreate />},
    {path: "/account/portfolios/:id/edit", element: <PortfolioEdit />},
    {path: "/account/testomonials", element: <Testomonials/>},
    {path: "/account/testomonials/create", element: <TestomonialCreate/>},
    {path: "/account/testomonials/:id/edit", element: <TestomonialEdit/>},
    {path: "/account/contacts", element: <Contacts/>},
    {path: "/account/contacts/:id/view", element: <ContactView/> },
    
  {path: "/contact-us",
   element: <Contact />,
 },
 {
   path: "/",
   element: <Home />,
 },
  {path: "/all-services",
  element: <AllServices />
},
{path: "/services/:slug",
    element: <ServiceDetails />
 },
  {path: "/portfolios/:slug",
   element: <PortfolioDetails />
 },
  {path: "/all-portfolios",
    element: <AllPortfolio />
 },
 {path: "/posts/:id",
    element: <BlogDetails />
 },
  {path: "/all-blogs",
    element: <AllBlogs />
 },
 {path: "/all-testimonials",
    element: <AllTestimonials />
 },
 {path: "/privacy",
    element: <Privacy />
 },
 {path: "/about-us",
    element: <About />
 },
 //tools route
 {path: "/tools/email-extractor",
    element: <EmailExtractor />
 },
 {path: "/tools/twitch-emote-resizer",
    element: <ImageTwichEmoteResizer />
 },
 {path: "/tools/area-calculator",
    element: <AreaCalculator />
 },
 {path: "/tools/image-converter",
    element: <ImgConverter />
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