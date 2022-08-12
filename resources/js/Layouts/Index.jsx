import React from 'react'
import DarkMode from "@/Components/Darkmode"
import { Link, Head } from '@inertiajs/inertia-react'

const Index = ({ children, header, formClassName, breadchumb, flash, search = null, Link}) => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen antialiased tracking-tighter bg-gray-300 dark:bg-gray-900">
            <div className={`${formClassName ? formClassName : "w-full lg:w-3/4"}`}>
                <div className="bg-slate-50 shadow rounded-xl dark:bg-gray-600">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Index