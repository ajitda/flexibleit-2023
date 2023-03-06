import React from 'react';

const Button = ({text, link="", className=""}) => {
    return (<a href={link} className={` sm:py-3 sm:px-5 rounded-full font-sans animated slideInRight ${className}`}>{text}</a>)
}

export default Button;