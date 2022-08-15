import React, { useState } from "react"
import Table from "@/Components/Table"
import { Link, Head, usePage } from "@inertiajs/inertia-react"
import Breadchumb from "@/Components/Breadchumb"
import Button from "@/Components/Button"
import { Inertia } from "@inertiajs/inertia"
import Index from "@/Layouts"
import DarkMode from "@/Components/Darkmode"

const Homepage = ({customers, HeadTable}) => {
    var i = 1
    const { flash } = usePage().props
    const [tableFilter,setTableFilter] = useState([])
    const [value, setValue] = useState("")
    const [dataSource, setDataSource] = useState(customers) 
    const filterData = (e) => {
        if(e.target.value != ""){
            setValue(e.target.value)
            const filterTable = dataSource.filter(o => Object.keys(o).some(
                k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ))
                setTableFilter([...filterTable])
        }else{
            setValue(e.target.value)
            setDataSource([...dataSource])
        }
    }

    const handleDelete = (id) => {
        Inertia.delete(route("customer.destroy", id), {
            onBefore: () => confirm("Yakin ingin dihapus??")
        })
    }
    
    return (
        <div className="">
            <div className="p-3 flex justify-between items-center">
                <h1 className="font-light dark:text-white text-xl text-gray-800 uppercase ">Customer</h1>
                <div className="items-center flex ">
                    <DarkMode/>
                    <input type="text"  placeholder='Cari' onChange={filterData} value={value} className="px-2.5 py-1.5 w-full border-gray-300 shadow-sm focus:ring focus:ring-sky-400 transition duration-200 rounded-xl dark:bg-gray-700 dark:placeholder:text-white"/>
                </div>
            </div>
            <div className="p-3">
                {flash.message && (<div className="px-4 py-2.5 text-xl text-white rounded-r-lg border-l-blue-500 border-l-4 bg-sky-300 w-1/3 lg:w-1/5">{flash.message}</div>)}
                <div className="p-3 justify-start text-center">
                        <Breadchumb href={route("sales.index")}>Transaksi</Breadchumb>
                        <Breadchumb href={route("customer.index")} active>Customer</Breadchumb>
                        <Breadchumb href={route("barang.index")} >Barang</Breadchumb>
                </div>
                <Table>
                    <thead className="border bg-slate-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100">
                        <tr className="">
                        {HeadTable.map((th, index) => (
                            <th key={index} className="py-2 whitespace-nowrap border ">{th}</th>
                        ))}
                        </tr>                
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {value.length > 0 ? tableFilter.map((customer, index)=> (
                            <tr key={index} className="border dark:bg-gray-300">
                                <td className="border py-2 whitespace-nowrap">{i++}</td>
                                <td className="border py-2 whitespace-nowrap">{customer.code}</td>
                                <td className="border py-2 whitespace-nowrap">{customer.name}</td>
                                <td className="border py-2 whitespace-nowrap">{customer.telp}</td>
                                <td className="border py-2 whitespace-nowrap">
                                    <Button type="button" onClick={ handleDelete.bind(this,customer.id) } className="px-2 py-1.5 hover:bg-red-600 bg-red-500 rounded-xl text-white">Delete</Button>
                                </td>
                            </tr>
                        )) : dataSource.map((customer, index)=> (
                            <tr key={index} className="border dark:bg-gray-300">
                                <td className="border py-2 whitespace-nowrap">{i++}</td>
                                <td className="border py-2 whitespace-nowrap">{customer.code}</td>
                                <td className="border py-2 whitespace-nowrap">{customer.name}</td>
                                <td className="border py-2 whitespace-nowrap">{customer.telp}</td>
                                <td className="border py-2 whitespace-nowrap">
                                    <Link href={route("customer.edit",customer.id)} className=" mr-2 px-2 py-1.5 hover:bg-green-600 bg-green-500 rounded-xl text-white">Edit</Link>
                                    <Button type="button" onClick={ handleDelete.bind(this,customer.id) } className="px-2 py-1.5 hover:bg-red-600 bg-red-500 rounded-xl text-white">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="p-3 justify-center flex items-center">
                <Link href={route("customer.create")} className="text-blue-700 text-lg hover:underline">Tambah Customer</Link>
            </div>
        </div>
    )
}
Homepage.layout = page => <Index children={page} />
export default Homepage