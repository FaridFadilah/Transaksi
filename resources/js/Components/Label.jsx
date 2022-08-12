import React from 'react'

const Label = ({ forInput, children, className }) => {
    return (
        <label htmlFor={forInput} className={`block font-medium text-lg text-gray-700 dark:text-gray-100 ` + className}>
            {children}
        </label>
    );
}
export default Label