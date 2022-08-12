import React, { useState } from "react"
import Index from "@/Layouts/Index"
import Table from "@/Components/Table"
import { Link, Head, usePage } from "@inertiajs/inertia-react"
import Breadchumb from "@/Components/Breadchumb"
import Button from "@/Components/Button"
import DarkMode from "@/Components/Darkmode"
import { Inertia } from "@inertiajs/inertia"

const Homepage = ({ sales, HeadTable,customers}) => {
    var i = 1
    const { flash } = usePage().props
    const [tableFilter,setTableFilter] = useState([])
    const [value, setValue] = useState("")
    const [dataSource, setDataSource] = useState(sales) 
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
        Inertia.delete(route("sales.destroy", id), {
            onBefore: () => confirm("Yakin ingin dihapus??")
        })
    }

    return (
        <div className="">
            <div className="p-3 flex justify-between items-center">
                <h1 className="font-light dark:text-white text-xl text-gray-800 uppercase ">Barang</h1>
                <div className="items-center flex ">
                    <DarkMode/>
                    <input type="text" placeholder='Cari' onChange={filterData} value={value} className="px-4 py-2 w-full border-gray-300 shadow-sm focus:ring focus:ring-sky-400 transition duration-200 rounded-xl dark:bg-gray-700 dark:placeholder:text-white"/>
                </div>
            </div>
            <div className="p-3">
                {flash.message && (<div class="px-4 py-1.5 text-xl text-white rounded-r-lg border-l-blue-500 border-l-4 bg-sky-300 w-1/2 lg:w-1/8">{flash.message}</div>)}
                <div className="p-3 justify-start text-center">
                        <Breadchumb href={route("sales.index")} active>Transaksi</Breadchumb>
                        <Breadchumb href={route("customer.index")}>Customer</Breadchumb>
                        <Breadchumb href={route("barang.index")}>Barang</Breadchumb>
                </div>
                <Table>
                    <thead className="border bg-slate-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100">
                            <tr className="">
                            {HeadTable.map((th, index) => ( <th key={index} className="py-2 whitespace-nowrap border ">{th}</th>))}
                            </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {value.length > 0 ? tableFilter.map((sales, index)=>(
                            <tr key={index} className="border dark:bg-gray-300">
                            <td className="border py-2 whitespace-nowrap">{i++}</td>
                            <td className="border py-2 whitespace-nowrap">{sales.code}</td>
                            <td className="border py-2 whitespace-nowrap">{sales.tgl}</td>
                            <td className="border py-2 whitespace-nowrap">{sales.customer.name}</td>
                            <td className="border py-2 whitespace-nowrap">{sales.jumlah_pesanan * 1}</td>
                            <td className="border py-2 whitespace-nowrap">{"Rp. " + sales.subtotal * 1}</td>
                            <td className="border py-2 whitespace-nowrap">{sales.barang.discount * 1 + "%"}</td>
                            <td className="border py-2 whitespace-nowrap">{sales.ongkir * 1}</td>
                            <td className="border py-2 whitespace-nowrap">{sales.total_bayar * 1}</td>
                            <td className="border py-2 whitespace-nowrap">
                                <Button type="button" onClick={handleDelete.bind(this, sales.id)} className="px-2 py-1.5 hover:bg-red-600 bg-red-500 rounded-xl text-white">Delete</Button>
                            </td>
                        </tr>
                        )) :
                        dataSource.map((sales, index)=> (
                            <tr key={index} className="border dark:bg-gray-300">
                                <td className="border py-2 whitespace-nowrap">{i++}</td>
                                <td className="border py-2 whitespace-nowrap">{sales.code}</td>
                                <td className="border py-2 whitespace-nowrap">{sales.tgl}</td>
                                <td className="border py-2 whitespace-nowrap">{sales.customer.name}</td>
                                <td className="border py-2 whitespace-nowrap">{sales.jumlah_pesanan * 1}</td>
                                <td className="border py-2 whitespace-nowrap">{"Rp. " + sales.subtotal * 1}</td>
                                <td className="border py-2 whitespace-nowrap">{sales.barang.discount * 1 + "%"}</td>
                                <td className="border py-2 whitespace-nowrap">{sales.ongkir * 1}</td>
                                <td className="border py-2 whitespace-nowrap">{sales.total_bayar * 1}</td>
                                <td className="border py-2 whitespace-nowrap">
                                    <Button type="button" onClick={handleDelete.bind(this, sales.id)} className="px-2 py-1.5 hover:bg-red-600 bg-red-500 rounded-xl text-white">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="p-3 justify-center flex items-center">
                <Link href={route("sales.create")} className="text-blue-700 text-lg hover:underline dark:text-gray-100">Tambah Transaksi</Link>
            </div>
        </div>
    )
}
Homepage.layout = page => <Index children={page}/>
export default Homepage