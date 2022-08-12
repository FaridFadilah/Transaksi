import React from "react"

const Table = ({children, ...props}) => (
        <div className="overflow-auto rounded-xl shadow">
            <table className="w-full text-center border-collapse">
                {children}
            </table>
        </div>
    )

export default Table;