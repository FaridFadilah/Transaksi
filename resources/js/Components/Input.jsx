import React from 'react';

const Input = ({placeholder, type = "text",...props }) => {
    return (
        <input autoComplete="off" type={type} {...props} placeholder={placeholder} className="w-full px-4 py-1.5 rounded-xl focus:outline-none focus:ring focus:ring-blue-400 transition duration-200 dark:text-gray-100 dark:bg-gray-500 dark:placeholder:text-gray-100"/>
    );
}
export default Input