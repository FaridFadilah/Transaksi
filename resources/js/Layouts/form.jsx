import React from 'react'
import DarkMode from "@/Components/Darkmode"
import { Link, Head } from '@inertiajs/inertia-react'

const Guest = ({ children, header, formClassName, breadchumb, flash, search = null, Link}) => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen antialiased tracking-tighter bg-gray-300 dark:bg-gray-900">
            <div className={`${formClassName ? formClassName : "w-full lg:w-3/4"}`}>
                <div className="bg-slate-50 shadow rounded-xl dark:bg-gray-600">
                    <div className="p-3 flex justify-between items-center">
                        <h1 className="font-light dark:text-white text-xl text-gray-800 uppercase ">{header}</h1>
                        <div className="items-center flex ">
                            <DarkMode/>
                            {search}
                        </div>
                    </div>
                    <div className="p-3">{children}</div>
                    <div className="p-3 justify-center flex items-center">
                        {Link}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guest